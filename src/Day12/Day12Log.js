import React from 'react'
import input12 from './input12';


function Day12Log() {
    const rawDataArr = input12.split(/\n/)

    const compass1 = {0: 'N', 90: 'E', 180: 'S', 270:'W'}
    const compass2 = {N: 0, E:90, S:180, W:270}
    let dir = 'E'
    const example = ['F10', 'N3', 'F7', 'R90', 'F11']

    const changeOrn = (startOr, way, deg) => {
        let startDeg = compass2[startOr]
        let ans;
        if (way === 'R'){
            ans = startDeg + deg;
        } else if (way === 'L'){
            ans =startDeg - deg;
        }
        if (ans > 359){
            ans = ans-360;
        } else if (ans < 0){
            ans = ans + 360;
        }
        dir = compass1[ans]
        
    }
    
    let position = [0, 0]

    const getInst = (string) => {
        let tempArr = string.split(/[A-Z]/)
        let instruction = [string.charAt(0), tempArr[1]]
        if (instruction[0] === 'S' || instruction[0] === 'W'){
            instruction[1] = instruction[1] *-1;
        } else {
            instruction[1] = instruction[1] *1;
        }
        return instruction
    }

    const changePos = (inst) => {
        console.log('----- inst -----', inst)
        if (inst[0] === 'R' || inst[0] === 'L'){
            changeOrn(dir, inst[0], inst[1])
            console.log('Orn changed to: ', dir)
        } else if (inst[0] === 'F'){
            let tempInst = dir + inst[1]
            console.log('Forward ', inst[1])
            changePos(getInst(tempInst))
            console.log(position)
        } else {
            if (inst[0] === 'N' || inst[0] === 'S'){
                position[1] = position[1] + inst[1]
            } else {
                position[0] = position[0] + inst[1]
            }
            console.log(position)
        }

    }


    for (let i=0; i<rawDataArr.length; i++){
        changePos(getInst(rawDataArr[i]))
    }
    
    if (position[0] < 0){
        position[0] = position[0] *-1
    }
    if (position[1] < 0){
        position[1] = position[1] *-1
    }
    
    let manhattan = position[0] + position[1]

    console.log('Manhatten: ', manhattan)

    return (
        <div>
            <h1>Success!</h1>
        </div>
    )
}

export default Day12Log
