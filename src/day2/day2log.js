import React from 'react'
import input from './input'

function Day2log() {
    const inputArr = input.split(/\n/);

    var counter =0;
    for (let i=0; i<inputArr.length; i++){
        let tempArr = inputArr[i].split(/\W/);
        let min = tempArr[0]
        let max = tempArr[1]
        let letter = tempArr[2]
        let sequenceArr = tempArr[4].split('')
        let ansArr = []
        
        for (let j=0; j<sequenceArr.length; j++){
            if (sequenceArr[j] === letter){
                ansArr.push(sequenceArr[j])
            }
        }
        if (ansArr.length >= min && ansArr.length <= max){
            counter++
        } // first solved
    }
    var counter2 =0    

    for (let k =0; k< inputArr.length; k++){
        let tempArr2 = inputArr[k].split(/\W/);
        let min2 = tempArr2[0]
        let max2 = tempArr2[1]
        let letter2 = tempArr2[2]
        let sequenceArr2 = tempArr2[4].split('')
        console.log(sequenceArr2)
        let valid = false;
        if (sequenceArr2[min2-1] !== sequenceArr2[max2-1]){
            if (sequenceArr2[min2-1] === letter2 || sequenceArr2[max2-1] === letter2 ){
                valid = true;
            }
        }
        if (valid){
            counter2++;
        }
        
    }
        
    
    console.log(counter) // first ans
    console.log(counter2) //second ans
    
    return (
        <div>
            <h1>Hey</h1>
        </div>
    )
}

export default Day2log

