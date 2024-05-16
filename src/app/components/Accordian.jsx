"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordian.css";

export default function AccordianComp() {
  return (
    <Accordion.Root collapsible>
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Trigger className="AccordionTrigger">
          <span>Question?</span>

          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content>Answer</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Trigger className="AccordionTrigger">
          <span>Question?</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content>Answer</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-3">
        <Accordion.Trigger className="AccordionTrigger">
          <span>Question?</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content>Answer</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
