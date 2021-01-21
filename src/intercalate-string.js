const lib = require('@f0c1s/intercalate-string')
const red = require('@f0c1s/color-red')

console.log(red(lib))

/* This just puts 'str:withit' in array:strings, as: a withit b withit c... and then joins them to form a single string.
function intercalate(withit, strings) {
    assert.ok(withit && typeof withit === 'string')
    assert.ok(strings && Array.isArray(strings))
    return i(withit, strings).join('')
}
 */
