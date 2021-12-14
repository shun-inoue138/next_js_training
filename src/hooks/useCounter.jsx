const { useState } = require('react');

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setCount((count) => ++count);
  };
  return { count, setCount, isShow, setIsShow, handleClick };
};
