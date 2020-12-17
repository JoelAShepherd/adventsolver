import React from 'react'
import input8 from './input8';
//import testData8a from './testData8a';


function Day8Log() {
    const rawDataArr = input8.split(/\n/)
    //console.log(rawDataArr)

    let fullInstSet = {};
    const jmpNopSet = {};
    let jNopCount = 0;
    for (let i=0; i<rawDataArr.length; i++){
        let inst = rawDataArr[i].split(' ')
        fullInstSet[i] = {type: inst[0], val: parseInt(inst[1]), count:0}
        if (inst[0] === 'jmp' || inst[0]==='nop'){
            jmpNopSet[jNopCount]={type: inst[0], val: parseInt(inst[1]), lineNum: i}
            jNopCount++
        }
    }   
    console.log('Full: ', fullInstSet)
    console.log('jmpNopSet: ',jmpNopSet)
    let accumulator =0;

    
    

    function run(instObj, lineNum){
        let thisLine = instObj[lineNum]
        
        if (lineNum === rawDataArr.length-1){
            console.log('Success! Acc: ', accumulator)
            return true
        } else if (thisLine.count === 1){
            console.log('Line No.: ', lineNum, 'Acc: ', accumulator, 'This: ', thisLine)
            accumulator = 0;
            return false
        } else {
            thisLine.count++;
            if (thisLine.type === 'nop'){
                run(instObj, lineNum+1)
            } else if (thisLine.type === 'acc'){
                accumulator = accumulator + thisLine.val
                run(instObj, lineNum+1)
            } else if (thisLine.type === 'jmp') {
                run(instObj, lineNum + thisLine.val)
            }
        }
    }
    function jmpNopSwitch(obj){
        if (obj.type === 'jmp'){
            obj.type = 'nop'
        } else if (obj.type === 'nop'){
            obj.type = 'jmp'
        }
    }

    for (let k=0; k<Object.keys(jmpNopSet).length; k++){
        let tempInst = Object.assign({}, fullInstSet)
        //console.log('TempInst: ', tempInst)
        let changeLine = jmpNopSet[k].lineNum;
        //console.log('changeLine: ', changeLine)
        //console.log('Test1:', tempInst[changeLine])
        jmpNopSwitch(tempInst[changeLine])
        //console.log('Test2:', tempInst[changeLine])
        if (run(tempInst, 0)){
            break
        } else {
            for (let l=0; l<Object.keys(fullInstSet).length; l++){
                fullInstSet[l].count=0;
            }
            jmpNopSwitch(tempInst[changeLine])

        }
    }
    //console.log(accumulator)

    //console.log(fullInstSet)
    return (
        <div>
            
        </div>
    )
}

export default Day8Log
