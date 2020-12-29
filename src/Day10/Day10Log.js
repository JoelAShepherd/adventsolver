import React from 'react'
//import test10 from './test10';

import input10 from './input10';
//import test10b from './test10b';

function Day10Log() {
    let rawDataArr = input10.split(/\n/)
    let rawIntArr = rawDataArr.map(i => parseInt(i))
    const sortedArr = rawIntArr.sort(function(a, b){return a-b})
    
    sortedArr.unshift(0);
    let finalJolt = sortedArr.pop()
    sortedArr.push(finalJolt);
    sortedArr.push(finalJolt + 3)
    console.log('Sorted: ', sortedArr)
    let diff1Count=0;
    let diff3Count=0;
    for (let i=1; i<sortedArr.length; i++){
        let a = sortedArr[i-1];
        let b = sortedArr[i];
        if (b-a === 1){
            diff1Count++
        } else if (b-a ===3){
            diff3Count++
        }
    }

    let connections = {}
    for (let j=0; j<sortedArr.length; j++){
        let tempArr =[]
        if (sortedArr.includes(sortedArr[j]+1)){
            tempArr.push(sortedArr[j]+1)
        }
        if (sortedArr.includes(sortedArr[j]+2)){
            tempArr.push(sortedArr[j]+2)
        }
        if (sortedArr.includes(sortedArr[j]+3)){
            tempArr.push(sortedArr[j]+3)
        }
        if (tempArr.length>0){
            connections[sortedArr[j]] = tempArr
        } else {
            connections[sortedArr[j]] = null
        }
    }

    let keyArray = Object.keys(connections)
    console.log('Key: ',keyArray)

    console.log(connections[keyArray[0]].length)

    for (let k=0; k<keyArray.length; k++){
        if (connections[keyArray[k]] !== null && connections[keyArray[k]].length === 1 ){
            connections[keyArray[k]] = connections[connections[keyArray[k]]]
            k--;
        }
    } 

    //console.log('Connections', connections)

    const connections2 = {}
        
    for (let q=0; q<9; q++){
            connections2[keyArray[q]] = connections[keyArray[q]]
    }
    connections2[13] = [14];
    connections2[14] = null

   
    let platform = 0;
    function checkCount (num, stCount){
        let stageCount = stCount
        console.log('Aa: ', connections2[keyArray[num]])
        console.log('Ab: ', connections2[keyArray[num+1]])
        if (connections2[keyArray[num]] === connections2[keyArray[num+1]]){
            stageCount++
            checkCount(num+1, stageCount)
            console.log('P1: ', stageCount)
        } else if (stageCount >2) {
            for (let m=0; m< stageCount; m++){
                let tempArr = connections2[keyArray[num-m]]
                console.log('Temp: ', tempArr)
                connections2[keyArray[num-m]] = [...tempArr, {plat: platform}]
                console.log('New: ', connections2[num-m])
            }
            platform++;
            checkCount(num+1, 0)
        }
        
        


    }
    checkCount(3, 0) 
    
   


    /*let routeCount = 0;
    function findRoutes (num){
        if (connections2[num] === null){
            routeCount++
            console.log(routeCount)
        } else {
        for (let l=0; l<connections2[num].length; l++){
            findRoutes(connections2[num][l])
        }
    }
    } */

    //console.log('Connections', connections)
    //findRoutes(0);
    
    //console.log('1: ', diff1Count, '3: ', diff3Count)
    //console.log('Routes', routeCount)
    
    console.log('Conn 2: ', connections2)

    //let ans = diff1Count*diff3Count
    //console.log('Ans: ', ans)
    //console.log(connections)
    return (
        <div>
            
        </div>
    )
}

export default Day10Log
