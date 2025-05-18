"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { generateAIInsights } from "./dashboard";

export const updateUser = async (data) => {
        const { userId } = await auth();

        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
                where: {
                        clerkUserId: userId,
                }
        });

        if (!user) throw new Error("User Not Found");

        try {
                const result = await db.$transaction(
                        async (tx) => {
                                
                                // Find if the industry exist 
                                let industryInsight = await tx.industryInsight.findUnique({
                                        where: {
                                                industry: data.industry,
                                        },
                                });
                                //if industry doen't exist, create it with default values - will replace it with ai later

                                if (!industryInsight) {
                                        // industryInsight = await tx.industryInsight.create({
                                        //         data: {
                                        //                 industry: data.industry,
                                        //                 salaryRanges: [],
                                        //                 growthRates: 0,
                                        //                 demandLevel: "MEDIUM",
                                        //                 topSkills: [],
                                        //                 marketOutlook: "NEUTRAL",
                                        //                 keyTrends: [],
                                        //                 recommendedSkills: [],
                                        //                 nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //1 week from now
                                        //         }
                                        // })

                                         const insights = await generateAIInsights(data.industry);
                                                        
                                         industryInsight = await db.industryInsight.create({
                                                                data : {
                                                                        industry : data.industry,
                                                                        ...insights,
                                                                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                                                                },
                                                        })
                                                        
                                }
                                //update the user
                                const updatedUser = await tx.user.update({
                                        where: {
                                                id: user.id,
                                        },
                                        data: {
                                                industry: data.industry,
                                                experience: data.experience,
                                                bio: data.bio,
                                                skills: data.skills,

                                        }
                                })
                                return { industryInsight, updatedUser }
                        },
                        {
                                timeout: 10000 //default : 5000
                        }
                )
                console.log({...result});
                
                return {success : true , ...result};
        } catch (error) {
                console.error("Error Updating user ", error.message);
                throw new Error("Failed to update profile " + error.message);

        }
}

export const getUserOnboardingStatus = async () => {
        const { userId } = await auth();

        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
                where: {
                        clerkUserId: userId,
                }
        });

        if (!user) throw new Error("User Not Found");

        try {

                const user = await db.user.findUnique({
                        where: {
                                clerkUserId: userId,
                        },
                        select: {
                                industry: true,
                        },
                });

                return {
                        isOnboarded: !!user?.industry,
                };

        } catch (error) {
                console.error("Error Checking on boarding Status", error.message);
                throw new Error("Error Checking on boarding Status" + error.message);
        }
}