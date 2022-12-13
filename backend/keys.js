if(process.env.Port =='production'){
    module.exports = require('./prod.js')
}
else{
    module.exports = require('./dev.js')
}