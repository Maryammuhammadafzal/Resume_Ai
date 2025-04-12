import { features } from "@/data/features";
import React from "react";
import { Card, CardContent } from "./ui/card";

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 ">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tighter">
          Powerful Features for your Career Growth
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 max-w-6xl">
          {features.map((feature, index) => {
            return (
              <Card
                key={index}
                className="border-2 hover:border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="text-center pt-6 flex flex-col items-center">
                  <div className="flex flex-col justify-center items-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
