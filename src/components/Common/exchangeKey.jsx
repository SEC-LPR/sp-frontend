import React from 'react';
import * as api from 'src/utils/apiUtil';
import CryptoJS from 'crypto-js';
import { encryption } from './useRSA';

const exchangeKey = async () => {
    const getRSA = await api.getRSA();
    const PRUB_KEY = getRSA.data;  //rsa
    const key = 'DES_LPR_private_key'; //des
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    //拿到RSA，用RSA加密DES的key
    const data = encryption({ key, PRUB_KEY })
    const exchangeDES = await api.exchangeDES(data);
    return PRUB_KEY;
    
}

export default exchangeKey;