
const isPositiveNumber = (number) => {
    if(Math.sign(number) === 1 || Math.sign(number) === 0){
        return true
    }
    return false
}


const nominals =  [100,50,20,10]

const handleNotesWithdrawal = (sum) => {
    if(!isPositiveNumber(sum)){
        return {
            error: 'InvalidArgumentException'
        }
    }
    if(nominals.includes(sum)){
        return { usedNotes: [sum] }
    }
    if(sum === 0){
        return { usedNotes: [] }
    }

    let usedNotes = []
    while(sum > 0 && sum !== 0 ){       
        nominals.map((nominal) => {
            while(true){
                if(isPositiveNumber(sum - nominal)){
                   usedNotes.push(nominal)
                   sum = sum - nominal 
                }else{
                    break;
                }
            }
        })
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

}


module.exports =  handleNotesWithdrawal