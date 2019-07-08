/*CMD
  command: /onIncome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options.address;
let currency = options.currency;
let amount = options.amount;

let fiat_amount = options.fiat_amount;
let fiat_currency = options.fiat_coin;

let fee = options.fee;

let txn_id = options.txn_id

// see another fields by
//Bot.sendMessage(inspect(options));

Bot.sendMessage(
   "*Deposit Received 📥*" +
   "\n\nReceiving Address :\n`"+ wallet + "`" +
   "\n\n*Amount Received 💳*:\n" +
amount + " " + currency + " (" + fiat_amount + " " + fiat_currency + ")" +
   "\n*Transaction Fee Was *: " + fee +
   "\n\nTxnID: "  + "\n["+txn_id+"]"+"(https://www.blockchain.com/btc/tx/"+txn_id+")",{disable_web_page_preview: true}
);

let res = Libs.ResourcesLib.userRes("miner");
res.set(0);
res.add(amount);
Bot.runCommand("Miner");
Bot.sendMessage("✅ Investment Started\nDuration: 10 days\nDaily: 20% \nAmount: " + amount.toFixed(8)); 
Api.sendMessage({ chat_id : "@BTCStackChannel" , text : "*Deposit Received 📥*" +
   "\n\nReceiving Address :\n`"+ wallet + "`" +
   "\n\n*Amount Received 💳*:\n" +
amount + " " + currency + " (" + fiat_amount + " " + fiat_currency + ")" +
   "\n*Transaction Fee Was *: " + fee +
   "\n\nTxnID: " + "\n["+txn_id+"]"+"(https://www.blockchain.com/btc/tx/"+txn_id+")"+"\n\nBy User : @"+user.username + "("+user.first_name+")", parse_mode : "Markdown" , disable_web_page_preview: true
});
let referrer = Libs.ReferralLib.currentUser.attractedByUser();

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("BTC", referrer.telegramid);

  let refcom = amount  * 0.05;

  referrerRes.add(refcom);
  Bot.sendMessageToChatWithId(referrer.telegramid, "You got 5% commission from referral' investment, Check your balance");

  }

let total = Bot.getProperty("total");
let add = total+amount; 
Bot.setProperty("total" , add, "integer");

