class Node {
    constructor(value) {
        this.value = value;
    }
}

class PriorityQueue {
    constructor() {
      this.heap = [null]
    }
    
    insert(value) {
      const newNode = new Node(value);
      this.heap.push(newNode);
      let currentNodeIdx = this.heap.length - 1;
      let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
      while (
        this.heap[currentNodeParentIdx] &&
        newNode.value < this.heap[currentNodeParentIdx].value
      ) {
        const parent = this.heap[currentNodeParentIdx];
        this.heap[currentNodeParentIdx] = newNode;
        this.heap[currentNodeIdx] = parent;
        currentNodeIdx = currentNodeParentIdx;
        currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
      }
    }
    remove() {
        if (this.heap.length < 3) {
          const toReturn = this.heap.pop();
          this.heap[0] = null;
          return toReturn;
        }
        const toRemove = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;
        let [left, right] = [2*currentIdx, 2*currentIdx + 1];
        let currentChildIdx = this.heap[right] && this.heap[right].value <= this.heap[left].value ? right : left;
        while (this.heap[currentChildIdx] && this.heap[currentIdx].value >= this.heap[currentChildIdx].value) {
          let currentNode = this.heap[currentIdx]
          let currentChildNode = this.heap[currentChildIdx];
          this.heap[currentChildIdx] = currentNode;
          this.heap[currentIdx] = currentChildNode;
        }
        return toRemove;
      }


  }

var myQueue = new PriorityQueue();
myQueue.insert(15);
myQueue.insert(6);
myQueue.insert(10);
myQueue.insert(11);


myQueue.remove();

console.log(myQueue);