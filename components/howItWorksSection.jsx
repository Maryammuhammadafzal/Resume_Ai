
import React from "react";
import { Card, CardContent } from "./ui/card";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWork";

const HowItWorksSection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 ">
      <div className='text-center max-w-3xl mx-auto mb-12'>
      <h2 className="text-3xl font-bold mb-4">
          How It Work
        </h2>
        <p className="text-muted-foreground">
                     Four Simple Steps to Accelerate your Career growth
                    </p>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 max-w-6xl">
          {howItWorks.map((item, index) => {
            return (
             <div key={index} className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex justify-center items-center">
                        {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-center">{item.description}</p>
             </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  )
}

export default HowItWorksSection
