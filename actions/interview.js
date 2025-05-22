'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
})

export const generateQuiz = async () => {
        const { userId } = await auth();

        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
                where: {
                        clerkUserId: userId,
                }
        });

        if (!user) throw new Error("User Not Found");

        try {


                const prompt = `Generate 10 technical interview questions for a 
        ${user.industry} professional${user.skills?.length ? ` with expertise in ${user.skills.join(", ")}` : ""}.
Each question should be multiple choice with 4 options.
Return the response in this JSON format only, no additional text:
{
  "questions": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": "string",
      "explanation": "string"
    }
  ]
}`;

                const result = await model.generateContent(prompt)
                const response = result.response;

                const text = response.text();
                const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

                const quiz = JSON.parse(cleanedText);

                return quiz.questions;
        } catch (error) {
                console.log("error generating quiz", error.message);
                throw new Error("error generating quiz", error.message);

        }

}

export const saveQuizResult = (questions, answers, score) => {
        const { userId } = await auth();

        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
                where: {
                        clerkUserId: userId,
                }
        });

        if (!user) throw new Error("User Not Found");

        const questionResult = questions.map((q, index) => ({
                questions: q.question,
                answer: q.correctAnswer,
                userAnswer: answers[index],
                isCorrect: q.correctAnswer === answers[index],
                explaination: q.explaination,
        }));

        const wrongAnswers = questionResult.filter((q) => !q.isCorrect);

        if (wrongAnswers.length > 0) {
                const wrongQuestionsText = wrongAnswers.map((q) =>
                        `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`)
                        .join("\n\n");

                const improvementPrompt = `
The user got the following ${user.industry} technical interview questions wrong:
${wrongQuestionsText}
Based on these mistakes, provide a concise, specific improvement tip.
Focus on the knowledge gaps revealed by these wrong answers.
Keep the response under 2 sentences and make it encouraging.
Don't explicitly mention the mistakes, instead focus on what to learn/practice.
`;
        }
}