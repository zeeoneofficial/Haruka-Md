const toMs = require("ms");
const fs = require("fs");

exports.addPlayGame = (chatId, game, jawaban, expired, msg, _db) => {
    let obi = { id: chatId, game: game, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`), msg: msg }
    _db.push(obi)
}

exports.getJawabanGame = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
      if (_db[i].id == chatId) {
        found = i
      }
    })
    if (found !== false) {
      return _db[found].jawaban
    }
}

exports.isPlayGame = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
      if (_db[i].id == chatId) {
        status = true
      }
    })
    return status
}

exports.cekWaktuGame = (haruka, _dir) => {
    setInterval(() => {
      let position = null
      Object.keys(_dir).forEach((i) => {
        if (Date.now() >= _dir[i].expired) {
          position = i
        }
      })
      if (position !== null) {
        haruka.sendMessage(_dir[position].id, { text: `*--「 ${_dir[position].game} 」--*\n\n*Waktu Habis*\n*Jawaban :* ${_dir[position].jawaban}` }, { quoted: _dir[position].msg })
        _dir.splice(position, 1)
      }
    }, 1000)
}

exports.getGamePosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
      if (_db[i].id == chatId) {
        position = i
      }
    })
    if (position !== null) {
      return position
    }
}