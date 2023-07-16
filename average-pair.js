// add whatever parameters you deem necessary
function averagePair(arr, target) {
    // one pointer each at the start and end of array
    let start = 0; 
    let end = arr.length - 1;

    while (start < end) {
        // find average of numbers in the sorted array at indexes of start and end pointers
        let average = (arr[start] + arr[end]) / 2;
        if (average === target) {
            return true;
        // if the two numbers don't average out to the target, move the start pointer up one spot if the average was less than the target, or if it was higher, move the end pointer back a spot
        } else if (avg < target) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}
