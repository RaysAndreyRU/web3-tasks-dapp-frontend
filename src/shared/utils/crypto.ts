import CryptoJS from 'crypto-js'

/*encrypt Tasks with AES*/
export const encryptText = (text: string, key: string) => {
    return CryptoJS.AES.encrypt(text, key).toString()
}

export const decryptText = (cipher: string, key: string) => {
    try {
        const bytes = CryptoJS.AES.decrypt(cipher, key)
        return bytes.toString(CryptoJS.enc.Utf8)
    } catch  {
        return ''
    }
}
