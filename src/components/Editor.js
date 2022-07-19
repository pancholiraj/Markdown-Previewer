import React from "react";
import styled from "styled-components";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { BsArrowsAngleContract } from "react-icons/bs";
const Editor = ({ onEditClick, editorView, previewView }) => {
  return (
    <EditorDiv
      style={
        editorView
          ? { height: "100vh" }
          : { height: "40vh" } && previewView
          ? { display: "none" }
          : { display: "block" }
      }
      editorView={editorView}
      previewView={previewView}
    >
      <Heading>
        Editor
        <ToggleIcon onClick={onEditClick}>
          {editorView ? <BsArrowsAngleContract /> : <FaCompressArrowsAlt />}
        </ToggleIcon>
      </Heading>
      <InsideEditor>
        # Welcome to my React Markdown Previewer! ## This is a sub-heading...
        <br />
        ### And here's some other cool stuff: Heres some code,
        <br />`<div></div>`, between 2 backticks. ```
        <br />
        this is multi-line code: function anotherExample(firstLine, lastLine)
        <br />
        You can also make text **bold**... whoa! Or _italic_. Or... wait for
        it... **_both!_** And feel free to go crazy ~~crossing stuff out~~.
        <br />
        There's also [links](https:www.freecodecamp.org), and Block Quotes! And
        if you want to get really crazy, even tables: Wild Header | Crazy Header
        |
        <br />
        Another Header? ------------ | ------------- | ------------- Your
        content can | be here, and it | can be here.... And here. | Okay. | I
        think we get it. - And of course there are lists. - Some are bulleted. -
        With different indentation levels. - That look like this. 1. And there
        are numbered lists too. 1. Use just 1s if you want! 1. And last but not
        least, let's not forget embedded images: ![freeCodeCamp Logo]
        <br />
        (https:cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
      </InsideEditor>
    </EditorDiv>
  );
};

const EditorDiv = styled.div`
  background-color: white;
  width: 25%;
  height: 40vh;
  border: 1px solid black;
  margin: 20px auto;
  overflow: scroll;
`;
const Heading = styled.div`
  background-color: #cf2241;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
const ToggleIcon = styled.div`
  color: black;
`;
const InsideEditor = styled.div`
  padding: 5px 10px;
  background-color: white;
`;

export default Editor;
