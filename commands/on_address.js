/*CMD
  command: on_address
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Send You're BTC Address
  keyboard: 
  aliases: 
CMD*/

let reply = data.message;

User.setProperty("walletBtc" , reply, "string");

Bot.sendMessage(" You're BTC Address Set To \n*"+reply+"*");
