//Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
function chunk(arr, num) {
    let newArray = [];
    for (let i = 0; i<arr.length; i += num) {
        if (arr.length >= num) {
            newArray.push(arr.slice(i, i+num));
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray;
}