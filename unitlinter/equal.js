const equalfunc=(a,b)=>{
    if(a === b) return true
    else return false
}

const square=(a)=>{
    if(typeof a !== 'number') throw new Error("Not a number")
    return a**2
}

const dbconn=()=>{
    console.log("Database active")
}

module.exports={
    equalfunc,
    square,
    dbconn
}