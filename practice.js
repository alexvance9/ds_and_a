/* THESE ARE ALL PROBLEM SETS FROM STRUCTY */

// DFS
// class Node {
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


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']




