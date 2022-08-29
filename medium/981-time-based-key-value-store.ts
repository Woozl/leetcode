type key = string;
type value = string;
type timestamp = number;

class TimeMap {
    private keyMap: Map<key, {timestamp: timestamp, value: value}[]>;
    
    constructor() {
        this.keyMap = new Map<key, {timestamp: timestamp, value: value}[]>();
    }

    set(key: string, value: string, timestamp: number): void {
        // key already has at least 1 value
        if(this.keyMap.has(key)) {
            const valArray = this.keyMap.get(key)!
            valArray.push({timestamp, value});
        }

        // unused key, create a new array
        else {
            this.keyMap.set(key, [{timestamp, value}]);
        }
    }

    get(key: string, timestamp: number): string {
        if(!this.keyMap.has(key)) return "";
        
        const valArray = this.keyMap.get(key)!;

        let L = 0, H = valArray.length - 1;
        while(L < H) {
            const M = Math.floor((H - L) / 2) + L;

            if(valArray[M].timestamp <= timestamp) L = M + 1;
            else if(valArray[M].timestamp > timestamp) H = M;
        }

        return H === 0 ? "" : valArray[H - 1].value;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// const tm = new TimeMap();

// tm.set("foo", "bar1", 3);
// tm.set("foo", "bar2", 5);
// tm.set("foo", "bar3", 10);
// tm.set("foo", "bar4", 15);
// tm.set("foo", "bar5", 31);
// tm.set("foo", "bar6", 42);
// tm.set("foo", "bar7", 43);

// console.log(tm.get("foo", 3));