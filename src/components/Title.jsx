function Title({ blocked }) {
  return (
    <h1 className='title'>
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
