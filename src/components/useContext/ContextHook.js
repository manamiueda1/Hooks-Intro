import React from 'react';
import Child from './Child'

export const UserContext = React.createContext()

const ContextHook = () => {
    return (
        <div>
            <UserContext.Provider value={'Tom'}>
                <Child/>
            </UserContext.Provider>
        </div>
    )
}

export default ContextHook
