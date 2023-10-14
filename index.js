const fs = require('fs');
function check(word){
            let content = fs.readFileSync('./en.txt');
            let regex = new RegExp('\n' + word +'\n');
            if (content.toString('utf-8').match(regex)) {
                return true;
            }
            return false;
        }
module.exports ={check};
