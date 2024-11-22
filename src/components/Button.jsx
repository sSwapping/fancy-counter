import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function Button({ type, setCount }) {
  const handleCount = () => {
    setCount((prevCount) => {
      if (type === "minus") {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        } else {
          return newCount;
        }
      } else {
        return prevCount + 1;
      }
    });
  };
  return (
    <button onClick={handleCount} className='count-btn'>
      {type === "minus" ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
    </button>
  );
}

export default Button;
