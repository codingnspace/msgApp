angular.module("MessageApp").controller("ReadMessageController", function($http, MessageFactory){
   var vm = this;

vm.readMessages = function(){
   MessageFactory.readMessages().then(function(messages){
      vm.messages = messages;
   });
};
vm.readMessages();
//set equal to a variable so that you can cencel $interval(vm.readMessages,3000, [cycle length])
setInterval(function(){vm.readMessages();}, 3000);
})
