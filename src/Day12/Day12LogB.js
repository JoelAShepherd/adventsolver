import React from 'react'
import input12 from './input12';


function Day12LogB() {
    
    const rawDataArr = input12.split(/\n/)

    let pos = [0, 0]
    let wayP = [10, 1]
    let wpShipDiff = [10, 1]

    

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

    const changeWP = (inst) =>{
        let wp = wayP
        if (inst[0] === 'E' || inst[0] === 'W') {
            wp[0] = wp[0] + inst[1]
        } else if (inst[0] === 'N' || inst[0] === 'S') {
            wp[1] = wp[1] + inst[1]
        }
        wayP = wp;
        wpShipDiff = [(wayP[0] - pos[0]), (wayP[1] - pos[1])]
    }

    const rotateWP = (inst) =>{
        let wpshd = wpShipDiff;
        if (inst[1] === 180){
            wpshd = [(wpshd[0]*-1), (wpshd[1]*-1)]
        } else if (inst[1] === 90){
            if (inst[0] === 'R'){
                wpshd = [wpshd[1], (wpshd[0]*-1)]
            } else if (inst[0] === 'L'){
                wpshd = [(wpshd[1]*-1), wpshd[0]]
            }
        } else if (inst[1] === 270){
            if (inst[0] === 'L'){
                wpshd = [wpshd[1], (wpshd[0]*-1)]
            } else if (inst[0] === 'R'){
                wpshd = [(wpshd[1]*-1), wpshd[0]]
            }
        }
        wayP = [(pos[0] + wpshd[0]), (pos[1] + wpshd[1])]
        wpShipDiff = [(wayP[0] - pos[0]), (wayP[1] - pos[1])]
    }

    for (let i=0; i< rawDataArr.length; i++){
        let inst = getInst(rawDataArr[i])
        console.log('Pos: ', pos, 'WP: ', wayP, 'WPSHD: ', wpShipDiff)
        console.log('i: ', i, 'Inst: ', inst)
        if (inst[0] === 'F'){
            pos = [(pos[0] + (wpShipDiff[0] * inst[1])),(pos[1] + (wpShipDiff[1] * inst[1]))]
            wayP = [(pos[0] + wpShipDiff[0]), (pos[1] + wpShipDiff[1])]
            
        } else if (inst[0]=== 'R' || inst[0] === 'L'){
            rotateWP(inst)
        } else {
            changeWP(inst)
        }
    }

    console.log('------ Final: Pos: ', pos, 'WP: ', wayP, 'WPSHD: ', wpShipDiff)

    if (pos[0] < 0){
        pos[0] = pos[0] *-1
    }
    if (pos[1] < 0){
        pos[1] = pos[1] *-1
    }
    
    let manhattan = pos[0] + pos[1]

    console.log('Manhatten: ', manhattan)

    return (
        <div>
            <h1>Success!</h1>
        </div>
    )
}

export default Day12LogB
