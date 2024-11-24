function Title({ blocked }) {
  return (
    <h1 className='w-full mt-4 px-2 text-[6vw] sm:text-3xl md:text-4xl font-medium leading-tight tracking-wider text-center uppercase opacity-60 max-w-96'>
      {blocked ? (
        <span>
          You&apos;ve reached the <b>limit!</b>
        </span>
      ) : (
        "Counter"
      )}
    </h1>
  );
}

export default Title;
