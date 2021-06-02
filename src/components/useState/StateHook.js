import React, {useState} from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);
    return (
      <div>
        <p>Clicked {count} times</p>
        <button onClick={() => setCount(count +1)}>
          Click Here
        </button>
      </div>
    );
}

export default StateHook