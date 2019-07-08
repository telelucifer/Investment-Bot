/*CMD
  command: ➖ Withdraw ➖
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("BTC");
User.setProperty("balance" , res.value().toFixed(8) , "integer");
Bot.runCommand("on_withdraw");

