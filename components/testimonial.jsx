import { testimonial } from "@/data/testimonial";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 ">
      <div className="container mx-auto px-4 md:px-6 ">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tighter">
          What Our User Say
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3  mx-auto gap-8 max-w-6xl">
          {testimonial.map((testimonial, index) => {
            return (
              <Card key={index} className="bg-background ">
                <CardContent >
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className={`rounded-full object-cover border-primary/20 border-2`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
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

export default Testimonial;
