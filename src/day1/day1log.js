import React from 'react'
import input from './input'

function Day1log() {
    let inputArr = input.split(/\n/)
    inputArr = inputArr.map(num => parseInt(num))
    console.log(inputArr)

    let c, d;

    for (let i =0; i<200; i++){
        let a = inputArr[i];
        for (let j=1; j<(200-i); j++ ){
            let b = inputArr[i+j]
            if (a+b === 2020){
                c= a;
                d = b;
                
            }
        }
    }

    let e = c*d

    console.log('a: ', c, 'b: ', d, 'e: ', e) // first problem

    var ans;
    var x, y, z;

    for (let k=0; k<200; k++){
        let f = inputArr[k];
        for (let l=1; l<(200-k); l++){
            let g = inputArr[k+l]
            for (let m=2; m<(200-k-l); m++){
                let h = inputArr[k+l+m]
                if (f+g+h === 2020){
                    x=f;
                    y=g;
                    z=h;
                    
                }
            }
        }
    }
    ans = x*y*z
    console.log(x, y, z, ans)

    return (
        <div>
            <h1>Hello! Day1:</h1>
        </div>
    )
}

export default Day1log
