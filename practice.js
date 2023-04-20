/* THESE ARE ALL PROBLEM SETS FROM STRUCTY */


/* --------- BINARY TREES --------- */
// DFS
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (a) => {
    if (!a) return []
    const stack = [a]
    const ans = []


    while (stack.length) {
        let curr = stack.pop()
        ans.push(curr.val)

        if (curr.right) {
            stack.push(curr.right)
        }
        if (curr.left) {
            stack.push(curr.left)
        }

    }

    return ans
}


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /
// //   g

// depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']




// BFS


const breadthFirstValues = (root) => {
    // if no root return empty array
    if (!root) return [];
    // set up queue with root
    const queue = [root]
    const res = []

    while (queue.length){
        let current = queue.shift()
        res.push(current.val)

        if (current.left){
            queue.push(current.left)
        }
        if (current.right){
            queue.push(current.right)
        } 
    }

    return res;
};


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e', 'f']


// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //    /  \
// //   x    d
// //         \
// //          e

// breadthFirstValues(a);
// //    -> ['a', 'b', 'c', 'x', 'd', 'e']