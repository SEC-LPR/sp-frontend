import CryptoJS from 'crypto-js';

const key = 'DES_LPR_private_key';
const keyHex = CryptoJS.enc.Utf8.parse(key);

// 加密
const encryptDES = (message) => {
  if (message) {
    const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
  }
  return '';
};

// 解密
const decryptDES = (ciphertext) => {
  if (ciphertext) {
    const decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Hex.parse(ciphertext),
    }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  return '';
};

export {
  encryptDES,
  decryptDES,
};
