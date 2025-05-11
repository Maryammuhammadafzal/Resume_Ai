"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

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
                        async () => {

                                // Find if the industry exist 
                                let industryInsight = await tx.industryInsights.findUnique({
                                        where: {
                                                industry: data.industry,
                                        },
                                });
                                //if industry doen't exist, create it with default values - will replace it with ai later

                                if (!industryInsight) {
                                        industryInsight = await tx.industryInsight.create({
                                                data: {
                                                        industry: data.industry,
                                                        salaryRanges: [],
                                                        growthRate: 0,
                                                        demandLevel: "Medium",
                                                        topSkills: [],
                                                        marketOutlook: "Neutral",
                                                        keyTrends: [],
                                                        recommendedSkills: [],
                                                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //1 week from now
                                                }
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
                return result.user;
        } catch (error) {
                console.error("Error Updating user ", error.message);
                throw new Error("Failed to update profile");

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
                                id: userId,
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
                throw new Error("Error Checking on boarding Status");
        }
}