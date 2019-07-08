/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/menu");
}

if (user=="left"){
Bot.runCommand("/start");
}
