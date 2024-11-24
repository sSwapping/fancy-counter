import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

function Button({ type, setCount, blocked }) {
  const handleCount = (event) => {
    setCount((prevCount) => {
      if (type === "minus") {
        return Math.max(prevCount - 1, 0);
      } else {
        return Math.min(prevCount + 1, 99);
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button
      disabled={blocked}
      onClick={handleCount}
      className={`
        flex-1 flex justify-center items-center
        cursor-pointer transition-all duration-300
        hover:bg-custom-darkest-teal focus:bg-custom-darkest-teal
        border-[rgba(0,254,241,0.07)]
        ${type === "minus" ? "border-r" : "border-l"}
        p-4 sm:p-3 md:p-4 lg:p-5
        disabled:opacity-50 disabled:cursor-not-allowed
        touch-action-manipulation
      `}
      aria-label={type === "minus" ? "Decrease count" : "Increase count"}
    >
      {type === "minus" ? (
        <MinusIcon className='text-[rgba(77,138,128,0.788)] opacity-90 h-[8vw] w-[8vw] max-h-8 max-w-8 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
      ) : (
        <PlusIcon className='text-[rgba(77,138,128,0.788)] opacity-90 h-[8vw] w-[8vw] max-h-8 max-w-8 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10' />
      )}
    </button>
  );
}

export default Button;
