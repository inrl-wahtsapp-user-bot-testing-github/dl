const languageRegex = require(`./en.js`);
module.exports = function check(word) {
    return languageRegex.test(word)
};
