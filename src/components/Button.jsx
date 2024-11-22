import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function Button({ type, setCount, blocked }) {
  const handleCount = (event) => {
    setCount((prevCount) => {
      if (type === "minus") {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prevCount + 1;
        if (newCount > 99) {
          return 99;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  };
  return (
    <button disabled={blocked} onClick={handleCount} className='count-btn'>
      {type === "minus" ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
    </button>
  );
}

export default Button;
