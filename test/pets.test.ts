import got from "got/dist/source"
import { strict as assert } from 'assert'
import { expect } from "chai"

describe('Pet', function () {
    it('can be received by id', async function () {
        let id = 7574746;
        const response = await got(`https://petstore.swagger.io/v2/pet/${id}`)
        const body = JSON.parse(response.body)
        
        id = 3
        assert(id == body.id, `Expected returned pet id to be ${id}`)
        expect(body.id, `Expected returned pet id to be ${id}`).to.be.equal(id)
    })
})