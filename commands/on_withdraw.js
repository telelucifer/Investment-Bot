/*CMD
  command: on_withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📤 How many Bitcoin you want to withdraw?

Minimum: 0.001 BTC
Maximum: <balance>
_Maximum amount corresponds to your balance_

➡ Send now the amount of  you want to withdraw
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("BTC");
var reply = data.message;
let amount = parseFloat(reply);
if (reply=="/cancel"){
Bot.runCommand("/menu");
}else{
if (res.value<reply | reply<0.001){
Bot.sendMessage("Please Withdraw Within You're Balance And the Minimum Withdraw of 0.001 BTC ");
}else{
User.setProperty("wdAmount" , amount, "integer");
Bot.runCommand("/on_withdraw");
}
}

