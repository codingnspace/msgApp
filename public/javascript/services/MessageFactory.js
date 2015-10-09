angular.module("MessageApp").factory('MessageFactory', function($http, $q){
var o = {};

o.addMessage = function(newMessage){
   var q = $q.defer();
   $http.post("https://dcmessageapp.firebaseio.com/.json", newMessage).success(function(){
      q.resolve();
   });
   return q.promise;
};

// o.checkUser = function(x){
//
//         if(document.getElementById('beyN').checked) {
//             document.getElementById('bey').style.display="block";
//             console.log("bey is true");
//             //Found myValue!
//         }
//
// }
 //  if(document.getElementById('bey').checked) {
 //      bey = true;
 //      console.log("bey was checked");
 //  }
 // if(vm.messages.prop === "Kelly") {
 //      var kel = true;
 //  }
 //   if(vm.messages.prop === "Michelle") {
 //      var mic = true;
 //  }
// };

o.readMessages = function(){
   var q = $q.defer();
   $http.get("https://dcmessageapp.firebaseio.com/.json").success(function(res){
      var messages = [];
      for(var prop in res){
         res[prop]._id = prop;
         messages.push(res[prop]);
      }
      q.resolve(messages);
   });
   return q.promise;

   var objDiv = document.getElementById("newMsg");
objDiv.scrollTop = objDiv.scrollHeight;
}


return o;
});





//
// o.getPosts = function(){
//       var q = $q.defer();
//       $http.get("https://artofascent-blog.firebaseio.com/.json").success(function(res){
//          var posts = [];
//          for(var prop in res){
//             res[prop]._id = prop;
//             posts.push(res[prop]);
//          }
//          q.resolves(posts);
//       })
//       return q.promise;
//    }
//
//    o.savePost = function(p) {
//      var q = $q.defer();
//      $http.post('https://artofascent-blog.firebaseio.com/.json', p).success(function(){
//        q.resolve();
//      });
//      return q.promise;
//    };
//
//
//    o.deletePost = function(id){
//       $http.delete("https://artofascent-blog.firebaseio.com/" + id + "/.json").success(function(){
//          o.getPosts();
//          });
//       }
//       return o;
//
// })
