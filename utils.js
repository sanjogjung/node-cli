console.log(name)
const add = function(a, b) {
    return a + b;
}

module.exports = add;
// recommended way is  module.exports.add = add; module.exports.subtract = subtract; module.exports.name  = name