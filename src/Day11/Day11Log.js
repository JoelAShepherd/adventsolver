import React from 'react'
//import test11 from './test11';
import input11 from './input11';



function Day11Log() {
    const rawDataArr = input11.split(/\n/)
    console.log(rawDataArr)
    let seatPlan1 = [];

    for (let i=0; i<rawDataArr.length; i++){
        
        for (let j=0; j<rawDataArr[i].length; j++){
            if (j===0){
                seatPlan1.push([])
            }
            seatPlan1[i].push(rawDataArr[i][j])
        }
    }

    let rowLength = seatPlan1[0].length
    let colLength = seatPlan1.length -1
    console.log('RL', rowLength, 'CL: ', colLength)

    let seatPlan2 = seatPlan1;
    function inspect(row, column, rowChange, columnChange){
        console.log('Row: ', row, 'Col: ', column, 'RC: ', rowChange, 'CC: ', columnChange)
        let newRow = row+rowChange;
        let newCol = column+columnChange
        console.log('New Row: ', newRow)
        console.log('New Col: ', newCol)
        if (newRow === -1){
            return false
        } else if (newCol === -1){
            return false
        } else if (newRow > colLength){
            return false
        } else if (newCol > rowLength){
            return false
        } else {
            if (seatPlan2[newRow][newCol] === '.'){
                console.log('Advance')
                return inspect(newRow, newCol, rowChange, columnChange)
            } else {
                console.log('Test: ', seatPlan2[newRow][newCol])
                return seatPlan2[newRow][newCol]
            }
        } 
        
    }

    let positions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1,0], [1,1]]
    function seatChange (seatArray) {
        let tempSeatPlan = []
        for (let k=0; k<seatArray.length; k++){
            tempSeatPlan.push([])
            let row = tempSeatPlan[k];
            for (let l=0; l<seatArray[k].length; l++){
                let adjCount =0;
                console.log('--------- new value -----------   K: ', k, 'L', l)
                for (let p=0; p<positions.length; p++){
                    let ans = inspect(k, l, positions[p][0], positions[p][1])
                    console.log('Ans: ', ans)
                    if (ans === '#'){
                        adjCount++
                    }
                }
                
                /*if (k>0 && l>0){ //topleft
                    if (seatArray[k-1][l-1] === '#'){
                        adjCount++
                        //console.log('topleft')
                    }
                }
                if (k>0){ //top
                    if (seatArray[k-1][l] === '#'){
                        adjCount++
                        //console.log('top')
                    }
                }
                if (k>0 && l<seatArray[k].length -1){ //topright
                    if (seatArray[k-1][l+1] === '#'){
                        adjCount++
                        //console.log('topright')
                    }
                }
                if (l>0){// left
                    if (seatArray[k][l-1]==='#'){
                        adjCount++
                        //console.log('left')
                    }
                }
                if (l<seatArray[k].length -1){ //right
                    if (seatArray[k][l+1] === '#'){
                        adjCount++
                        //console.log('right')
                    }
                }
                if (k<seatArray.length -1 && l>0){ //bottomleft
                    if (seatArray[k+1][l-1] === '#'){
                        adjCount++
                        //console.log('bottomleft')
                    }
                }
                if (k<seatArray.length -1){ //bottom
                    if (seatArray[k+1][l] === '#'){
                        adjCount++
                        //console.log('bottom')
                    }
                }
                
                if (k<seatArray.length -1 && l<seatArray[k].length -1){ //bottomright
                    if (seatArray[k+1][l+1]=== '#'){
                        adjCount++
                        //console.log('bottomright')
                    }
                }
                
                */
                //console.log('K: ', k, 'L: ', l, 'AdjCount: ', adjCount)
                
                if (seatArray[k][l] === 'L' && adjCount ===0){
                    row.push('#')
                } else if (seatArray[k][l] === '#' && adjCount > 4){
                    row.push('L')
                } else {
                    row.push(seatArray[k][l])
                }
            }
        }
        seatPlan2 = tempSeatPlan;
    }

    function seatCount (seatArray2){
        let seatCounter = 0;
        for (let m=0; m<seatArray2.length; m++){
            for (let n=0; n<seatArray2[m].length; n++){
                if (seatArray2[m][n] === '#'){
                    seatCounter++
                }
            }
        }
        console.log('Seatcount: ', seatCounter)
        return seatCounter
    }

    console.log('S1: ', seatPlan1)
    seatCount(seatPlan1)
    seatChange(seatPlan1)
    
    let seatCountArr = [0]
    
    function findStable (count){
        let thisCount = count
        
        seatCountArr.push(seatCount(seatPlan2));
        console.log(seatCountArr)
        if (seatCountArr[seatCountArr.length-1] === seatCountArr[seatCountArr.length -2]){
            console.log('Final Count: ', seatCountArr[seatCountArr.length-1])
            
        } else if (count < 1000){
        seatChange(seatPlan2)
        thisCount++
        findStable(thisCount);
        }
    }

    findStable(0);

    return (
        <div>
            <h1>Success!</h1>
        </div>
    )
}

export default Day11Log
