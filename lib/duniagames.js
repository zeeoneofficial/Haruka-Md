const fs = require("fs");
const axios = require("axios");

function getVal(dm, game) {
    let list = JSON.parse(fs.readFileSync("./lib/topup/duniagames.json"));
    if (!list[game]) return new Error("no game for '" + game + "'");
    return new URLSearchParams(list[game][dm]).toString();
}

const getCookie = async(...args) => (await axios(...args)).headers["set-cookie"];

let baseURL = "https://duniagames.co.id"
async function topUp(userId, zoneId, diamond, phone, game) {
    if (!userId || !diamond || !phone || !game) return new Error();
    let cookie = await getCookie(baseURL);
    if (!cookie) return new Error("empty cookies");
    let res = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store?${await getVal(diamond, game.toUpperCase())}&gameId=${userId}&product_ref=REG&product_ref_denom=AE`, null, {
        "headers": { 
            "cookie": cookie.join(" "),
            "origin": baseURL,
            "referer": baseURL
        }
    });
    if (res.status != 200) throw new Error(res.statusText);
    let res2 = await axios.post(`https://api.duniagames.co.id/api/transaction/v1/top-up/transaction/store?inquiryId=${res.data.data.inquiryId}&phoneNumber=${phone}&transactionId=${res.data.data.transactionId}`, null, {
        "headers": { 
            "cookie": cookie.join(" "),
            "origin": baseURL,
            "referer": baseURL
        }
    });
    if (res2.status != 200) throw new Error(res2.statusText);
    return res2.data;
}

// export default "mau ngapain om"
module.exports = { topUp }