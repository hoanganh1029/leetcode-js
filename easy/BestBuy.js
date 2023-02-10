const bestBuy = (prices) => {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;
    for (const price of prices) {
        if (price < minPrice){
            minPrice = price;            
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    return maxProfit;
}

console.log(bestBuy([2,3,4,1,7]));