const fs = require('fs')
const { TelegraPh } = require('./uploader')
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./myfunc')
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
const welcome2 = setting.auto_welcomeMsg
const leave2 = setting.auto_leaveMsg
const {
	delay,
	proto,
	jidDecode,
	jidNormalizedUser,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	downloadContentFromMessage,
} = require('@adiwajshing/baileys')
const moment = require('moment-timezone')

module.exports.welcome = async(iswel, isleft, haruka, anu) =>{
	try {
            const metadata = await haruka.groupMetadata(anu.id)
            const participants = anu.participants
            const memeg = metadata.participants.length;
  	        const groupName = metadata.subject
  		      const groupDesc = metadata.desc
            for (let num of participants) {
                try {
                    pp_user = await haruka.profilePictureUrl(num, 'image')
                } catch {
                    pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                try {
                    ppgroup = await haruka.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                if (anu.action == 'add' && iswel) {
                	console.log(anu)
                let hmm = await getBuffer(pp_user)
				 let ff = await './media/ppuser-'+getRandom('.png')
				await fs.writeFileSync(ff, hmm)
				 let ppu = await TelegraPh(ff)
				
				 let hmm2 = await getBuffer(ppgroup)
				 let fff = await './media/ppgc-'+getRandom('.png')
				await fs.writeFileSync(fff, hmm2)
				 let ppgc = await TelegraPh(fff)
				const buttonss = [{buttonId: '.menu', buttonText: {displayText: '📝 Menu'}, type: 1},
  {buttonId: '.owner', buttonText: {displayText: 'Owner 👤'}, type: 1}
]
try {
	var welcome = await getBuffer(`https://greetings.zeeoneofc2.repl.co/api/welcome2?name=${encodeURI(num.split("@")[0])}&mem=${encodeURI(memeg)}&gcname=${encodeURI(metadata.subject)}&picurl=${ppu}&desc=baca&bgurl=https://telegra.ph/file/90a931648de597820bc08.jpg&gcicon=${ppgc}`)
	} catch {
        var welcome = Buffer.isBuffer(pp_user) ? pp_user : /^data:.*?\/.*?;base64,/i.test(pp_user) ? Buffer.from(pp_user.split`,`[1], 'base64') : /^https?:\/\//.test(pp_user) ? await (await fetch(pp_user)).buffer() : fs.existsSync(pp_user) ? fs.readFileSync(pp_user) : Buffer.alloc(0)
			 
        }
					
                    if (isSetWelcome(anu.id, set_welcome_db)) {               	
                        var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db)
                    var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                        const buttonMessage = {
    image: welcome,
    caption: `${full_pesan}`,
    footer: `${setting.footer} © 2022`,
    buttons: buttonss,
    mentions: [num],
    headerType: 3
}
await haruka.sendMessage(anu.id, buttonMessage)
                      // haruka.sendMessage(anu.id, { caption: `${full_pesan}`, image: { url: pp_user }, mentions: [num] })
                   } else {
                   	const buttonMessage = {
    image: welcome,
    caption: `Welcome @${num.split("@")[0]} in the group ${groupName}`,
    footer: `${setting.footer} © 2022`,
    buttons: buttonss,
    mentions: [num],
    headerType: 3
}
await haruka.sendMessage(anu.id, buttonMessage)
                      }
                } else if (anu.action == 'remove' && isleft) {
                	console.log(anu)
                	let hmm = await getBuffer(pp_user)
				 let ff = await './media/ppuser-'+getRandom('.png')
				await fs.writeFileSync(ff, hmm)
				 let ppu = await TelegraPh(ff)
				
				 let hmm2 = await getBuffer(ppgroup)
				 let fff = await './media/ppgc-'+getRandom('.png')
				await fs.writeFileSync(fff, hmm2)
				 let ppgc = await TelegraPh(fff)
				const buttonss = [{buttonId: '.menu', buttonText: {displayText: '📝 Menu'}, type: 1},
  {buttonId: '.owner', buttonText: {displayText: 'Owner 👤'}, type: 1}
]
try {
	var welcome = await getBuffer(`https://greetings.zeeoneofc2.repl.co/api/welcome2?name=${encodeURI(num.split("@")[0])}&mem=${encodeURI(memeg)}&gcname=${encodeURI(metadata.subject)}&picurl=${ppu}&desc=baca&bgurl=https://telegra.ph/file/90a931648de597820bc08.jpg&gcicon=${ppgc}`)
	} catch {
        var welcome = Buffer.isBuffer(pp_user) ? pp_user : /^data:.*?\/.*?;base64,/i.test(pp_user) ? Buffer.from(pp_user.split`,`[1], 'base64') : /^https?:\/\//.test(pp_user) ? await (await fetch(pp_user)).buffer() : fs.existsSync(pp_user) ? fs.readFileSync(pp_user) : Buffer.alloc(0)
			 
        }
try {
	var leave = await getBuffer(`https://greetings.zeeoneofc2.repl.co/api/goodbye2?name=${encodeURI(num.split("@")[0])}&mem=${encodeURI(memeg)}&gcname=${encodeURI(metadata.subject)}&picurl=${ppu}&desc=baca&bgurl=https://telegra.ph/file/90a931648de597820bc08.jpg&gcicon=${ppgc}`)
        } catch {
        var leave = Buffer.isBuffer(pp_user) ? pp_user : /^data:.*?\/.*?;base64,/i.test(pp_user) ? Buffer.from(pp_user.split`,`[1], 'base64') : /^https?:\/\//.test(pp_user) ? await (await fetch(pp_user)).buffer() : fs.existsSync(pp_user) ? fs.readFileSync(pp_user) : Buffer.alloc(0)
        }
                  if (isSetLeft(anu.id, set_left_db)) {            	
                        var get_teks_left = await getTextSetLeft(anu.id, set_left_db)
                        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                      const buttonMessage = {
    image: leave,
    caption: full_pesan,
    footer: `${setting.footer} © 2022`,
    buttons: buttonss,
    mentions: [num],
    headerType: 3
}
await  haruka.sendMessage(anu.id, buttonMessage)
                       } else {
                       	const buttonMessage = {
    image: leave,
    caption: `Sayonara @${num.split("@")[0]}`,
    footer: `${setting.footer} © 2022`,
    buttons: buttonss,
    mentions: [num],
    headerType: 3
}
await  haruka.sendMessage(anu.id, buttonMessage)
                        } 
                } else if (anu.action == 'promote') {
                    haruka.sendMessage(anu.id, { image: { url: pp_user }, mentions: [num], caption: `@${num.split('@')[0]} Promote In ${metadata.subject}` })
                } else if (anu.action == 'demote') {
                    haruka.sendMessage(anu.id, { image: { url: pp_user }, mentions: [num], caption: `@${num.split('@')[0]} Demote In ${metadata.subject}` })
              }
            }
        } catch (err) {
            console.log(err)
        }
	}
	
	module.exports.aDelete = async (setting, haruka, m) => {
	  if(setting.antiDelete){
	//if (!m) m = false;
	const isGroup = m.remoteJid.endsWith('@g.us')
	//if (!isGroup) return
	try {
		const dataChat = global.dbc
		const mess = dataChat.find((a) => a.id == m.id);
		const mek = mess.m;
    //console.log(mek)
		const participant = mek.key.remoteJid.endsWith("@g.us") ? mek.key.participant : mek.key.remoteJid;
		console.log(participant)
		const froms = mek.key.remoteJid;
		await haruka.sendMessage(
			froms, {
				text: `「 *ANTI DELETE MESSAGE* 」
    
📛 *Name* : ${mek.pushName}
👤 *User* : @${mek.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Makassar').format('HH:mm:ss')} WITA 
✍️ *MessageType* : ${mek.mtype}
    `,
				mentions: [participant],
			}, {
				quoted: mek
			}
		);

		await haruka.copyNForward(froms, mek, true);
  	await delay(4000)
		let messek = dataChat.find((a) => a.id == m.id);
		for (let [i, te] of dataChat.entries()) {
			if (te.id === m.id) {
				dataChat.splice(i, 1); // Tim is now removed from "users"
		}
		}

	} catch (err) {
	  console.log(err)
	}
	  }
}
module.exports.oneTime = async (setting,haruka,m) => {
  if(setting.antiViewOnce){
  			try {
let teks = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Makassar').format('HH:mm:ss')} WITA 
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await haruka.sendTextWithMentions(m.chat, teks, m)
  await delay(500)
  
  m.copyNForward(m.chat, true, {
  readViewOnce: true,
    quoted: m
  })

			} catch (err) {
				console.log(err)
			}
  }
}
