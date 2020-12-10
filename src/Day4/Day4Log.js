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
    var validCount = 0;
    for (let k=0; k<passportArr.length; k++){
        if (Object.keys(passportArr[k]).length === 8){
            validCount++
        } else if (Object.keys(passportArr[k]).length === 7 && 
        passportArr[k].hasOwnProperty('cid')=== false){
            validCount++
        }
    }
    console.log('VC: ', validCount)
    //Part 2
    var under7 =[], sevenHasCID=[], btyrWrong=[], iyrWrong=[], expyrWrong=[], hgtUnitWrong=[], hgtvalWrong=[],
    cmWrong = [], inWrong = [], unitsWrong = [], hclWrong = [], eclWrong = [], pidWrong=[], allOK=[];
    var valid2 = 0;
    console.log(passportArr[57], passportArr[37]);
    for (let l=0; l<60; l++){ //each passport
        console.log(l)
        let active = true;
        let pass = passportArr[l]
        let attrBYR = pass.byr;
        let attrIYR = pass.iyr;
        let attrEYR = pass.eyr;
        const unitReg = RegExp('[a-z]{2}')
        const valReg = RegExp('[0-9]+')
        let hgtUnits = pass.hgt.match(unitReg)
        let hgtVal = pass.hgt.match(valReg)
        const  regex = RegExp('#[0-9a-f]{6}')
        const eclArr = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
        const pRegex = RegExp('[0-9]{9}')
        while (active){
            console.log('L: ', l, 'pass Length: ', Object.keys(pass).length)
            if ( Object.keys(pass).length<6){
                console.log('under7')
                under7.push(pass);
                active= false;
            } else if (Object.keys(pass).length === 7 && pass.hasOwnProperty('cid')){
                sevenHasCID.push(pass)
                console.log('under7hasCID')
                active= false
            } else if (parseInt(attrBYR) < 1920 || parseInt(attrBYR)>2002){
                btyrWrong.push(pass)
                console.log('btyrW')
                active= false
            } else if (parseInt(attrIYR)<2010 || parseInt(attrIYR)>2020){
                iyrWrong.push(pass);
                console.log('iyrWrong')
                active= false
            } else if (parseInt(attrEYR)<2020 || parseInt(attrEYR)>2030){
                expyrWrong.push(pass)
                console.log('expYrWrong')
                active= false
            } else if (!unitReg.test(pass.hgt)){
                hgtUnitWrong.push(pass)
                console.log('noHgtUnit')
                active= false
            } else if (!valReg.test(pass.hgt)){
                hgtvalWrong.push(pass)
                console.log('noHgtUnits')
                active= false
            } else if (hgtUnits === 'cm'){
                if  (parseInt(hgtVal)<150 || parseInt(hgtVal > 193)){
                    cmWrong.push(pass)
                    console.log('cmWrong')
                    active= false
                }
            } else if (hgtUnits === 'in'){ 
                if (parseInt(hgtVal)<59 || parseInt(hgtVal)>76){
                    inWrong.push(pass)
                    console.log('inWrong')
                    active= false
                }
            }  else if (hgtUnits !== 'in' && hgtUnits === 'cm'){
                unitsWrong.push(pass)
                console.log('noINorCM')
                active= false
            } else if (!regex.test(pass.hcl)){
                hclWrong.push(pass)
                console.log('wrongHCL')
                active= false
            } else if (!eclArr.includes(pass.ecl)){
                eclWrong.push(pass)
                console.log('eclWrong')
                active= false
            } else if (!pRegex.test(pass.pid)){
                pidWrong.push(pass)
                console.log('pidWrong')
                active= false
            } else {
            allOK.push(pass)
            valid2++
            console.log('ALL GOOOOOD!!!')
            active= false
            }
        }
        
    }
    console.log('under7: ', under7, '7cid: ', sevenHasCID, 'btyW: ', btyrWrong, 'iyrW: ', 
    iyrWrong, 'expyrW: ', expyrWrong, 'hgtUWr: ', hgtUnitWrong, 'hgtvalW: ', hgtvalWrong, 
    'cmWrong: ', cmWrong,
        'inW: ', inWrong, 'unitsW: ', unitsWrong, 'hclW: ', hclWrong, 'eclW: ', eclWrong, 
        'pidW: ', pidWrong, 'allOK: ', allOK)
    console.log('V2: ', valid2)
    console.log('end')
    return (
        <div>
            
        </div>
    )
}

export default Day4Log
