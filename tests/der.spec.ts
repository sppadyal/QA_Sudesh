import {test,expect} from '@playwright/test'

function countCharacters(str:string) {
    let count: {[key: string]: number} = {};

    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }

    return count;
}
test('count the occurrences of each character in a string', () => {
    console.log(countCharacters("hello"));
});