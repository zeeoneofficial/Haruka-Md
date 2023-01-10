  const fs = require('fs')
  let _monayOrg = JSON.parse(fs.readFileSync('./database/user/monay.json'))
  let monayAwal = 0
  const addInventoriMonay = (sender) => {
        const obj = {id: sender, monay: monayAwal}
         _monayOrg.push(obj)
        fs.writeFileSync('./database/user/monay.json', JSON.stringify(_monayOrg))
   }
  const cekDuluJoinAdaApaKagaMonaynyaDiJson = (sender) => {
            let status = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addMonay = (sender, amount) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _monayOrg[position].monay += amount
                fs.writeFileSync('./database/user/monay.json', JSON.stringify(_monayOrg))
            }
        }
   const kurangMonay = (sender, amount) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _monayOrg[position].monay -= amount
                fs.writeFileSync('./database/user/monay.json', JSON.stringify(_monayOrg))
            }
        }
   const getMonay = (sender) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _monayOrg[position].monay
            }
        }     
        
   module.exports = { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay }   