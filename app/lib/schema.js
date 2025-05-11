import { z } from "zod";

export const onboardingSchema = z.object({
        industry : z.string({
                required_error : "please Select an industry",
        }),
        subIndustry : z.string({
                required_error : "please Select an specialization",
        }),
        bio : z.string().max(500).optional(),
})