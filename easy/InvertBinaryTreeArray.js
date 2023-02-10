const invertBinaryTreeArray = (root) => {
    let result = [];
    let level = 0;
    while (root.length > 0){
        let x = root.splice(0, Math.pow(2,level++)).reverse();
        result.push(...x);
    }
    return result;
}

console.log(invertBinaryTreeArray([4,2,7, 1,3,6,9, 1,2,3,4,5,6,7,8]));