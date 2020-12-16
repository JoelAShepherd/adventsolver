import React from 'react'
import input7 from './input7';
import testData1 from './testData1';
import testData2 from './testData2'



function Day7Log() {
    const rawRulesArr = input7.split(/\n/)
    console.log(rawRulesArr.length)

    function getBagColour (string){
        let wordsArr = string.split(' ')
        return wordsArr[0] + ' ' + wordsArr[1]
    }

    let colourArr = []

    for (let i=0; i<rawRulesArr.length; i++){
        let bagColour = getBagColour(rawRulesArr[i])
        colourArr.push(bagColour)
    }

    /*let bagDesc ={};

    for (let j=0; j<rawRulesArr.length; j++){
        let descBags = rawRulesArr[j].split(/[0-9]\s/)
        descBags.shift()
        descBags = descBags.map(bag => getBagColour(bag))
        bagDesc[colourArr[j]] = descBags
    }
    
    let relatedBags = new Set();

    for (let k=0; k<Object.keys(bagDesc).length; k++){
        if (bagDesc[colourArr[k]].includes('shiny gold')){
            relatedBags.add(colourArr[k])
        }
    }


    let startCount = 1;
    let endCount = 0;

    while (startCount !== endCount){
        startCount = relatedBags.size
        let tempBagArr = Array.from(relatedBags)
        for (let l=0; l<tempBagArr.length; l++){
            let bag = tempBagArr[l];
            for (let m=0; m<Object.keys(bagDesc).length; m++){
                if (bagDesc[colourArr[m]].includes(bag)){
                    relatedBags.add(colourArr[m])
                }
            }
        }
        endCount = relatedBags.size;
    } 

    console.log('Set ', relatedBags)
    console.log('Size ', relatedBags.size)*/
    let fullChildArr = {}
    function getBagChildren (bag){
        let name = getBagColour(bag);
        let children = bag.split('contain ')
        children.shift()
        
        let numRegex = RegExp('[0-9]');
        let childArr = []
        
        if (numRegex.test(children[0])){
            
            childArr = children[0].match(/[0-9]\s([a-z]+)\s([a-z]+)/g)
            
            let tempKids = {}

            for (let n=0; n<childArr.length; n++){
                let child = childArr[n].split(/\s/)
                tempKids[child[1] + ' ' + child[2]] = parseInt(child[0])

        }
        fullChildArr[name] = tempKids
    } else {
        fullChildArr[name] = null;
    }
        
    }
    for (let p=0; p<rawRulesArr.length; p++){
    getBagChildren(rawRulesArr[p])
    }
    let sum = 0;
    function findDescendants(bag){
        let children = fullChildArr[bag]
        console.log('Run through: ', bag, children)
        if (children === null){
            sum++;
            console.log(bag, sum)
        } else {
            sum++;
            for (const [key, value] of Object.entries(children)){
                
                for (let q=0; q< value; q++){
                findDescendants(key, value)
                }
            }
        }
    }
    findDescendants('shiny gold')
    let ans = sum;

    console.log('Ans: ', ans-1)
    return (
        <div>
            
        </div>
    )
}

export default Day7Log
