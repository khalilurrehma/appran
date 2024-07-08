import React from "react";
import SunEditor from "suneditor-react";
const EditorForDetails = () => {
  return (
    <div className="editor-container">
      <SunEditor
        lang="en" // Language setting (optional)
        height="200px" // Height of the editor (optional)
        placeholder="Enter text here..." // Placeholder text (optional)
        setOptions={{
          buttonList: [
            ["font", "fontSize", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["removeFormat"],
            ["fontColor", "hiliteColor"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "table"],
            ["link", "image", "video"],
            ["fullScreen", "codeView"],
          ],
        }}
        onChange={(content) => console.log(content)} // Handle editor content change
      />
    </div>
  );
};

export default EditorForDetails;
