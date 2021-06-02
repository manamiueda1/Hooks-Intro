import React from 'react';
import { UserContext } from './ContextHook';

const GrandChild = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <div>Username is: {user}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default GrandChild