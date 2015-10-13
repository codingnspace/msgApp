angular.module('MessageApp').controller('AddMessageController', function($http, $state, MessageFactory) {
var vm = this;
vm.messages = {};

// vm.messages.bey_img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKJzH9KH7aN9NK-bJxO8abM8MQqsw0475ioFaSy8a3Rs9eBffA0A";
vm.messages.bey_name = "Beyonce";
vm.messages.kel_name = "Kelly";
vm.messages.mic_name = "Michelle";


vm.addMessage = function(){
   MessageFactory.addMessage(vm.messages);
console.log("YAYYY!");


   }

vm.checkUser = function(){
  var e = document.getElementById("nameOpt");
  if(e.options[e.selectedIndex].value === "Beyonce") {
      vm.messages.avi = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKJzH9KH7aN9NK-bJxO8abM8MQqsw0475ioFaSy8a3Rs9eBffA0A";
      vm.messages.bcol ="#A8CABA";
  }
  if(e.options[e.selectedIndex].value === "Kelly") {
      vm.messages.avi ="http://beautifullysmagazine.com/wp-content/uploads/2013/12/KellyRowland2.jpg";
      vm.messages.bcol ="#CAD7B2";
  }
  if(e.options[e.selectedIndex].value === "Michelle") {
      vm.messages.avi = "http://i.imgur.com/Om2JR.jpg";
      vm.messages.bcol ="#EBE3AA";
  }
  // MessageFactory.checkUser(vm.messages);
  console.log("Check User function ran");
}
  // var x = vm.messages;

      //   if(document.getElementById('bey').checked) {
      //       bey = true;
      //       console.log("bey was checked");
      //   }
      //  if(vm.messages.prop === "Kelly") {
      //       var kel = true;
      //   }
      //    if(vm.messages.prop === "Michelle") {
      //       var mic = true;
      //   }

});
