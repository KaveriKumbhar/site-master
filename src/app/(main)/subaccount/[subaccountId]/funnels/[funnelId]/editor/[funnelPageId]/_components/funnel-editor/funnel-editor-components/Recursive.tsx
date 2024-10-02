import { EditorElement } from "@/providers/editor/editor-provider";
import React from "react";
import TextComponent from "./text";
import Container from "./Container";
import Video from "./Video";
import LinkComponent from "./LinkComponent";
import ContactFormComponent from "./ContactForm";

type Props = {
  element: EditorElement;
};

const Recursive = ({ element }: Props) => {
  console.log(element.type);

  switch (element.type) {
    case "__body":
      return <Container element={element} />;
    case "a":
      return <LinkComponent element={element} />;
    case "p":
      return <TextComponent element={element} />;
    case "div":
      return <Container element={element} />;
    case "video":
      return <Video element={element} />;
    case "2Col":
      return <Container element={element} />;
    case "contactForm":
      return <ContactFormComponent element={element} />;
    // case "paymentForm":
    //   return <Checkout element={element} />;
    default:
      return <Container element={element} />;
  }
};

export default Recursive;
