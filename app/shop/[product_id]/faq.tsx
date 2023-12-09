import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type Props = {};

const FAQs = (props: Props) => {
  return (
    <div className="mt-4">
      <span className="text-lg lg:text-xl font-semibold">FAQs</span>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatibus, nemo quia, quae voluptate voluptatem
              voluptates doloribus consequatur quibusdam quos? Quisquam quod,
              voluptatibus, nemo quia, quae voluptate voluptatem voluptates
              doloribus consequatur quibusdam quos?
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I track my order?</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatibus, nemo quia, quae voluptate voluptatem
              voluptates doloribus consequatur quibusdam quos? Quisquam quod,
              voluptatibus, nemo quia, quae voluptate voluptatem voluptates
              doloribus consequatur quibusdam quos?
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel or change my order?</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatibus, nemo quia, quae voluptate voluptatem
              voluptates doloribus consequatur quibusdam quos? Quisquam quod,
              voluptatibus, nemo quia, quae voluptate voluptatem voluptates
              doloribus consequatur quibusdam quos?
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatibus, nemo quia, quae voluptate voluptatem
              voluptates doloribus consequatur quibusdam quos? Quisquam quod,
              voluptatibus, nemo quia, quae voluptate voluptatem voluptates
              doloribus consequatur quibusdam quos?
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
