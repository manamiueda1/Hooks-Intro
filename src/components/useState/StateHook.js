import React, {useState} from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);
    return (
      <div>
        <h1>useState Hook</h1>
        <p>Clicked {count} times</p>
        <button onClick={() => setCount(count +1)}>
          Click Here
        </button>
      </div>
    );
}

export default StateHook