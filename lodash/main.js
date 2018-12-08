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
// Example
// chunk([1,2,3,4,5,6,7,8,9,],4);
// output
// [1,2,3,4],[5,6,7,8],[9]]


// Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.
function compact(array) {
    return acc = array.filter(v => Boolean(v))
}
// Example
// compact([1,2,0,false, NaN]);
// output [1, 2]
// compact([1,2,0,false, NaN, 5]);
// output [1, 2, 5]


// Creates a new array concatenating array with any additional arrays and/or values.
function concat(...x) {
    return x.reduce((acc, value) => {
        if (Array.isArray(value)) {
            for(let elm of value) {
                acc.push(elm)
            }
        } else {
            acc.push(value)
        }
        return acc;
    }, [])
}
