"use strict";
const { color, bgcolor } = require('./color');
const { isTicTacToe, getPosTic, KeisiSemua, cekIsi, cekTicTac } = require('./tictactoe');

module.exports = async (chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance) => {
	try {
        // TicTacToe
        if (isTicTacToe(from, tictactoe)){
            let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            let posi = tictactoe[getPosTic(from, tictactoe)]
            let anu = posi.TicTacToe
            if (posi.status === null){
                if (sender === posi.ditantang){
                    if (chats.toLowerCase() === 'y'){
                        mentions(`@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.penantang.split('@')[0]}`, [posi.penantang, posi.ditantang], false)
                        tictactoe[getPosTic(from, tictactoe)].status = true 
                    } else if (chats.toLowerCase() === 'n'){
                        mentions(`Yah @${posi.ditantang.split('@')[0]} menolak\nKirim ${prefix}titactoe @tag`, [posi.ditantang], false)
                        tictactoe.splice(getPosTic(from, tictactoe), 1)
                    }
                }
            } else if (posi.status === true){
                if (sender === posi.penantang){
                    for (let i of nomor){
                        if (Number(chats) === i){
                            if (cekIsi(Number(chats) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
                            tictactoe[getPosTic(from, tictactoe)].TicTacToe[Number(chats) - 1] = '❌'
                            if (cekTicTac(tictactoe[getPosTic(from, tictactoe)].TicTacToe)){
                                mentions(`@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                addBalance(posi.penantang, posi.hadiah, balance)
								tictactoe.splice(getPosTic(from, tictactoe), 1)
                            } else if (KeisiSemua(anu)) {
                                mentions(`Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                tictactoe.splice(getPosTic(from, tictactoe), 1)
                            } else {
                                mentions(`@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.ditantang.split('@')[0]}`, [posi.penantang, posi.ditantang], false)
                                tictactoe[getPosTic(from, tictactoe)].status = false
                                 
                            }
                        }
                    }
                }
            } else if (posi.status === false){
                if (sender === posi.ditantang){
                    for (let i of nomor){
                        if (Number(chats) === i){
                            if (cekIsi(Number(chats) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
                            tictactoe[getPosTic(from, tictactoe)].TicTacToe[Number(chats) - 1] = '⭕' 
                            if (cekTicTac(anu)){
                                mentions(`@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                addBalance(posi.ditantang, posi.hadiah, balance)
								tictactoe.splice(getPosTic(from, tictactoe), 1)
                            } else if (KeisiSemua(anu)) {
                                mentions(`Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                tictactoe.splice(getPosTic(from, tictactoe), 1)
                            }else {
                                mentions(`@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Giliran @${posi.penantang.split('@')[0]}`, [posi.penantang, posi.ditantang], false)
                                tictactoe[getPosTic(from, tictactoe)].status = true
                            }
                        }
                    }
                }
            }
        }
    } catch (err){
        console.log(color('[ERROR]', 'red'), err)
    }
}