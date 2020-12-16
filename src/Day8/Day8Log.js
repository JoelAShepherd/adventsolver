import React from 'react'
import input8 from './input8';
//import testData8a from './testData8a';


function Day8Log() {
    const rawDataArr = input8.split(/\n/)
    console.log(rawDataArr)

    let fullInstSet = {};
    for (let i=0; i<rawDataArr.length; i++){
        let inst = rawDataArr[i].split(' ')
        fullInstSet[i] = {type: inst[0], val: parseInt(inst[1]), count:0}
    }   

    
    let accumulator =0;

    function run(lineNum){
        let thisLine = fullInstSet[lineNum]
        if (thisLine.count === 1){
            return accumulator
        } else {
            thisLine.count++;
            if (thisLine.type === 'nop'){
                run(lineNum+1)
            } else if (thisLine.type === 'acc'){
                accumulator = accumulator + thisLine.val
                run(lineNum+1)
            } else if (thisLine.type === 'jmp') {
                run(lineNum + thisLine.val)
            }
        }
    }
    run(0);
    console.log(accumulator)

    console.log(fullInstSet)
    return (
        <div>
            
        </div>
    )
}

export default Day8Log
