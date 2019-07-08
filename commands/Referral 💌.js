/*CMD
  command: Referral 💌
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let reflink=Libs.ReferralLib.currentUser.getRefLink("BTCStack_Bot","Bot");
let lib = Libs.ReferralLib
refList = lib.currentUser.refList.get();
Bot.sendMessage("Get 5% Bonus Every Time You're Referral Do a Investment\n\nReflink 👇\n"+reflink+"\n\nReferrals : "+refList.length+ " 👤");
