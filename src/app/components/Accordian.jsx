"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Accordian.css";

export default function AccordianComp() {
  return (
    <Accordion.Root className="AccordionRoot" collapsible>
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Trigger className="AccordionTrigger">
          <span>Question?</span>

          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content className="AccordionContent">
          Answer
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Trigger className="AccordionTrigger">
          <span>Question?</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content className="AccordionContent">
          Answer
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-3">
        <Accordion.Trigger className="AccordionTrigger">
          <span>Who made this app?</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>

        <Accordion.Content className="AccordionContent">
          It&apos;s me! Hi! You can find some of my other projects here:
          ✩₊˚.⋆☾⋆⁺₊✧ https://github.com/splendidist ✩₊˚.⋆☾⋆⁺₊✧
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
