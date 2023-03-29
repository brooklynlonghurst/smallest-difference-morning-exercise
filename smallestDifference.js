//between two arrays find the smallest difference between any two numbers
//so i feel like first ill need to loop through the first arr with the second one to find 

let arr1 = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]

let answer = []

function smallestDif(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let k = 0; k < arr2.length; k++){
            if(k === i){
                let difference = arr2[k] - arr1[i]
                answer.push(difference)
                
            }
        }
    }
    return Math.min(...answer)
}

console.log(smallestDif(arr1, arr2))