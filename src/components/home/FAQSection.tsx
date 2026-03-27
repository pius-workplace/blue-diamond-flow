import { AnimateOnScroll, StaggerContainer } from "@/components/AnimateOnScroll";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = [
  {
    question: "Do you offer 24/7 emergency plumbing services?",
    answer: "Yes! We're available around the clock for urgent plumbing issues in Fort Worth and surrounding areas. Call us anytime.",
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely. All our technicians are fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Fort Worth, TX and nearby communities including Arlington, Benbrook, Aledo, and more.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we offer free, no-obligation quotes for most jobs. Emergency service calls may have a diagnostic fee.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, and checks. Financing options available for larger projects.",
  },
  {
    question: "Do you guarantee your work?",
    answer: "Yes, we stand behind our repairs with a 1-year workmanship guarantee.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <AnimateOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our plumbing services
          </p>
        </div>
      </AnimateOnScroll>

      <StaggerContainer className="max-w-3xl mx-auto space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </StaggerContainer>
    </div>
  </section>
);

export default FAQSection;

