class TrieNode {
    val: string;
    children: Map<string, TrieNode>;

    constructor(val: string) {
        this.val = val;
        this.children = new Map<string, TrieNode>();
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode('start');
    }

    insert(word: string): void {
        let currentNode = this.root;

        for(const c of word) {
            if(currentNode.children.has(c)) { // prefix exists
                currentNode = currentNode.children.get(c)!;
            }
            else {
                const leaf = new TrieNode(c);
                currentNode.children.set(c, leaf);
                currentNode = leaf;
            }
        }

        currentNode.children.set('.', new TrieNode('.'));
    }

    search(word: string): boolean {
        let currentNode = this.root;

        for(const c of word) {
            if(currentNode.children.has(c)) { // prefix exists
                currentNode = currentNode.children.get(c)!;
            }
            else {
                return false;
            }
        }
        
        return currentNode.children.has('.');
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for(const c of prefix) {
            if(currentNode.children.has(c)) { // prefix exists
                currentNode = currentNode.children.get(c)!;
            }
            else {
                return false;
            }
        }

        return true;
    }
}

// let obj = new Trie();
// obj.insert('hello');
// console.log(obj.search('hel'));
// console.log(obj.startsWith('hel'));