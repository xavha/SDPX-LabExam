const express = require('express')
const app = express()

function is_prime(num){
    if(num<=1){
        // console.log(`1`)
        return false
    }

    for(i=2;i<num;i++){
        if(num%i===0){
            // console.log(`${num} false`)
            return false
        }
    }
    // console.log(`${num} true`)
    return true
}

app.get('/is_prime/:num', (req,res) => {
    let num = parseInt(req.params.num)
    const result = is_prime(num);
    res.send((result).toString());

})

const server = app.listen(3000, () => {
    console.log("Server run 3000")
})

module.exports = { server , is_prime }