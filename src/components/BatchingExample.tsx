import React, { useState, useEffect } from 'react';

const BatchingExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('State updated:', { count1, count2 });
  }, [count1, count2]);

  const handleClick = () => {
    // In React 17, these will cause two renders in setTimeout
    // In React 18, they'll be batched into one render
    setTimeout(() => {
      setCount1(c => c + 1);
      setCount2(c => c + 1);
    }, 0);
  };

  return (
    <div>
      <h2>Batching Example</h2>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <button onClick={handleClick}>Update Counts</button>
    </div>
  );
};

export default BatchingExample;