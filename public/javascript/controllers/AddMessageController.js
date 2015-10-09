angular.module('MessageApp').controller('AddMessageController', function($http, $state, MessageFactory) {
var vm = this;
vm.messages = {};

vm.messages.bey_img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKJzH9KH7aN9NK-bJxO8abM8MQqsw0475ioFaSy8a3Rs9eBffA0A";
vm.messages.kel_img="http://beautifullysmagazine.com/wp-content/uploads/2013/12/KellyRowland2.jpg";
vm.messages.mic_img ="http://beautifullysmagazine.com/wp-content/uploads/2013/12/KellyRowland2.jpg";
vm.messages.bey_name = "Beyonce";
vm.messages.kel_name = "Kelly";
vm.messages.mic_name = "Michelle";
vm.messages.bey_col = "#A8CABA";
vm.messages.kel_col = "#CAD7B2";
vm.messages.mic_col = "#EBE3AA";

var bey = false;
var kel = false;
var mic = false;

vm.addMessage = function(){
   MessageFactory.addMessage(vm.messages);
console.log("YAYYY!");


   }

vm.checkUser = function(){

  MessageFactory.checkUser(vm.messages);
  console.log("Check User function ran");
  // var x = vm.messages;

      
}
});
