import Button from "./Button";

function ButtonContainer({ setCount }) {
  return (
    <div className='button-container'>
      <Button type='minus' setCount={setCount} />
      <Button type='plus' setCount={setCount} />
    </div>
  );
}

export default ButtonContainer;
