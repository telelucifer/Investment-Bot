/*CMD
  command: /paid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = params; 
let amount = User.getProperty("wdAmount");
let address = User.getProperty("walletBtc");

Bot.sendMessageToChatWithId(id, "The Admin Paid You're Withdrawal Of <wdAmount> BTC to Address <walletBtc>\n\nHappy Earnings 🎉");

//If You Have A Payment Channel
Api.sendMessage({ chat_id :"@BTCStackChannel" , text : "Withdrawal Paid 🎉 \n\nBy User @"+user.username+"\nAmount : "+amount.toFixed(8)+" BTC \n Payout Address : "+address});
