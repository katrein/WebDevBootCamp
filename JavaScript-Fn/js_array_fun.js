// TASK: Create your own functions
// Print out the elements of the array in reverse order
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

// Check if all elements in the array are identical
function isUniform(arr){
    var start = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== start){
            return false;
        }
    }
    return true;
}

// Accepts array of numers and returns the sum of all the numbers
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
      total += element;
    });
    return total;
}

// Accepts array of numers and returns the maximum of all the numbers
function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
