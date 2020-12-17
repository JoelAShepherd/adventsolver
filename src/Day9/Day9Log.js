import React from 'react'
//import test9a from './test9a';
import input9 from './input9';


function Day9Log() {
    const rawDataArr = input9.split(/\n/)

    const intArray = rawDataArr.map(num => parseInt(num))
    
    //const preamble = 25;

    /*function testSums(prevNumArr, num){
        let resultsArr = [];
        for (let j=0; j<prevNumArr.length-1; j++){
            let numA = prevNumArr[j];
            console.log('NumA: ', numA, 'it: ', j, 'a')
            for (let k=1; k<preamble-j; k++){
                let numB = prevNumArr[k+j]
                console.log('NumB: ', numB, 'it: ', k, 'b')
                if (numA + numB === num){
                    resultsArr.push(true)
                    console.log(numA, '+', numB, '=', num)
                } else {
                    resultsArr.push(false)
                    console.log(numA, '+', numB, '!=', num)
                }
            }
        }
        console.log(resultsArr)
        if (resultsArr.includes(true)){
            return true
        } else {
            return false
        }
    }
    
    for (let i=preamble; i<intArray.length; i++){
        let previousNums = intArray.slice(i-preamble, i)
        //console.log('Prev: ', previousNums)
        if (!testSums(previousNums, intArray[i])){
            console.log('This one!: ', intArray[i])
            break
        }
    } */

    const part1Ans = 144381670
    //const testAns = 1094
    let ans=0;
    const sumUp = (accumulator, currentVal) => accumulator + currentVal;
    while (ans === 0){    
        for (let j=0; j<intArray.length; j++){ //initial value
            //console.log('J: ', j)
            for (let k=1; k<intArray.length-j; k++){ //number of numbers being added
                let tempSumArr = intArray.slice(j, j+k+1)
                //console.log('K:', k, tempSumArr)
                let tempSum = tempSumArr.reduce(sumUp, 0);
                //console.log(tempSum)
                if (tempSum === part1Ans){
                    ans = Math.max(...tempSumArr) + Math.min(...tempSumArr)
                    console.log('Success!: ', ans)
                } else if (tempSum > part1Ans){
                    break
                }
            }
        }
        
    }
    

    return (
        <div>
            
        </div>
    )
}

export default Day9Log
