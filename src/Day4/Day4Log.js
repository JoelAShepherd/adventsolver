import React from 'react'
import input from './input4'

function Day4Log() {
    const data = input.split(/\n{2}/)
    const passportArr = [];
    for (let i=0; i<data.length; i++){
        let passElements = data[i].split(/\n|\s/)
        
        let passport = {};
        for (let j=0; j<passElements.length; j++){
            let attr = passElements[j]
            let pair = attr.split(/:/)
            passport[pair[0]] = pair[1]
        }
        
        passportArr.push(passport)
    }
    
    //Part 1:
    /*var validCount = 0;
    for (let k=0; k<passportArr.length; k++){
        if (Object.keys(passportArr[k]).length === 8){
            validCount++
        } else if (Object.keys(passportArr[k]).length === 7 && 
        passportArr[k].hasOwnProperty('cid')=== false){
            validCount++
        }
    }
    console.log('VC: ', validCount)*/
    //Part 2
    //console.log(passportArr)

    /*byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not. */

    


    return (
        <div>
            
        </div>
    )
}

export default Day4Log
