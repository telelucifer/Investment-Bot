/*CMD
  command: Support 📞
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send You're Question Or Problem And The Admin Will Reply Within 48 Hours *

If You Want to discontinue Do /cancel
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let reply = data.message;

if (reply=="/cancel"){
Bot.runCommand("/menu");
}else{
Bot.sendMessageToChatWithId(652588487 , "New Support Ticket Made 🎫\n\nBy User @"+user.username + " `"+user.telegramid+"`\n\nQuestion / Message is \n\n"+reply+"\n\nTo reply Please Do /reply ");
Bot.sendMessage(" Message Sent To Admin ");
}
