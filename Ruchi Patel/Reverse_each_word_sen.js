// Given a string, reverse each word in the sentence

const string = 'Hello Good Morning';

const ReverseEachWordInSen = (str) => {
    const array = str.split(' ')
    const reverse = array.map((string) => {
        return string.split('').reverse().join('');
    })
    return reverse.join(' ')
}

