import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const credentials = {
    username: "mockname",
    password: "abcdefghijklqrstuvwxyz0123456789"
  }

const mockKeychain = {
    
    SECURITY_LEVEL_ANY: "MOCK_SECURITY_LEVEL_ANY",
    SECURITY_LEVEL_SECURE_SOFTWARE: "MOCK_SECURITY_LEVEL_SECURE_SOFTWARE",
    SECURITY_LEVEL_SECURE_HARDWARE: "MOCK_SECURITY_LEVEL_SECURE_HARDWARE",
    setGenericPassword: jest.fn().mockResolvedValue(),
    getGenericPassword: jest.fn(() => new Promise((resolve, reject) => resolve(credentials))), // eslint-disable-line no-unused-vars
    resetGenericPassword: jest.fn().mockResolvedValue(),
    
}

jest.mock('react-native-keychain', () => mockKeychain);

