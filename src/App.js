import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import styled from "styled-components";
import { useState } from "react";
function App() {
  const [editorView, setEditorView] = useState(false);
  const [previewView, setPreviewView] = useState(false);

  const onEditClick = () => {
    setEditorView(!editorView);
    setPreviewView(false);
    console.log("editor");
  };

  const onPreviewClick = () => {
    setPreviewView(!previewView);
    setEditorView(false);
    console.log("preview");
  };

  return (
    <Main>
      <Editor
        onEditClick={onEditClick}
        editorView={editorView}
        previewView={previewView}
      />
      <Previewer
        onPreviewClick={onPreviewClick}
        previewView={previewView}
        editorView={editorView}
      />
    </Main>
  );
}

const Main = styled.div`
  background-color: cornflowerblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default App;
