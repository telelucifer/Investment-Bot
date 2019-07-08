/*CMD
  command: /reply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send The User's Telegram ID. 

Do /cancel to Discontinue
  ANSWER
  keyboard: 
  aliases: 
CMD*/



if (data.message=="/cancel"){
Bot.runCommand("/menu");
}else{
Bot.runCommand("on_reply");
User.setProperty("replyid", data.message, "integer");
}
