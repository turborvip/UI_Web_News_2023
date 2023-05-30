import React, { useRef, useEffect } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import {
    align,
    font,
    fontColor,
    fontSize,
    formatBlock,
    hiliteColor,
    horizontalRule,
    lineHeight,
    list,
    paragraphStyle,
    table,
    template,
    textStyle,
    image,
    video,
    audio,
    math,
    link
  } from 'suneditor/src/plugins';
  

const Sun = (props) => {
  const { setContentNews, values } = props;
  const optionsEditor = {
    showPathLabel: false,
    minHeight: "30vh",
    maxHeight: "50vh",
    placeholder: "Enter your text here!!!",
    plugins: [
      align,
      font,
      fontColor,
      fontSize,
      formatBlock,
      hiliteColor,
      horizontalRule,
      lineHeight,
      list,
      paragraphStyle,
      table,
      template,
      textStyle,
      image,
      video,
      audio,
      math,
      link,
    ],
    buttonList: [
      ["font", "fontSize", "formatBlock"],
      [
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "paragraphStyle",
        "fontColor",
        "hiliteColor",
      ],
      ["removeFormat"],
      //  "/", // Line break
      ["outdent", "indent", "align", "horizontalRule", "list", "lineHeight"],
      ["table", "link", "image", "video", "audio"],
      ["undo", "redo"],
    ],
    formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    font: [
      "Arial",
      "Calibri",
      "Comic Sans",
      "Courier",
      "Garamond",
      "Georgia",
      "Impact",
      "Lucida Console",
      "Palatino Linotype",
      "Segoe UI",
      "Tahoma",
      "Times New Roman",
      "Trebuchet MS",
      "Poppins",
    ],
  };

  return (
    <div>
      <SunEditor
        setAllPlugins={false}
        autoFocus={true}
        lang="en"
        setOptions={optionsEditor}
        setDefaultStyle={"font-family: Poppins; font-size: 14px;"}
        onChange={(val) => setContentNews(val)}
        setContents={values}
      />
    </div>
  );
};
export default Sun;
