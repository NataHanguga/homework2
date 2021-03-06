
var objectOfArrays = {
    FirstArray: [-34242, 675, 987, 0, 4, 8, -342],
    SecondArray: [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1],
    ThirdArray: [-1, -8, -2],
    FourthArray: [1, 7, 3],
    FifthArray: [1, undefined, 3, 5, -3],
    SeventhArray: [1, NaN, 3, 5, -3]
};
//function which find max, min, sum of array and swap 
//max and min elem of array and then created object
function sortArray(arr) {
    var properties = {
        min: arr[0],
        max: this.min,
        cout: 0,
        maxIndex: 0,
        minIndex: 0,
        tmp: 0,
        arr1: []
    };
    //found max and min elements of array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > properties.max) properties.max = arr[i];
        if (arr[i] < properties.min) properties.min = arr[i];
        properties.arr1[i] = arr[i];
    }
    //found max and min element`s indexes of array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === properties.max) properties.maxIndex = i;
        if (arr[i] === properties.min) properties.minIndex = i;
        properties.cout += arr[i];
    }
    //swap max and min elements of array 
    properties.tmp = arr[properties.maxIndex];
    arr[properties.maxIndex] = arr[properties.minIndex];
    arr[properties.minIndex] = properties.tmp;
    //create object
    var sortMass = {
        startArr: properties.arr1,
        finishArr: arr,
        maxElem: properties.max,
        minElem: properties.min,
        sum: properties.cout,
    };
    console.log(sortMass);
    return sortMass;
}
//function with callback
function doThis(arr, callback) {
    callback(arr);
}
//function return object with array`s params
function arrToObj(arr) {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        object[arr[i]] = i;
    }
    console.log(object);
    return object;
}
arrToObj(objectOfArrays.FirstArray);
doThis(objectOfArrays.FirstArray, sortArray);
