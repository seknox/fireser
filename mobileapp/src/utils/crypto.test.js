
import { GenKey, AESEncrypt, AESDecrypt } from './crypto'



describe('crypto tests', () => {
    test('GenKey generates 32 length key', () => {
        const key = GenKey()
        expect(key).toHaveLength(32)
    });

    test('Correct encryption and decryption', ()=> {
        const key = GenKey()
        const msg = 'test data for encryption'

        let ct = AESEncrypt(key, msg)
        expect(ct).toEqual(expect.not.stringContaining(msg));

        let pt = AESDecrypt(key, ct)
        expect(pt).toEqual(msg)

    })
})