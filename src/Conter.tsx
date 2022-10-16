import React, { useEffect, useRef, useState } from 'react';

/*
const array: Array<number> = [1, 2, 3];
const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
array[0] = 11;
readonlyArray[0] = 11;
*/

const Conter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    ref.current.focus();
    // const current = ref.current;
    // if (current != null) current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Ckick Me!</button>
    </div>
  );
};

export default Conter;
