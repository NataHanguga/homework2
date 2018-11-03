

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
function SortArray(arr) {
    var min = arr[0];
    var max = min;
    var a;
    var cout = 0;
    var maxIndex;
    var minIndex;
    var tmp;
    var arr1 = [];
    //found max and min elements of array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
        arr1[i] = arr[i];
    }
    //found max and min element`s indexes of array
    for (var i = 0; i < arr.length; i++) {
        arr[i] == max ? maxIndex = i : a;
        arr[i] == min ? minIndex = i : a;
        cout += arr[i];
    }
    //swap max and min elements of array 
    tmp = arr[maxIndex];
    arr[maxIndex] = arr[minIndex];
    arr[minIndex] = tmp;
    //create object
    var SortMass = {
        startArr: arr1,
        finishArr: arr,
        maxElem: max,
        minElem: min,
        sum: cout,
    };
    console.log(SortMass);
    return SortMass;
}
//function with callback
function DoThis(arr, callback) {
    callback(arr);
}
//function return object with array`s params
function ArrToObj(arr) {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        object[arr[i]] = i;
    }
    console.log(object);
    return object;
}
ArrToObj(objectOfArrays.FirstArray);
DoThis(objectOfArrays.FirstArray, SortArray);
