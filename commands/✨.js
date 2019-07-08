/*CMD
  command: ✨
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options)); 
let user = User.getProperty("status");
if (user=="member" | user =="admin" | user=="creator"){
let res = Libs.ResourcesLib.userRes("BTC");
Bot.sendKeyboard("✨ Balance : "+res.value().toFixed(8)+" BTC\n➕ Invest ➕,➖ Withdraw ➖ ,\n ⚙️ Settings ⚙️, Info ⁉,\nSupport 📞,Referral 💌","*✨ Balance : *"+res.value().toFixed(8)+" BTC ");
}

if (user=="left"){
Bot.runCommand("/start");
}
