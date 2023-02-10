class TreeNode {
    val: number;
    left: number;
    right: number;

    constructor(val:number, left:number, right:number) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const root = new TreeNode(4,2,7);
console.log(root)


const invertBinaryTreeNode = (root:TreeNode) => {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
}

invertBinaryTreeNode(root);
console.log(root);