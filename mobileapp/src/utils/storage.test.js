
import { SetupAsyncStorage, StoreData, GetData } from './storage'


describe('storage tests', () => {
    test('storage and retreival', async () => {
        await StoreData('testkey', 'testdata')

        let data = await GetData('testkey')
        expect(data).toEqual('testdata')
    });
})


describe('async storage initialization with encryption', () => {
    test('SetupAsyncStorage', async () => {
        await SetupAsyncStorage('ENC')

        let data = await GetData('SCAN_RESULTS')

        // in the first run, since async storage will not have been setup earlier, code should return [].
        expect(JSON.parse(data)).toEqual([]);

    });


    test('Encrypt and Decrypt async storage based on app state', async () => {

        // let first store data in async storage
        await StoreData('SCAN_RESULTS', 'testdata')

       // now encrypt with Enc
        await SetupAsyncStorage('ENC')

        let data = await GetData('SCAN_RESULTS')

        // since we already have stored data, SetupAsyncStorage should not store empty array [].
        expect(data).not.toBe([]);

        // now call  SetupAsyncStoragewith DEC action
        await SetupAsyncStorage('DEC')

        data = await GetData('SCAN_RESULTS')


        // since we already have stored data, SetupAsyncStorage should not store empty array [].
        expect(data).toEqual('testdata');
        // expect(JSON.parse(data)).toEqual('testdata');

    });
})

