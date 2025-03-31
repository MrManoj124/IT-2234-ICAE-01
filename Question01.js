function getMaxPurchase(budget, keyboardPrices, mousePrices)
{
    let maxPurchase = -1;

    for (let k of keyboardPrices) {
        for (let m of mousePrices) {
            let totalCost = k + m;
            if (totalCost <= budget && totalCost > maxPurchase) {
                maxPurchase = totalCost;
            }
        }
    }

    return maxPurchase;
}