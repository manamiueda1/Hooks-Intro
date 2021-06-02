import React, {useState, useEffect} from 'react';

const EffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
      console.log(`You clicked ${count} times`)
  })
    return (
      <div>
        <h1>useEffect Hook</h1>
        <p>Clicked {count} times</p>
        <button onClick={() => setCount(count +1)}>
          Click Here
        </button>
      </div>
    );
}

export default EffectHook