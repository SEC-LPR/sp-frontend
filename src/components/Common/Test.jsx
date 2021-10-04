import React from 'react';
import { encryption } from './useRSA';
const Test = () => {
    const t = "123test123";
    return (
        <div>
            {encryption(t)}
        </div>
    )
}

export default Test;