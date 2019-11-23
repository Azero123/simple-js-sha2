const sha2 = require('../src/main.js')

try {
    const result = sha2._224('hello')
    if (result !== 'ea09ae9cc6768c50fcee903ed054556e5bfc8347907f12598aa24193') {
        throw `sha2 (224bit) failed ${result}`
    }
}
catch (e) {
    console.error(e)
}

try {
    const result = sha2._256('hello')
    if (result !== '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824') {
        throw `sha2 (256bit) failed ${result}`
    }
}
catch (e) {
    console.error(e)
}

try {
    const result = sha2._384('hello')
    if (result !== '59e1748777448c69de6b800d7a33bbfb9ff1b463e44354c3553bcdb9c666fa90125a3c79f90397bdf5f6a13de828684f') {
        throw `sha2 (384bit) failed ${result}`
    }
}
catch (e) {
    console.error(e)
}

try {
    const result = sha2._512('hello')
    if (result !== '9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043') {
        throw `sha2 (512bit) failed ${result}`
    }
}
catch (e) {
    console.error(e)
}