import React, { forwardRef, useState } from "react";

import ContentEditor from "./ContentEditor";
import Options from "./Options";
import "./Card3.css";

const defaultHeading = "Banana Monkey Jungle problem";
const defaultTextArea = `I think the lack of reusability comes in object oriented languages, not in functional languages. Because the problem with object oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle

                                                                                                   -- Joe Armstrong`;

const Card = forwardRef((_, ref) => {
  const [options, setOptions] = useState({
    padding: { x: 40, y: 40 },
    theme: "one-dark",
    mode: "javascript",
    cardBGColor: "#00a8f0",
  });

  const { padding, cardBGColor } = options;
  return (
    <>
      <Options onChange={options => setOptions(options)} />
      <div
        className="Card3"
        ref={ref}
        style={{
          backgroundColor: cardBGColor,
          padding: `${padding.y}px ${padding.x}px`,
        }}
      >
        <div className="CardInner">
          <ContentEditor
            className="Heading"
            defaultTextColor="#586E75"
            defaultBGColor="#FDF6E3"
            defaultValue={defaultHeading}
          />
          <ContentEditor
            className="TextArea"
            defaultTextColor="#586E75"
            defaultBGColor="#FDF6E3"
            defaultValue={defaultTextArea}
          />
        </div>
      </div>
    </>
  );
});

export default Card;
