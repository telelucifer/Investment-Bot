/*CMD
  command: Broadcast 📣
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send You're Announcement 
  keyboard: 
  aliases: 
CMD*/

if (data.message=="/cancel"){
Bot.runCommand("/login");
}else{
Bot.sendMessageToAllPrivateChats("📣 Announcement From Admin 📣\n\n"+data.message);
Bot.sendMessage(" Announced ");
}
