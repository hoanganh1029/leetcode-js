
const twoSum = (arrNum, expectedSum) => {
    let dicNum = {};
    for (let i = 0; i < arrNum.length; i++) {
        if (dicNum.hasOwnProperty([expectedSum - arrNum[i]])) {
            return { index: [dicNum[expectedSum - arrNum[i]], i], values: [expectedSum - arrNum[i], arrNum[i]] };
        } else {
            dicNum[arrNum[i]] = i;
        }
    }
    return {};
}

const twoSumReduce = (arrNum, expectedSum) => {
    let dicNum = {};
    const result = arrNum.reduce((acc, val, index) => {
        if (dicNum.hasOwnProperty([expectedSum - val])) {
            acc.push({ index: [dicNum[expectedSum - val], index], values: [expectedSum - val, val] });
        } else {
            dicNum[val] = index;
        }
        return acc;
    },[]);
    return result;
}

console.log(JSON.stringify(twoSumReduce([0, 1, 5, 3, 9, 7], 8)));