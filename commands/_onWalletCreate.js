/*CMD
  command: /onWalletCreate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.result;
Bot.sendMessage("➕ Welcome! Here you can start a new investment!\n\n💵 We offer a single Investment plan, able to offer you the best profit!\n\n➡ Our plan starts from 0.001 BTC\n\n⏱ Profit will be credited 20% every 24 hours, for 10 days: 20% daily!");
Bot.sendMessage("⚠ If you send less than 0.001 BTC, your deposit will be ignored!\n\n✅ Send the amount you want to invest to the following address:");
Bot.sendMessage("`"+wallet.address+"`");
// You can save wallet
User.setProperty("wallet", wallet.address, "string");
User.setProperty("label", wallet.label,"string");
