import { useState } from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

function ShortcutsButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='absolute hidden md:block top-2 right-2'>
      <button
        className='p-2 text-[rgb(22,34,32)]/60 hover:text-[rgb(22,34,32)] hover:bg-[rgb(22,34,32)]/10 rounded-full transition-colors duration-200'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label='Show keyboard shortcuts'
      >
        <InfoCircledIcon className='w-5 h-5' />
      </button>
      {isHovered && (
        <div className='absolute top-0 -right-56 bg-white text-[rgb(22,34,32)] p-3 rounded shadow-lg z-10 w-48'>
          <h3 className='mb-2 font-semibold'>Keyboard Shortcuts:</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <kbd className='px-1 bg-gray-200 rounded'>Space</kbd> Increase
              count
            </li>
            <li>
              <kbd className='px-1 bg-gray-200 rounded'>Backspace</kbd> Decrease
              count
            </li>
            <li>
              <kbd className='px-1 bg-gray-200 rounded'>R</kbd> Reset count
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShortcutsButton;
