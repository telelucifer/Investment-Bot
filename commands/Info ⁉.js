/*CMD
  command: Info ⁉
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let total = Bot.getProperty("total");
var st = data.statistics;
let withdrawn = Bot.getProperty("totalWithdrawn");
let res = Libs.ResourcesLib.userRes("daysOnline");
Bot.sendMessage("*Total ➕ Investment ➕ : *\n"+total.toFixed(8)+" BTC\n\n*Total ➖ Withdrawn ➖ : *\n"+withdrawn.toFixed(8)+" BTC\n\n*Total 👥 User's 👥 : *\n"+st.user_chats_count+" User's\n\n*Days 📆 Online 📆 : *\n"+res.value()+" Days\n\nChat Group 💬 : @BTCStackRoom\n\nPayment Group 📮 : [@BTCStackChannel]");
