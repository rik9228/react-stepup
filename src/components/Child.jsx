import { memo } from "react";

const Child = memo((props) => {
  console.log("Child");
  const { count, changeText } = props;

  return (
    <>
      <input type="text" onChange={changeText} />
      <p>Child component</p>
      {count}
    </>
  );
});

export default Child;
