import { useState, Dispatch, SetStateAction } from "react";
import useDemo from "../Box/demo";

type CountBtnType = {
  setVal: Dispatch<SetStateAction<number>>;
};

const CountBtn = ({ setVal }: CountBtnType) => {
  const [count, setCount] = useState(0);

  let myName: string = "KS";

  const handleCount = () => {
    setCount((count) => {
      setVal(count);
      return count + 1;
    });
  };

  return <button onClick={handleCount}>count is {count}</button>;
};

export default CountBtn;
