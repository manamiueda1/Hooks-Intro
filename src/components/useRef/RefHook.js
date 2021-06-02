import React, {useState, useRef} from 'react';


const RefHook = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    countRef.current = count

    const handleAlertClick = () => {
        setTimeout(() => {
            alert('You clicked ' + countRef.current + 'times.')
        }, 2000)
    } 
    return (
        <div>
            <h1>useRef Hook</h1>
            <p> You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}>Click Here</button>
            <button onClick={handleAlertClick}>Show Alert</button>
        </div>
    )
}

export default RefHook