import { GetEncryptionKey } from './keychain'

describe('keychain tests', () => {
    test('GetEncryptionKey', async () => {
        const key = await GetEncryptionKey()

        // since keychain is mocked, nothing will be stored so GetEncryptionKey should return newly generated key
        expect(key).toHaveLength(32)
    });


})