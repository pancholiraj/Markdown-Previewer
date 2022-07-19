import React from "react";
import styled from "styled-components";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { BsArrowsAngleContract } from "react-icons/bs";

const Previewer = ({ onPreviewClick, previewView, editorView }) => {
  return (
    <PreviewerDiv
      style={
        previewView
          ? { height: "100vh" }
          : { height: "40vh" } && editorView
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <Heading>
        Previewer
        <ToggleIcon onClick={onPreviewClick}>
          {previewView ? <BsArrowsAngleContract /> : <FaCompressArrowsAlt />}
        </ToggleIcon>
      </Heading>
      <InsidePreviewer>
        Welcome to my React Markdown Previewer! This is a sub-heading... And
        here's some other cool stuff: Heres some code, , between 2 backticks.
        <br />
        this is multi-line code: You can also make text bold... whoa! Or italic.
        Or... wait for it... both! And feel free to go crazy crossing stuff out.
        There's also links, and Block Quotes! And if you want to get really
        crazy, even tables: Wild Header Crazy Header Another Header? Your
        content can be here, and it can be here.... And here. Okay.
        <br />
        I think we get it. And of course there are lists. Some are bulleted.
        With different indentation levels. That look like this. And there are
        numbered lists too. Use just 1s if you want! And last but not least,
        let's not forget embedded images: freeCodeCamp Logo
        <br />
        Welcome to my React Markdown Previewer! This is a sub-heading... And
        here's some other cool stuff: Heres some code, , between 2 backticks.
        <br />
        this is multi-line code: You can also make text bold... whoa! Or italic.
        Or... wait for it... both! And feel free to go crazy crossing stuff out.
        There's also links, and Block Quotes! And if you want to get really
        crazy, even tables: Wild Header Crazy Header Another Header? Your
        content can be here, and it can be here.... And here. Okay. I think we
        get it. And of course there are lists. Some are bulleted. With different
        indentation levels. That look like this. And there are numbered lists
        too. Use just 1s if you want! And last but not least, let's not forget
        embedded images: freeCodeCamp Logo Welcome to my React Markdown
        Previewer! This is a sub-heading... And here's some other cool stuff:
        Heres some code, , between 2 backticks. this is multi-line code: You can
        also make text bold... whoa! Or italic. Or... wait for it... both! And
        feel free to go crazy crossing stuff out. There's also links, and Block
        Quotes! And if you want to get really crazy, even tables: Wild Header
        Crazy Header Another Header? Your content can be here, and it can be
        here.... And here. Okay. I think we get it. And of course there are
        lists. Some are bulleted. With different indentation levels. That look
        like this. And there are numbered lists too. Use just 1s if you want!
        And last but not least, let's not forget embedded images: freeCodeCamp
        Logo
        <br />
        this is multi-line code: You can also make text bold... whoa! Or italic.
        Or... wait for it... both! And feel free to go crazy crossing stuff out.
        There's also links, and Block Quotes! And if you want to get really
        crazy, even tables: Wild Header Crazy Header Another Header? Your
        content can be here, and it can be here.... And here. Okay. I think we
        get it. And of course there are lists. Some are bulleted. With different
        indentation levels. That look like this. And there are numbered lists
        too. Use just 1s if you want! And last but not least, let's not forget
        embedded images: freeCodeCamp Logo Welcome to my React Markdown
        Previewer! This is a sub-heading... And here's some other cool stuff:
        Heres some code, , between 2 backticks. this is multi-line code: You can
        also make text bold... whoa! Or italic. Or... wait for it... both! And
        feel free to go crazy crossing stuff out. There's also links, and Block
        Quotes! And if you want to get really crazy, even tables: Wild Header
        Crazy Header Another Header? Your content can be here, and it can be
        here.... And here. Okay. I think we get it. And of course there are
        lists. Some are bulleted. With different indentation levels. That look
        like this. And there are numbered lists too. Use just 1s if you want!
        And last but not least, let's not forget embedded images: freeCodeCamp
        Logo
        <br />
        this is multi-line code: You can also make text bold... whoa! Or italic.
        Or... wait for it... both! And feel free to go crazy crossing stuff out.
        There's also links, and Block Quotes! And if you want to get really
        crazy, even tables: Wild Header Crazy Header Another Header? Your
        content can be here, and it can be here.... And here. Okay. I think we
        get it. And of course there are lists. Some are bulleted. With different
        indentation levels. That look like this. And there are numbered lists
        too. Use just 1s if you want! And last but not least, let's not forget
        embedded images: Logo Welcome to my React Markdown Previewer! This is a
        sub-heading... And here's some other cool stuff: Heres some code, ,
        between 2 backticks. this is multi-line code: You can also make text
        bold... whoa! Or italic. Or... wait for it... both! And feel free to go
        crazy crossing stuff out. There's also links, and Block Quotes! And if
        you want to get really crazy, even tables: Wild Header Crazy Header
        Another Header? Your content can be here, and it can be here.... And
        here. Okay. I think we get it. And of course there are lists. Some are
        bulleted. With different indentation levels. That look like this. And
        there are numbered lists too. Use just 1s if you want! And last but not
        least, let's not forget embedded images: freeCodeCamp Logo
      </InsidePreviewer>
    </PreviewerDiv>
  );
};

const PreviewerDiv = styled.div`
  background-color: white;
  width: 85%;
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
const InsidePreviewer = styled.p`
  padding: 5px 10px;
  background-color: white;
`;

export default Previewer;
