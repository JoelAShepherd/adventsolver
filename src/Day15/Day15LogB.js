import React from 'react'

function Day15LogB() {
    var time1 = new Date();
    let mem = {0:[0], 20:[1], 7:[2], 16:[3], 1:[4], 18: [5], 15:[6]}
    
    let lastNum =15

    for (let i=7; i<30000000; i++){
        //console.log('I', i, 'Last Num: ', lastNum)
        //console.log('Mem', JSON.stringify(mem))
        if (mem[lastNum].length > 1){
            //console.log('Last instance of ', lastNum, 
            //'is at', mem[lastNum][0])
            let diff = mem[lastNum][1] - mem[lastNum][0]
            //console.log('Diff: ', diff)
            if (mem.hasOwnProperty([diff])){
                //console.log('Has Own')
                if (mem[diff].length > 1){
                mem[diff][0] = mem[diff][1]
                mem[diff][1] = i
                //console.log('Instance of ', diff, 'at ', i)
                } else {
                    mem[diff].push(i)
                }
            } else {
                //console.log('New number added: ', diff, 'at ', i)
                mem[diff] = [i]
            }

            lastNum = diff
        } else {
            //console.log('Last Num is new Num')
            //console.log('instance of ', 0, 'at ', i)
            if (mem.hasOwnProperty('0')){
                if (mem['0'].length > 1){
                    mem['0'][0] = mem['0'][1]
                    mem['0'][1] = i
                    //console.log('Zero check with 2: ', mem['0'])
                } else {
                    mem['0'].push(i)
                    //console.log('Zero check with 1: ', mem['0'])
                }
            }
            else {

                mem['0'] = [i]
                //console.log('Zero check new 0: ', mem['0'])
            }
            lastNum = 0
        }
    }    
    console.log(lastNum)
    var time2 = new Date()
    const timeDiff = ((time2.getTime() - time1.getTime()))
    console.log('alg complete, time diff is: ', timeDiff)
    return (
        <div>
            
        </div>
    )


}

export default Day15LogB
