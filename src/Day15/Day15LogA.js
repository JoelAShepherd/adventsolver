import React from 'react'

function Day15LogA() {
    let numbers = [0,3,6]
    
    let testArr = []

    const checkIfPres = (num) => {
        return testArr.includes(num)
    }

    for (let i=3; i<20; i++){
        console.log('I: ', i, 'Numbers: ', numbers)
        let num = numbers[numbers.length-1]
        console.log('Num', num)
        testArr = numbers.slice(0, -1)
        console.log('TestArr',testArr)
        if (checkIfPres(num)){
            console.log(true)
            let diff = i-(testArr.lastIndexOf(num)) -1
            console.log('Diff: ',diff)
            numbers.push(diff)
        } else {
            console.log(false)
            numbers.push(0)
        }
    }
    console.log(numbers)

    return (
        <div>
            
        </div>
    )
}

export default Day15LogA
