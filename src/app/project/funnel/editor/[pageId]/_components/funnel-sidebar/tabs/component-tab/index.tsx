import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorBtns } from "@/lib/constants";
import React from "react";
import TextElement from "./TextElement";

type Props = {};

const ComponentsTab = (props: Props) => {
  const elements: {
    Component: React.ReactNode;
    label: string;
    id: EditorBtns;
    group: "layout" | "elements";
  }[] = [
    {
      Component: <TextElement />,
      label: 'Text',
      id: "text",
      group: 'elements',
    }
  ];

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={["Layout", "Elements"]}
    >
      <AccordionItem value="Elements" className="px-6 py-0 border-y-[1px]">
        <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
        <AccordionContent>
          {elements
            .filter((ele) => ele.group === "elements")
            .map((ele) => (
              <div
                key={ele.id}
                className="flex flex-col items-center justify-center"
              >
                {ele.Component}
                <span>{ele.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ComponentsTab;
