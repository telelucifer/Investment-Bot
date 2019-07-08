/*CMD
  command: Miner
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("miner");
let amount = User.getProperty("miner");
amount = parseFloat(amount);
//You Can set the Growth Percentage By Changing the Amount to be Multiplied to "amount"
let hourly = res.value()*0.008333333;
let daily = res.value()*0.20;
let profit = res.value()*2;
//Max value: 100
let secs_in_hour = 1 * 60 * 60*24;
res.growth.add({
  value:daily,
  interval:secs_in_hour,
  max:profit
});
Bot.sendMessage("*Miner Started For BTC 🎉🎉 \n Hourly Earnings : *"+hourly.toFixed(8)+"\n\n*Daily Earnings : *"+daily.toFixed(8)+"\n\n*Balance After 10 Days :*"+profit.toFixed(8)+"\n\n*Investment Will Be Only Active For 10 Days *")
