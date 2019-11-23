how to import:
```
const sha2 = require('simple-js-sha2')
```
hashing:
```
sha2._224('hello') // ea09ae9cc6768c50fcee903ed054556e5bfc8347907f12598aa24193
sha2._256('hello') // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
sha2._384('hello') // 59e1748777448c69de6b800d7a33bbfb9ff1b463e44354c3553bcdb9c666fa90125a3c79f90397bdf5f6a13de828684f
sha2._512('hello') //9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043
```
performance (256bit): 
101.17 kh/s ~ (Core I7-7920HQ single thread)
99.07 kh/s ~ (3 GHz 8-Core Intel Xeon E5 single thread)

# contribute

bitcoin address: 1KKiniL7QnMPZZLjgGB2Kq1d7zsjUr6TnS

ethereum address: 0x177b258bD53A8F7d8C609A9277A60A51d1e7e0e0

