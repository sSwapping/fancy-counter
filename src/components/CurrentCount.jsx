function CurrentCount({ currentCount }) {
  return (
    <p
      className='text-[rgb(22,34,32)]
        text-[15vw] sm:text-[120px] md:text-[160px] lg:text-[200px]
        font-semibold
        mt-auto sm:mt-[10px]
        mb-auto'
    >
      {currentCount}
    </p>
  );
}

export default CurrentCount;
