// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

function greatestLetter(s: string): string {
    const letters: ('none'|'low'|'up'|'both')[] = new Array(26).fill('none');

    for(const c of s) {
        const cc = c.charCodeAt(0);
        const isUpper = cc < 97;
        const i = isUpper ? cc - 65 : cc - 97;

        if(letters[i] === 'none')
            letters[i] = isUpper ? 'up' : 'low'
        else if((letters[i] === 'low' && isUpper) || (letters[i] === 'up' && !isUpper))
            letters[i] = 'both';
    }

    for(let i = 25; i >= 0; --i)
        if(letters[i] === 'both') return String.fromCharCode(65 + i)

    return '';
};

console.log(greatestLetter("abDcdzefvghHijklVmn"))

// 65: A
// 97: a