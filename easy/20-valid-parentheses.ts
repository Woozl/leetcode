// https://leetcode.com/problems/valid-parentheses

function isValid(s: string): boolean {
    let pairs: any = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    
    let stack = [];
    
    for(let c of s) {
        if(Object.keys(pairs).includes(c)) { // ], }, )
            if(stack.length === 0) return false; // s = "}"
            
            if(stack.pop() !== pairs[c]) return false; // s = "[}"     
        } else {
            stack.push(c);
        }        
    }
    
    if(stack.length !== 0) return false; // s = "()("
    
    return true;
};