function ButtonContainer({ children }) {
  return (
    <div className='bg-custom-darker-teal h-48 max-h-[116px] w-full mt-2 rounded-b-xl flex'>
      {children}
    </div>
  );
}

export default ButtonContainer;
