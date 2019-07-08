/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Keys Set-Up 
  keyboard: 
  aliases: 
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("2C8104C50237E5E167e12B885d90daCFa3b4C1710FBC25668bE1EBA2236DE63b");
Libs.CoinPayments.setPublicKey('6d04f577983f2cf4255ea27c3be8bfb3ecebfbf38b7de9ffb3fee1455dab6f6f');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('CFQZWrNaG8qSaWk1g_smHmd2GEy-Bavo3A6TQyux');
