const assert = require('assert')
const db = require('./db')

describe('Users', () => {
    describe('#findUser()', () => {
        it('Should return Nilla when id is 2', () => {
            const user = db.users.find(user => user.id === 2)
            assert.equal(user.name, 'Nilla')
        })
    })
})