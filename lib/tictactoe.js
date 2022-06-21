exports.isTicTacToe = (from, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === from) {
            status = true
        }
    })
    return status
}

exports.getPosTic = (from, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === from) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

exports.KeisiSemua = (tic) => {
    let status = true
    for (let i of tic){
        if (i !== '❌' && i !== '⭕'){
            status = false
        }
    }
    return status
}

exports.cekIsi = (nomor, tic) => {
    let status = false
    if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
        status = true
    }
    return status
}

exports.cekTicTac = (tic) => {
    let status = false
    if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
        status = true
    } else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
        status = true
    } else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
        status = true
    } else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
        status = true
    } else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
        status = true
    } else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
        status = true
    } else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
        status = true
    } else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
        status = true
    }
    return status 
}

//console.log(KeisiSemua(tixi))