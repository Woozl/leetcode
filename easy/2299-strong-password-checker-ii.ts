// https://leetcode.com/problems/strong-password-checker-ii/

function strongPasswordCheckerII(password: string): boolean {
    if(password.length < 8) return false;

    let lower = false, upper = false, digit = false, special = false;
    
    let lastChar = '';
    for(const c of password) {
        if(lastChar === c) return false;

        if(c.match(/[a-z]/)) lower = true;

        if(c.match(/[A-Z]/)) upper = true;

        if(c.match(/[0-9]/)) digit = true;

        if(c.match(/[!@#\$%\^&\*()\+-]/)) special = true;

        lastChar = c;
    }

    return lower && upper && digit && special;
};

// console.log(strongPasswordCheckerII("-Aa1a1a1"))

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).