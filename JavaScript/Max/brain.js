const Numbers1 = [81, 75, 55];
console.log(Numbers1);

const Numbers2 = [85, 98, 92, 78];
console.log(Numbers2);

const Numbers3 = [ 101, 111, 131, 121, 99];
console.log(Numbers3);

function getMaxNumber(arr){
    let max = arr[0];

    for(let num of arr){
        if(num > max){
            max = num;
        }
    }
    return max;
}

console.log(`The Max Number in [${Numbers1}] is: ` + getMaxNumber(Numbers1));
console.log(`The Max Number in [${Numbers2}] is: ` + getMaxNumber(Numbers2));
console.log(`The Max Number in [${Numbers3}] is: ` + getMaxNumber(Numbers3));
