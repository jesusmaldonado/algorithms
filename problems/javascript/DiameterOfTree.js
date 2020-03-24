```
543. Diameter of Binary Tree
Easy

2280

145

Add to List

Share
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

Accepted
219,579
Submissions
454,372
```
//using postorder
var diameterOfBinaryTree = function(root) {
  let max = root ? 1 : 0;
  function postOrder(node){
    if (node === null) {
      return 0;
    }
    const left = postOrder(node.left);
    const right = postOrder(node.right);
    const path = left + right;
    if (path > max){
      max = path;
    }
    return Math.max(left, right);
  }
  postOrder(root);
  return max;
};
