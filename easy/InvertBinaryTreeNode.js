class TreeNode {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const root = new TreeNode(2,new TreeNode(1),new TreeNode(3));
//const root = new TreeNode(4,new TreeNode(2,new TreeNode(1),new TreeNode(3)), new TreeNode(7,new TreeNode(5), new TreeNode(6)));
console.log(JSON.stringify(root))


const invertBinaryTreeNode = (root) => {
    if (!root || (!root.left && !root.right))
        return root;
    
    const temp = root.left;
    root.left = invertBinaryTreeNode(root.right);
    root.right = invertBinaryTreeNode(temp);
    return root;
}

invertBinaryTreeNode(root);
console.log(JSON.stringify(root));