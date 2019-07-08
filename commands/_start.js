/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
*📣 Must Join The Channel Below 📣*
@GlobeCaster
  ANSWER
  keyboard: Joined 🔐
  aliases: 
CMD*/

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
let refUserBonus = Libs.ResourcesLib.anotherUserRes("doge", refUser.telegramid);
Bot.sendMessageToChatWithId(refUser.chatId, "🎉 You just attract new user: @" + user.username+"\n_You Will Receive 5% Every Time he Invest_");
}

function doAlreadyAttracted(){
  Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
