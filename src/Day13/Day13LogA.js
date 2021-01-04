import React from 'react'
import input13 from './input13';


function Day13LogA() {
    const rawDataArr = input13.split(/[x,\s]+/)
    rawDataArr.shift()
    console.log(rawDataArr)

    const timeStamp = 1002632

    let timetable = {}

    for (let i=0; i< rawDataArr.length; i++){
        timetable[rawDataArr[i]] = {}
    }

    const timerange = [timeStamp-1, timeStamp +50]

    for (let j=0; j<rawDataArr.length; j++){
        let arr = []
        for (let k=timerange[0]; k<timerange[1]; k++){
            if (k%rawDataArr[j] === 0){
                arr.push(k)
            }
        }
        timetable[rawDataArr[j]] = arr
    }

    let allTimes = []

    for (let i=0; i<rawDataArr.length; i++){
        console.log('i', rawDataArr[i])
        for (let j=0; j<rawDataArr[i].length; j++){
            allTimes.push(timetable[rawDataArr[i]][j])
        }
    }

    let allTimes2 =[]

    for (let i=0; i<allTimes.length; i++){
        if (!isNaN(allTimes[i])){
            allTimes2.push(allTimes[i])
        }
    }
    console.log('AT2', allTimes2)
    let min = Math.min(...allTimes2)
    let diff = timeStamp - min
    console.log(min, diff, timetable, 677*5)



    return (
        <div>
            
        </div>
    )
}

export default Day13LogA
