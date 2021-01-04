import React from 'react'
import test13B from './test13B';
import input13 from './input13';



function Day13LogB() {
    console.log('Here we go!')
    var time1 = new Date();

    let tt = input13.split(/[,\s]/)
    //const tt = test13B.split(/[,\s]/)

    tt.shift()

    console.log(tt) //bus timetable as array o strings
    let tt2=[];
    let ttNums = []
    for (let i = 0; i<tt.length; i++){
        if (tt[i] !== 'x'){
            tt2.push(parseInt(tt[i]))
            ttNums.push(parseInt(tt[i]))
        } else {
            tt2.push(tt[i])
        }
    }

    console.log('tt2', tt2) // bus tt with number values as numbers not strings

    console.log('TTN',ttNums) // array of the bus numbers, no x
    let timeDiffs= {}

    for (let j=0; j<ttNums.length; j++){
        timeDiffs[ttNums[j]] = tt2.indexOf(ttNums[j])
    }
    
    let gears = {}

    for (let i=0; i<ttNums.length; i++){
        gears[i] = { ID: ttNums[i], calib: timeDiffs[ttNums[i]]} //gears in order, ID is bus num, calib is 
        // difference in minutes from first bus (gear 0)
    }

    console.log('---- gears', gears)

    console.log(time1.getTime())

    let t= 1
    let gRot = 1 // number of minutes per rotation of gear

    const rotate = () => { //rotates gear
        t= t+gRot
        console.log('R')
    }

   for (let g=0; g<ttNums.length; g++){
        console.log('Gear ID: ', gears[g].ID)
       console.log('Gear Calib: ', gears[g].calib)
       console.log('T: ', t, 'G-Rot: ', gRot)
       console.log('Sum: ' , t + gears[g].calib)
       if ((t + gears[g].calib) % gears[g].ID === 0){
            gRot = gRot* gears[g].ID
            console.log(' ------- Gear change: ', t)
       } else {
           rotate();
           g--
       }
   } 

    console.log('Ans: ', t)
    

    var time2 = new Date()
    const timeDiff = ((time2.getTime() - time1.getTime()))
    console.log('alg complete, time diff is: ', timeDiff)
     

    return (
        <div>
            <h1>Success!</h1>
        </div>
    )
}

export default Day13LogB
