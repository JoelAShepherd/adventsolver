import React from 'react'
import input from './input3'


function Day3log() {
    const mapArr = input.split(/\n/);
    var trees = 0;
    var xPos = 0;
    console.log('new run')
    for (let i=0; i<mapArr.length; i++){
        let yPos = mapArr[i]
        if (yPos.charAt(xPos) === '#'){
            trees++;
        }
        xPos = xPos + 3;
        if (xPos >30){
            xPos = xPos -31;
        }
    }

    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    const answers = [];
    var ans = 1;

    function countTrees (right, down){
        let location = 0;
        let trees2 = 0;
        for (let k=0; k< mapArr.length; k=k+down){
            let line = mapArr[k];
            if (line.charAt(location) === '#'){
                trees2++
            }
            location = location + right
            if (location > 30){
                location = location -31;
            }
        }
        answers.push(trees2);
        ans = ans*trees2;
    }

    

    for (let l=0; l<5; l++){
        let aRight = slopes[l][0]
        let aDown = slopes[l][1]
        countTrees(aRight, aDown);
    } 

    //console.log(mapArr)
    console.log(trees)
    console.log(answers)
    console.log('ans:  ', ans)
    return (
        <div>
            
        </div>
    )
}

export default Day3log
