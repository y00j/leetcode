function heapPush(heap, n) {
    // add number, then go to parent and compare. If smaller, swap.

    // console.log(heap);
    heap.push(n);
    let currIdx = heap.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);
    while (parentIdx >= 0 && heap[parentIdx] > heap[currIdx]) {
        [heap[parentIdx], heap[currIdx]] = [heap[currIdx], heap[parentIdx]];
        currIdx = parentIdx;
        parentIdx = Math.floor((currIdx - 1) / 2);
    }
}

function heapPop(heap) {
    //swap 1st element with last, pop last element
    // heapify down

    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];

    const lowest = heap.pop();

    let currIdx = 0;
    let lChildIdx = (currIdx * 2) + 1;
    while (lChildIdx < heap.length) {
        let smallerChildNode = lChildIdx;
        let rChildIdx = lChildIdx + 1;
        if (rChildIdx < heap.length && heap[rChildIdx] < heap[smallerChildNode]) {
            smallerChildNode = rChildIdx;
        }
            
        if(heap[currIdx] > heap[smallerChildNode]) {
            [heap[currIdx], heap[smallerChildNode]] = [heap[smallerChildNode], heap[currIdx]];
            currIdx = smallerChildNode;
            lChildIdx = (currIdx * 2) + 1;
        } else {
            break;
        }
    }
}

const nums = [...Array(10).keys()].reverse();

const heap = [];

nums.forEach((n) => heapPush(heap, n));

console.log(heap);

while (heap.length > 3) {
    heapPop(heap);
}

console.log(heap);