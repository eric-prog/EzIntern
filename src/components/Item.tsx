import { AnswerModel } from "@/data/AnswersModel";
import { useState } from "react";
import { useRef } from "react";


export default function Item ({ answer }: { answer: AnswerModel }) {

    const [clicked, setClicked] = useState(false);
    const contentEl = useRef<HTMLInputElement>(null);

    const handleToggle = () => {
    setClicked((prev) => !prev);
    };

    return (
        <li className={`accordion_item ${clicked ? "active" : ""}`}>
            <button className="button" onClick={handleToggle}>{answer.question}
                <span className="control">{clicked ? "—" : "+"} </span>
            </button>

            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    clicked
                    ? { height: contentEl.current ? contentEl.current.scrollHeight : 0 }
                    : { height: "0px" }
            }>
                <div className="answer">{answer.answer}</div>
            </div>
        </li>
    );
};
