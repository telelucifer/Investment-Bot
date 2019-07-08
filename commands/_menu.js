/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: back 🔙
CMD*/

//Bot.sendMessage(inspect(options)); 


let res = Libs.ResourcesLib.userRes("BTC");
Bot.sendKeyboard("✨ Balance : "+res.value().toFixed(8)+" BTC\n➕ Invest ➕,➖ Withdraw ➖ ,\n ⚙️ Settings ⚙️, Info ⁉,\nSupport 📞,Referral 💌","*🏘 Main Menu*");
