import React from 'react'
import test14 from './test14';
import input14 from './input14';



function Day14LogB() {
    const rawDataArr = input14.split(/\n/)

    const toBin = (num, setTo) =>{
        let bin = parseInt(num, 10).toString(2)
        if (bin.length < setTo){
            let diff = setTo-bin.length
            let str0 = '0'
            if (diff > 1){
                for (let i=1; i<diff; i++){
                    str0 = str0.concat('0')
                }
            }
            bin = str0.concat(bin)
        }
        return bin;
    }

    const toDec = (bin) => {
        return parseInt(bin, 2)
    }

    let mask = 'X'
    let maskArr, xCount, numArr
    let memory = {}

    for (let j=0; j<rawDataArr.length; j++){
        let tempArr = rawDataArr[j].split(/[\s=\s]/)
        if (tempArr[0] === 'mask'){
            mask = tempArr[3]
            maskArr = mask.split('')
            xCount = 0
            for (let i=0; i<36; i++){
                if (maskArr[i] === 'X'){
                    xCount++
                }
            }
            
            numArr = []
            
            for (let k =0; k<(2**xCount); k++){
                numArr.push(toBin(k, xCount))
            }
            console.log('Num arr: ', numArr)
        } else {
            let memNum = tempArr[0].slice(4, tempArr[0].length-1)
            let memNumBin = toBin(memNum, 36)
            let memNumBinArr = memNumBin.split('')
            let memVal = tempArr[3]
            
            for (let m=0; m<numArr.length; m++){ // process each iter of the different X combos
                let iter = numArr[m]
                let xIter = 0
                let thisMemAdd = memNumBinArr
                //console.log('This mem add', thisMemAdd)
                for (let i=0; i<36; i++){
                    if (maskArr[i] === '1'){
                        thisMemAdd[i] = '1'
                        //console.log('1 at ', i)
                    }  else if (maskArr[i] === 'X'){
                        thisMemAdd[i] = iter.charAt(xIter)
                        //console.log('X :', iter.charAt(xIter), 'at ', i)
                        xIter++
                    }
                    
                }
                let newMemNum = toDec(thisMemAdd.join(''))
                    memory[newMemNum] = memVal
            }
            
        }
        

    }
    let keyArr = Object.keys(memory)
    
    let total =0
    for (let i=0; i<keyArr.length; i++){
        total = total + parseInt(memory[keyArr[i]])
    }
    console.log('total:', total)

    return (
        <div>
            <h1>Success!</h1>
        </div>
    )
}

export default Day14LogB
