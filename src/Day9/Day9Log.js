import React from 'react'
//import test9a from './test9a';
import input9 from './input9';


function Day9Log() {
    const rawDataArr = input9.split(/\n/)

    const intArray = rawDataArr.map(num => parseInt(num))
    
    const preamble = 25;

    function testSums(prevNumArr, num){
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
        console.log('Prev: ', previousNums)
        if (!testSums(previousNums, intArray[i])){
            console.log('This one!: ', intArray[i])
            break
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default Day9Log
