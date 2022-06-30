// https://leetcode.com/problems/add-binary/

const convertBase = (x: bigint, inBase=2n, outBase = 10n) => {
    let exp = 0n;
    let out = 0n;
    
    if(inBase <= 1 || inBase > 10 ) return -1n;

    while(x > 0) {
        out += (x % outBase) * (inBase ** exp);
        x = x / outBase;
        ++exp;
    }

    return out;
}

function addBinary(a: string, b: string): string {
    return convertBase(convertBase(BigInt(a)) + convertBase(BigInt(b)), 10n, 2n).toString()
};

// console.log(addBinary('1', '1')); // 10
// console.log(addBinary('101', '10')); // 111
// console.log(addBinary('11', '1')); // 100
// console.log(addBinary('01101', '101')); // 10010

//   0 1 1 0  6
//   1 0 1 1  11
// 1 0 0 0 1  17