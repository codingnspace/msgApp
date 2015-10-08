angular.module("MessageApp", ['ui.router']).config(function($stateProvider,
$urlRouterProvider){
  $stateProvider.state("Home", {
    url: "/",
    templateUrl: '/template/home.html'
  })
$urlRouterProvider.otherwise("/");
});
