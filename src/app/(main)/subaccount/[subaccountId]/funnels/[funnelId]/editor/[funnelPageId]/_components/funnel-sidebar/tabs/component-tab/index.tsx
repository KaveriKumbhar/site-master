import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorBtns } from "@/lib/constants";
import React from "react";
import TextElement from "./text-placeholder";
import ContainerPlaceholder from "./container-placeholder";
import VideoPlaceholder from "./video-placeholder";
import LinkPlaceholder from "./link-placeholder";
import TwoColumnsPlaceHolder from "./two-columns-placeholder";
import ContactFormPlaceHolder from "./contact-form-placeholder";
import ComponentPlaceholder from "./component-placeholder";

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
      label: "Text",
      id: "p",
      group: "elements",
    },
    {
      Component: <ContainerPlaceholder />,
      label: "Container",
      id: "div",
      group: "layout",
    },
    {
      Component: <VideoPlaceholder />,
      label: "Video",
      id: "video",
      group: "elements",
    },
    {
      Component: <ContactFormPlaceHolder />,
      label: "Contact",
      id: "contactForm",
      group: "elements",
    },
    // {
    //   Component: <CheckoutPlaceholder />,
    //   label: "Checkout",
    //   id: "paymentForm",
    //   group: "elements",
    // },
    {
      Component: <LinkPlaceholder />,
      label: "Link",
      id: "a",
      group: "elements",
    },
    {
      Component: <ComponentPlaceholder />,
      label: "Component",
      id: "component",
      group: "elements",
    },
    {
      Component: <TwoColumnsPlaceHolder />,
      label: "2Col",
      id: "2Col",
      group: "layout",
    },
  ];

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={["Layout", "Elements"]}
    >
      <AccordionItem value="Layout" className="px-6 py-0 border-y-[1px]">
        <AccordionTrigger className="!no-underline">Layout</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter((element) => element.group === "layout")
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Elements" className="px-6 py-0 border-y-[1px]">
        <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
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
