// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    // use the reduce method to turn keys array into an object
    return keyArr.reduce((obj, cur, idx) => {
        obj[cur] = idx < valArr.length ? valArr[idx] : null;
        return obj;
    }, {});
}
