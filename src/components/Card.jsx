import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import CurrentCount from "./CurrentCount";
import ResetButton from "./ResetButton";
import Title from "./Title";
import Button from "./Button";

function Card() {
  const [count, setCount] = useState(0);
  const blocked = count === 99 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space" && !blocked) {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount > 99) {
            setCount(99);
            return;
          }
          return newCount;
        });
      } else if (e.key === "Backspace" && !blocked) {
        setCount((prevCount) => {
          const newCount = prevCount - 1;
          if (newCount < 0) {
            setCount(0);
            return;
          }
          return newCount;
        });
      } else if (e.key === "r") {
        setCount(0);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown); // cleanup function
    };
  }, [count, blocked]);

  return (
    <div className={`card ${blocked ? "card--limit" : ""}`}>
      <Title blocked={blocked} />
      <CurrentCount currentCount={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <Button type='minus' setCount={setCount} blocked={blocked} />
        <Button type='plus' setCount={setCount} blocked={blocked} />
      </ButtonContainer>
    </div>
  );
}

export default Card;
