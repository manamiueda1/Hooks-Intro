import React, { useState, useCallback } from 'react'

const CallbackHook = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  return (
    <div>
        <h1>useCallBack Hook</h1>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CallbackHook