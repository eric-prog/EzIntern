import { Answers } from "@/data/Answers";
import Item from "./Item"


export default function List() {
    return (
      <div>
        {Answers.map((answer, i)=> (
            <Item key={i} answer={answer} />
        ))}
      </div>
    )
  }
  