/*CMD
  command: /on_withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(User.getProperty("wdAmount"));
let wallet = User.getProperty("walletBtc");
let res = Libs.ResourcesLib.userRes("BTC");
res.remove(amount)
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"btc",
            address: wallet,
//if you want auto confirm Please erase the //Below
           //auto_confirm : 1
},
  onSuccess: '/onSuccess'
});
