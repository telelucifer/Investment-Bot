/*CMD
  command: Get Funds 💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = "LilBro_BotDev";

if (user.username==admin){

let res = Libs.ResourcesLib.userRes("BTC");
res.add(10);
Bot.sendMessage(" Succes ");
}else{
Bot.sendMessage("Not The Admin 😒");
}
