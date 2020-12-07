import React from 'react'
import data from './input'

function Day5log() {
    const inputArr = data.split(/\n/)
    

    
    const fullDataArr = [];
    for (let i = 0; i<inputArr.length; i++){
        let a = inputArr[i];
        let rows = [];
        let columns = [0, 1, 2, 3, 4, 5, 6, 7]
        let column = '', row='', seatID='';
        for (let k=0; k<128; k++){
            rows.push(k);
        }
        for (let j=0; j<7; j++){
            let fbBinary = a.charAt(j)
            if (j<6){
                let half = rows.length/2
                if (fbBinary === 'F'){  //select back half of seats
                    rows = rows.slice(0, half)
                } else{ // select front half of seats
                    rows = rows.slice(half)
                }
            } else if (fbBinary =='F'){
                row = rows[0]
            } else {
                row = rows[1]
            }

        }
        for (let l=7; l<10; l++){
            let lrBinary = a.charAt(l)
            if (l<9){
                let lrHalf = columns.length/2
                if (lrBinary == 'L'){
                    columns = columns.slice(0, lrHalf)
                } else {
                    columns = columns.slice(lrHalf)
                }
            } else if (lrBinary == 'L'){
                column = columns[0]
            } else {
                column = columns[1]
            }
        }
        seatID = (row * 8) + column

        fullDataArr.push({code: a, row:row, column:column, seatID:seatID})
    }
    console.log(fullDataArr)


    let highestSeatID = fullDataArr[0]

    for (let m=1; m<fullDataArr.length; m++){
        
        if (fullDataArr[m].seatID > highestSeatID.seatID){
            highestSeatID = fullDataArr[m]
        }
    }

    let planeSeats = fullDataArr.map(seat => seat.seatID)
    const missingSeats = [];
    for (let n=0; n<planeSeats.length; n++){
        let a = planeSeats[n];
        let b = a-1
        if (planeSeats.indexOf(b) === -1 ){
            missingSeats.push(a);
        }
    }

    console.log(planeSeats)
    console.log('missing   ', missingSeats)
    return (
        <div>
            <h1>Hello!</h1>
    <p>working...{highestSeatID.seatID}</p>
        </div>
    )
}

export default Day5log
