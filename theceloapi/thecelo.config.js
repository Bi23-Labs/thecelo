//
const redis_port = 6379
const redis_host = 'thecelo.com'
const redis_password = 'Rd*729knRF&^792U'//pwd = 'REdis*&023NETua';//175
//
const telegram_host = 'https://api.telegram.org';
const telegram_bot_thecelo = 'bot1412461894:AAHqYo_mqsREa7wACPdn2HkBBzWNGSHJjn0';
const telegram_bot_thecelo_groupchat_id = '-442047556';
const discord_webhook_url = 'https://discord.com/api/webhooks/793418895435235329/fA8E6GIpRMG37vIQvhNyrBvvMHEUPGZTTkXmiRTYHlykElJdcy92XC-ZJg0bSM35Ewvz';
const discord_webhook_celo_url = 'https://discord.com/api/webhooks/799424342093856798/cDNPOEVFVGiX7z8bvHOGq7KuChix2hR9_mfQcGDSjbmq2UVXW23W1mSDqKhg3kB4Piol';
//
let items = {
  redis_port,redis_host,redis_password,
  telegram_host,telegram_bot_thecelo,telegram_bot_thecelo_groupchat_id,
  discord_webhook_url,discord_webhook_celo_url
}
module.exports = {items}
