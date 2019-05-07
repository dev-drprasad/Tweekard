import React, { forwardRef } from "react";
import AceEditor from "react-ace";

import "brace/mode/javascript";
import CodeEditor from "./CodeEditor";
// import "brace/theme/dracula";

const Card = forwardRef(({ cardBGColor, theme, mode }, ref) => {
  return (
    <div
      className="Card"
      ref={ref.cardRef}
      style={{ backgroundColor: cardBGColor }}
    >
      <div className="CardInner">
        <div className="Content" spellCheck="false" contentEditable />
        <CodeEditor ref={ref.editorRef} theme={theme} mode={mode} />
      </div>
    </div>
  );
});

export default Card;
