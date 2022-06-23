// https://leetcode.com/problems/evaluate-reverse-polish-notation/

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    
    for(const token of tokens) {
        if(['+', '-', '*', '/'].includes(token)) {
            const op2 = stack.pop()!, op1 = stack.pop()!;

            if(token === '+') stack.push(op1 + op2);
            if(token === '-') stack.push(op1 - op2);
            if(token === '*') stack.push(op1 * op2);
            if(token === '/') stack.push(op1 / op2 < 0 ? Math.ceil(op1 / op2) : Math.floor(op1 / op2));
        }
        else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop()!;
};

// const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
// console.log(evalRPN(tokens));