/*CMD
  command: Send Funds ➕
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Users ID
  keyboard: 
  aliases: 
CMD*/

if (data.message=="/cancel"){
Bot.runCommand("/login");
}else{
User.setProperty("userid" , data.message , "integer");
Bot.runCommand("on_send");
}
