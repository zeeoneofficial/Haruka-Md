const axios = require("axios")

async function telesticker(url) {
   url = url.replace('https://t.me/addstickers/', '')
   var data1 = await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(url)}`)
   const result = []
   for (let i of data1.data.result.stickers) {
       var data2 = await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${i.thumb.file_id}`)
       var link = data2.data.result.file_path
       var has = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${link}`
       result.push({ status: data2.status, url: has })
   }
  return result
}

module.exports = { telesticker }