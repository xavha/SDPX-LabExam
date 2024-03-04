const express = require('express')
const app = express()

app.get('/is_prime/:num', (req,res) => {
    const num = parseInt(req.params.num)

    if(num===1){
        console.log(`1`)
        return res.send('false')
    }

    for(i=2;i<num;i++){
        if(num%i===0){
            console.log(`${num} false`)
            return res.send('false')
        }
    }
    console.log(`${num} true`)
    return res.send('true')
})

app.listen(3000, () => {
    console.log("Server run 3000")
})

module.exports = app