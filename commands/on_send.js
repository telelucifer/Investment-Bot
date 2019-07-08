/*CMD
  command: on_send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send The Amount You Want to Transfer 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("userid");
let amount = parseFloat(data.message);

let userRes = Libs.ResourcesLib.anotherUserRes("BTC" , id); 
userRes.add(amount); 
Bot.sendMessageToChatWithId(id, "The Admin Just Gaved You "+amount+" BTC");
Bot.sendMessage(" _Success Check The Users Balance Now_");

