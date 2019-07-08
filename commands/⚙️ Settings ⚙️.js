/*CMD
  command: ⚙️ Settings ⚙️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "Set Addresses 📝" , command : "on_address"}],
]
let doge = User.getProperty("walletBtc");
let ref = User.getProperty("referrer");

if (ref ==undefined){
if (doge ==undefined){
Bot.sendInlineKeyboard(button , "You Didn't Set You're Address Yet\nClick The Button Below To set You're Address");
}else{
Bot.sendInlineKeyboard(button , "You're Settings ⚙️ \n\n🆔 Id : "+user.telegramid+"\nName 👤 : @" + user.username + " ("+user.first_name+")"+"\nReferral From : @"+ref+"\n\nAdress BTC 💰:\n"+doge);
}
}else{
if (doge ==undefined){
Bot.sendInlineKeyboard(button , "You Didn't Set You're Address Yet\nClick The Button Below To set You're Address");
}else{
Bot.sendInlineKeyboard(button , "You're Settings ⚙️ \n\n🆔 Id : "+user.telegramid+"\nName 👤 : @" + user.username + " ("+user.first_name+")"+"\nReferral From : @"+ref+"\n\nAdress BTC 💰:\n"+doge);
}
}
