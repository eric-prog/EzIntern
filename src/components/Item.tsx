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
        <div className={`item ${clicked ? "active" : ""}`}>
            <button className="button" onClick={handleToggle}>{answer.question}
                <span className="control">{clicked ? <span className="minus">—</span> : "+"} </span>
            </button>

            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    clicked
                    ? { height: contentEl.current ? contentEl.current.scrollHeight : 0 }
                    : { height: "0px" }
            }>
                <div className="answer">
                    <p>{answer.answer}</p>
                    {answer.link.length > 0 && <p className="helpful">Helpful Links:</p>}
                    {answer.link.map((link, i) => (
                        <li key={i} className="li-link"><a className="link" href="#">{link}</a></li>
                    ))}
                </div>
            </div>
        </div>
    );
};
