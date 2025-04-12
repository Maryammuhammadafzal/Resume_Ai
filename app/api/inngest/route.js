
import { inngest } from "@/lib/Inngest/client"
import { serve } from "inngest/next"

export const { GET , POST , PUT , DELETE } = serve({
        client : inngest,
        function : [
                
        ]
})