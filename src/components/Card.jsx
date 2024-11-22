import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import CurrentCount from "./CurrentCount";
import ResetButton from "./ResetButton";
import Title from "./Title";

function Card() {
  const [count, setCount] = useState(3);
  return (
    <div className='card'>
      <Title />
      <CurrentCount currentCount={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}

export default Card;
