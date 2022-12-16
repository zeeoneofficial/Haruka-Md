const fs = require("fs");

const casinoSave = (db, obj, session) => {
    var mine = db
    const dbdir = `./database/casino/${session}.json`
    fs.writeFileSync(dbdir, JSON.stringify(obj, null, 2))
}

const setCasino = (session) => {
    const dbdir = `./database/casino/${session}.json`
    if (!fs.existsSync(dbdir)) {
        const objcas = {
            status: true,
            turn: 'Z',
            session: session,
            Z: null,
            Y: null,
            nominal: null,
        }
        casinoSave(dbdir, objcas, session)
        return objcas
    } else {
        const read = JSON.parse(fs.readFileSync(dbdir))
        return read
    }
}

const deleteCasino = (from) => {
    return fs.unlinkSync('./database/casino/' + from + '.json')
}

module.exports = { casinoSave, setCasino, deleteCasino }
    