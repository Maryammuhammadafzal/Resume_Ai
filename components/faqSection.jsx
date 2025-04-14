import { faqs } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import React from "react";

const FaqSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Question</h2>
          <p className="text-muted-foreground">
            Find answer to common question about our platform
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" className="w-full" collapsible>
            {faqs.map((faq, index) => {
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
