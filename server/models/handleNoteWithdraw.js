
const isPositive = (number) => {
    if(Math.sign(number) === 1 || Math.sign(number) === 0){
        return true
    }
    return false
}


const nominals =  [100,50,20,10]

const handleNoteWithdraw = (sum) => {
    if(nominals.includes(sum)){
        return { usedNotes: [sum] }
    }
    if(sum === 0){
        return { usedNotes: [] }
    }
    if(!isPositive(sum)){
        return {
            error: 'InvalidArgumentException'
        }
    }

    let usedNotes = []
    while(sum > 0 && sum !== 0 ){       
        nominals.map((nominal) => {
            while(true){
                if(isPositive(sum - nominal)){
                   usedNotes.push(nominal)
                   sum = sum - nominal 
                }else{
                    break;
                }
            }
        })
    }
    if(sum === 0){
        return {
            usedNotes
        }
    }else{
        return {
            error: 'NoteUnavailableException'
        }
    }

}


module.exports =  handleNoteWithdraw