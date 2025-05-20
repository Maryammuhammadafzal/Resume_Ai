import { Inngest } from "inngest";

export const inngest = new Inngest({
        id: "resume_ai01",
        name: "ResumeAi",
        credentials: {
                gemini: {
                        apiKey: process.env.GEMINI_API_KEY,
                }
        }
})