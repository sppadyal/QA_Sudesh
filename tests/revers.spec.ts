import {test,expect} from '@playwright/test';


test('reverse string', async () => {
    const str = 'Hello, World!';
    const reversedStr = str.split('').reverse().join('');
    expect(reversedStr).toBe('!dlroW ,olleH');
});