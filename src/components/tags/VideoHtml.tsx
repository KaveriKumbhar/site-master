import React from "react";
import { EditorElement } from "@/providers/editor/editor-provider";

const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

const convertStylesToString = (styles: React.CSSProperties) => {
  return Object.entries(styles)
    .map(([key, value]) => `${toKebabCase(key)}: ${value};`)
    .join(" ");
};

const VideoHtml = ({ element }: { element: EditorElement }) => {
  const { id, styles, content } = element;

  // Extract video ID correctly from various formats
  let videoId = "";
  if (!Array.isArray(content) && content.src) {
    const url = new URL(content.src);
    if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
      videoId = url.searchParams.get("v") || "";
    } else if (url.hostname === "youtu.be") {
      videoId = url.pathname.substring(1);
    }
  }

  // Generate the embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  // Return HTML for iframe
  return `
  <div
    style="padding: 2px;
    width: 100%;
    margin: 5px;
    position: relative;
    font-size: 16px;
    transition: all 0.3s ease;display: flex;align-items: center;justify-items: center;${convertStylesToString(
      styles
    )}"
  >
    <iframe
      id="${id}"
      style="${convertStylesToString(styles)}"
      src="${embedUrl}"
      width="${styles.width || "560"}"
      height="${styles.height || "315"}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>
  `;
};

export default VideoHtml;
