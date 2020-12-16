import React from 'react'
import input6 from './input6';


function Day6Log() {
    const dataGroups = input6.split(/\n{2}/)
    //console.log(dataGroups)

    /*const setArr = [];
    for (let i=0; i<dataGroups.length; i++){
        let set = new Set();
        for (let j=0; j<dataGroups[i].length; j++){
            
            let aChar = dataGroups[i].charAt(j);
            const regex = new RegExp('[a-z]')
            if (regex.test(aChar)){
                set.add(aChar);
            }
           
        }
        setArr.push(set)

    }
    //console.log('SetArr: ', setArr)
    
    let uniqueCount = 0;
    for (let k=0; k<setArr.length; k++){
        let aSet = setArr[k];
        uniqueCount = uniqueCount + aSet.size;
    }
    console.log(uniqueCount)*/      //First problem solved

    let groupCountArr = [];
    for (let i=0; i<dataGroups.length; i++){ //each group
        let group = dataGroups[i];
        let personArr = group.split(/\n/)
        let thisSet = new Set();
        for (let k=0; k<personArr.length; k++){
            let person = personArr[k]
            let response = person.split('')
            for (let l=0; l<response.length; l++){
                thisSet.add(response[l])
            }
            
        }
        const allVals = Array.from(thisSet)
        
        let groupCount =0;
        console.log('this: ', thisSet)
        
        for (let m=0; m<allVals.length; m++){ //Each item of the set to check against the people
            let val = allVals[m];
            let personToVallArr =[];    //the results from each person from the val check
            for (let n=0; n<personArr.length; n++){ //iterate through each peron to check against val;
                console.log('PAn: ', personArr[n])
                console.log('val: ', val)
                let ans = personArr[n].includes(val);
                console.log('Ans: ', ans)
                personToVallArr.push(ans)
            }
            //console.log('ptvArr: ', personToVallArr)
            if (!personToVallArr.includes(false)){
                groupCount++
            }
        }
        groupCountArr.push(groupCount)
    }
    
        console.log('end Arr: ', groupCountArr)
        let finalAns =0;
        for (let p=0; p<groupCountArr.length; p++){
            finalAns = finalAns + groupCountArr[p]
        }
        console.log('Final Answer: ', finalAns)
    return (
        <div>
            
        </div>
    )
}


export default Day6Log
