// https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
    A: number[] = [];
    B: number[] = [];

    push(x: number): void {
        this.A.push(x);
    }

    pop(): number {
        if(this.B.length == 0)
            while(this.A.length > 0) this.B.push(this.A.pop()!)
        return this.B.pop()!;
    }

    peek(): number {
        if(this.B.length == 0)
            while(this.A.length > 0) this.B.push(this.A.pop()!)
        return this.B[this.B.length - 1];
    }

    empty(): boolean {
        return this.A.length === 0 && this.B.length === 0;
    }
}


// Your MyQueue object will be instantiated and called as such:
// var obj = new MyQueue()
// obj.push(4)
// var param_2 = obj.pop()
// var param_3 = obj.peek()
// var param_4 = obj.empty()