import React, { useState } from 'react';
import s from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <div>
      <button className={s.btn} onClick={increment}>
        increment
      </button>
      <p>{count}</p>
      <button className={s.btn} onClick={decrement}>
        decrement
      </button>
    </div>
  );
};
