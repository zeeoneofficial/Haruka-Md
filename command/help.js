const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`

*-----------------------*
 Hallo Kak 😉
 Bot Whatsapp ini berjalan dengan nodeJs atau javascript.
 
 Contribusy:
 - ZeeonneOfc 
 - Romli Suhanda
 - Ipul Fachri
*-----------------------*

*[ STATISTICS ]*
 • Upload : ${upload}
 • Downloads : ${download}

*[ BOT INFO ]*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal(new Date())}
 • Runtime : ${runtime(process.uptime())}

*[ USER INFO ]*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 • Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 • Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
 • Balance : ${getBalance(sender, balance)}
 • Role : ${role}
 
 
*[ MAIN MENU ]*
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa

*[ CONVERTER/TOOLS ]*
 • ${prefix}sticker
 • ${prefix}qc
 • ${prefix}xquote
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}ai
 • ${prefix}aiimg
 • ${prefix}aidraw
 • ${prefix}chatgpt
 • ${prefix}nuliskiri
 • ${prefix}nuliskanan
 • ${prefix}foliokiri
 • ${prefix}foliokanan
 • ${prefix}say
 • ${prefix}translate

*[ ANONYMOUS CHATS ]*
 • ${prefix}menfess
 • ${prefix}confess
 • ${prefix}balasmenfess
 • ${prefix}tolakmenfess
 • ${prefix}stopmenfess
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop
 • ${prefix}sendprofile

*[ STORE MENU ]*
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}jeda
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi
 • ${prefix}delsetdone
 • ${prefix}changedone
 • ${prefix}setdone
 • ${prefix}delsetproses
 • ${prefix}changeproses
 • ${prefix}setproses
 • proses < reply chat >
 • done < reply chat >

*[ RPG GAMES ]*
 • ${prefix}inventory
 • ${prefix}mining
 • ${prefix}buy 
 • ${prefix}sell
 • ${prefix}heal
 • ${prefix}hunt
 • ${prefix}adventure
 • ${prefix}luckyday
 • ${prefix}killslime
 • ${prefix}killgoblin
 • ${prefix}killdevil
 • ${prefix}killbehemoth
 • ${prefix}killdemon
 • ${prefix}killdemonking
 • ${prefix}joinrpg
 • ${prefix}sellikan
 • ${prefix}sellbesi
 • ${prefix}sellemas
 • ${prefix}jelajah
 • ${prefix}mancing
 • ${prefix}jualikan
 • ${prefix}jualcoal
 • ${prefix}lebur
 • ${prefix}jualstone
 • ${prefix}jualingot
 • ${prefix}jualkayu
 • ${prefix}nebang
 • ${prefix}goplanet
 • ${prefix}jualbahankimia

*[ DOWNLOADS MENU ]*
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}instagram
 • ${prefix}igphoto
 • ${prefix}igvideo
 • ${prefix}igreels
 • ${prefix}tiktok
 • ${prefix}tiktoknowm
 • ${prefix}tiktokaudio
 • ${prefix}mediafire
 • ${prefix}gitclone

*[ GROUP MENU ]*
 • ${prefix}autoaigc
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}pppanjanggc
 • ${prefix}setopen
 • ${prefix}changesetopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}changesetclose
 • ${prefix}delsetclose
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setppgc2 
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}antilink2
 • ${prefix}antiwame2
 • ${prefix}open
 • ${prefix}close
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa

*[ GAME MENU ]*
 • ${prefix}tebakgambar
 • ${prefix}tebakkata
 • ${prefix}tebakbendera
 • ${prefix}tebakkalimat
 • ${prefix}tebaksiapa
 • ${prefix}tebakkimia
 • ${prefix}tebaklirik
 • ${prefix}tebaktebakan
 • ${prefix}tekateki
 • ${prefix}susunkata
 • ${prefix}tictactoe
 • ${prefix}delttt
 • ${prefix}casino
 • ${prefix}delcasino

*[ SEARCH MENU ]*
 • ${prefix}lirik
 • ${prefix}grupwa
 • ${prefix}pinterest
 • ${prefix}ytsearch


*[ BALANCE MENU ]*
 • ${prefix}topglobal
 • ${prefix}toplocal
 • ${prefix}buylimit
 • ${prefix}buyglimit
 • ${prefix}transfer
 • ${prefix}limit
 • ${prefix}balance

*[ STORAGE ]*
 • ${prefix}addstik
 • ${prefix}addvn
 • ${prefix}addimg
 • ${prefix}addvid
 • ${prefix}liststik
 • ${prefix}listvn
 • ${prefix}listimg
 • ${prefix}listvid
 
*[ BAILEYS ]*
 • ${prefix}fitnah
 • ${prefix}nowa
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd

*[ OWNERS MENU ]*
 • ${prefix}autoaipc
 • ${prefix}autoread
 • ${prefix}autobio
 • ${prefix}antidelete
 • ${prefix}antiviewonce
 • ${prefix}autorespond
 • ${prefix}anticall
 • ${prefix}autoblok212
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setppbot2
 • ${prefix}setppbot
 • ${prefix}broadcast
 • ${prefix}bcimg
 • ${prefix}bcstik
 • ${prefix}bcvn
 • ${prefix}bcvideo
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa

*[ ASUPAN MENU ]*
 • ${prefix}chika
 • ${prefix}delvira
 • ${prefix}ayu
 • ${prefix}bunga
 • ${prefix}aura
 • ${prefix}nisa
 • ${prefix}ziva
 • ${prefix}yana
 • ${prefix}viona
 • ${prefix}syania
 • ${prefix}riri
 • ${prefix}syifa
 • ${prefix}mama_gina
 • ${prefix}alcakenya
 • ${prefix}mangayutri
 • ${prefix}rikagusriani
 • ${prefix}asupan
 • ${prefix}bocil
 • ${prefix}geayubi
 • ${prefix}santuy
 • ${prefix}ukhty
 • ${prefix}syifa



`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521
`
}
