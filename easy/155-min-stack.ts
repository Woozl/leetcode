// https://leetcode.com/problems/min-stack/

class MinStack {
    private stack: number[];
    private auxStack: number[];

    constructor() {
        this.stack = [];
        this.auxStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if(this.auxStack.length === 0)
            this.auxStack.push(val);
            
        else {
            if(val < this.auxStack[this.auxStack.length - 1])
                this.auxStack.push(val);
            else // if value is >= the previous min, push the previous min
                this.auxStack.push(this.auxStack[this.auxStack.length - 1]);
        }
    }

    pop(): void {
        this.stack.pop();
        this.auxStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.auxStack[this.auxStack.length - 1];
    }
}

// var obj = new MinStack();
// obj.push(0);
// obj.push(1);
// obj.push(0);
// console.log(obj.getMin()); // 0 1 0 => 0
// obj.pop();
// console.log(obj.getMin()); // 0 1 => 0

// 0 1 0
// 0 0 0

// 3 1 5 4 2
// 3 1 1 1 1