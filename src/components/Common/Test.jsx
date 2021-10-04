import React from 'react';
import { encryption } from './useRSA';
import { encryptDES } from './useDES'

const Test = () => {
    const t = "123test123";
    return (
        <div>
            <h3>RSA：{encryption(t)}</h3>
            <h3>DES：{encryptDES(t)}</h3>
        </div>
    )
}

export default Test;