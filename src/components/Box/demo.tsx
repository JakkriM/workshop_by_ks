import React from "react";

type setValType = {};
const useDemo = (defValue: number) => {
  let value = defValue;

  const handleMultiply = (val: number) => {
    return val * 2;
  };
  const setValue = () => {
    value = handleMultiply(value);
  };
  return { value, setValue };
};

export default useDemo;
