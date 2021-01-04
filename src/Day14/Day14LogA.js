import React from 'react'
import test14 from './test14';
import input14 from './input14';



function Day14LogA() {
    const rawDataArr = input14.split(/\n/)
    console.log(rawDataArr)

    let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X';

    const toBin = (num) =>{
        let bin = parseInt(num, 10).toString(2)
        if (bin.length < 36){
            let diff = 36-bin.length
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

    

    const maskChange = (binary) =>{
        let binArr = binary.split('')
        for (let m=0; m<36; m++){
            if (mask.charAt(m) !== 'X'){
                binArr[m] = mask.charAt(m)
            } 
        }
        let newBin = binArr.join('')
        return newBin
    }

    let bin11 = toBin(11)
    console.log(bin11)
    console.log(maskChange(bin11))

    let memory = {}

    for (let j=0; j<rawDataArr.length; j++){
        let tempArr = rawDataArr[j].split(/[\s=\s]/)
        if (tempArr[0] === 'mask'){
            mask = tempArr[3]
        } else {
            let memNum = tempArr[0].slice(4, tempArr[0].length-1)
            memory[memNum] = toDec(maskChange(toBin(tempArr[3])))
        }

    }

    console.log(memory)
    let total =0;
    let keyArr = Object.keys(memory)
    for (let k=0; k<keyArr.length; k++){
        total = total + memory[keyArr[k]]
    }

    console.log('Total: ', total)

    return (
        <div>
            <h1>Success!</h1>
        </div>
    )
}

export default Day14LogA
