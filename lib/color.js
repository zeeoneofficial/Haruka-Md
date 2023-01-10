const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const harukaLog = (text, color) => {
	return !color ? chalk.greenBright('[ HARUKA ] ') + chalk.magentaBright(text) : chalk.greenBright('[ HARUKA ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
    harukaLog
}
