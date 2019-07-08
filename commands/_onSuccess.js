/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));
let res = Libs.ResourcesLib.userRes("BTC");
//Bot.sendMessage(inspect(options)); 
let result = options.body.result;
let amount = User.getProperty("wdAmount");
let address = User.getProperty("walletBtc");
Bot.sendMessage("Withdrawal Request Sent ✅ \n\nThe Admin Only Needs To Confirm It With One Click \n\nRequest ID : \n"+result.id+"\nYoure Remaining Balance : "+res.value().toFixed(8));

Bot.sendMessageToChatWithId(652588487, "New Withdrawal ‼‼‼\n\nBy User : [@"+user.username+" ]`"+user.telegramid+"`\n\nAmount : <wdAmount>\n\n Address : `<walletBtc>`\n\nPlease Do /paid "+user.telegramid+" \nIf you Have Paid the User");
Api.sendMessage({
chat_id : "@BTCStackChannel" , text : "Withdrawal Request Sent ✅ \n\nThe Admin Only Needs To Confirm It With One Click \n\nRequest ID : \n"+result.id+"\nBy User : @"+user.username+"\n\nAmount "+amount+"\n\nAddress : "+address})

