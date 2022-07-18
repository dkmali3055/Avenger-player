
const path = require('path');
const home = (req,res) => {
    res.sendFile(path.join(process.cwd(),'views','videojs.html'))
    
}

module.exports = {home};