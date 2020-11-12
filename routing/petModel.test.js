const Pets = require('./petModel.js')
const db = require('../data/db-config')

// each test starts with the SAME database
beforeEach(async ()=> {
    await db('pets').truncate()
})

describe('pets model', () => {
    describe('getAll()', () => {
        it('gets an empty array', async () => {
            const pets = await Pets.getAll()
            // expect(pets).toEqual([])
            expect(pets).toHaveLength(0)
        })
        it('gets all the pets', async () => {
            //make an insert { name: 'sam' }
            //check that the helper turns an array with length 1
            await db('pets').insert({ name: 'scout', age: 5, gender: 'male' })
            let pets = await Pets.getAll()
            expect(pets).toHaveLength(1)
            //make an insert { name: 'pluto' }
            //check that the helper turns an array with length 2
            await db('pets').insert({ name: 'rex', age: 6, gender: 'male' })
            pets = await Pets.getAll()
            expect(pets).toHaveLength(2)
        })
    })

    describe('insert()', () => {
        it('can insert pets', async () => {
        //use insert, assert pets.length is 1
        await Pets.insert({ name: 'scout', age: 5, gender: 'male' })
        let pets = await db('pets')
        expect(pets).toHaveLength(1)
        //use insert, assert pets.length is 2
        await Pets.insert({ name: 'rex', age: 6, gender: 'male' })
        pets = await db('pets')
        expect(pets).toHaveLength(2)
        })

        it('gives back the inserted pets', async () => {
            //1- write the test which will fail
            const sam = await Pets.insert({ name: 'scout', age: 5, gender: 'male' })
            expect(sam).toMatchObject({ id: 1, name: 'scout', age: 5, gender: 'male'})
            const pluto = await Pets.insert({ name: 'rex', age: 6, gender: 'male' })
            expect(pluto).toMatchObject({ id: 2, name: 'rex', age: 6, gender: 'male' })
        })
    })

    describe('update()', () => {
        it('can insert', async () => {
            await db('pets').insert({ name: 'scout', age: 5, gender: 'male' })
            let sam = await Pets.update(1, { name: 'scout', age: 5, gender: 'male' })
            expect(sam).toMatchObject({ id: 1, name: 'scout', age: 5, gender: 'male' })
            sam = await db('pets').where({id:1}).first()
            expect(sam.name).toBe('scout')
        })
    })

    describe('remove()', () => {
        it('can remove', async () => {
            await db('pets').insert({ name: 'scout', age: 5, gender: 'male' })
            await Pets.remove(1)
            let pets = await db('pets')
            expect(pets).toHaveLength(0)
        })
    })
})

// db('pets').insert({ name:'sam' })
//     .then(stuff => {
//         return Pets.remove(1)
//     })
//     .then(stuff => {
//         return db('pets')
//     })
//     .then(pets => {
//         expect(pets).toHaveLength(0)
//     })