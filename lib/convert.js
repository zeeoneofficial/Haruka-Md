const FormData = require("form-data");
const axios = require('axios');
const { default: Axios } = require('axios');
const fs = require("fs");const cheerio = require("cheerio");

function webp2mp4File(path) {
    return new Promise(async (resolve, reject) => {
	const BodyForm = new FormData()
	BodyForm.append('new-image', fs.createReadStream(path))
	BodyForm.append('new-image-url', '')
	await axios({
	    url: "https://s7.ezgif.com/webp-to-mp4",
	    method: "POST",
	    headers: BodyForm.getHeaders(),
	    data: BodyForm
	}).then(res => {
	    const $ = cheerio.load(res.data)
	    let File = $('#main > form').find('input[type=hidden]:nth-child(1)').attr('value')
	    let token = $('#main > form').find('input[type=hidden]:nth-child(2)').attr('value')
	    let Submit = $('#tool-submit-button').find('input').attr('value')
	    const Format = {
		file: File,
		token: token,
		convert: Submit
	    }
	    axios({
		url: "https://ezgif.com/webp-to-mp4/" + File,
		method: "POST",
		data: new URLSearchParams(Object.entries(Format)),
		headers: {
		    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		    "accept-language": "en-US,en;q=0.9,id;q=0.8",
		    "content-type": "application/x-www-form-urlencoded",
		    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""
		}
	    }).then(({ data, status}) => {
		const ch = cheerio.load(data)
		let link = ch('#output > p.outfile').find('video > source').attr('src')
		const result = {
		    status: status,
		    data: "https:" + link
		}
		resolve(result)
	    }).catch(reject)
	})
    })
}

exports.webp2mp4File = webp2mp4File
