import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button
      onClick={handleClick}
      className='p-2 transition-all opacity-50 hover:opacity-80 focus:opacity-80 duration-400'
    >
      <ResetIcon className='text-[rgb(22,34,32)] h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10' />
    </button>
  );
}

export default ResetButton;
