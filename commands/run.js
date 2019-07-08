/*CMD
  command: run
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let res = Libs.ResourcesLib.userRes("daysOnline");
res.growth.add({
  value: 1 ,
  interval: 1 * 60 * 60 * 24,
});
