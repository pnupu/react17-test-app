import React, { useState } from 'react';

const AsyncStateUpdates: React.FC = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // This will behave differently in React 18 due to automatic batching
  const handleClick = () => {
    setTimeout(() => {
      setCount(c => c + 1);
      setFlag(f => !f);
    }, 0);
  };

  console.log('Render - this will log twice in React 17, once in React 18');

  return (
    <div>
      <h2>Async State Updates</h2>
      <p>Count: {count}</p>
      <p>Flag: {flag.toString()}</p>
      <button onClick={handleClick}>Update States</button>
    </div>
  );
};

export default AsyncStateUpdates;