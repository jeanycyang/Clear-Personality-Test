$("#start-btn").on("click",function(){$("html, body").delay(150).animate({scrollTop:$("#my-test").offset().top},500)}),angular.module("MyTestApp",[]).controller("TestCtrl",function($http){var ctrl=this;$http.get("./js/data/questions.json").then(function(res){ctrl.questions=res.data,ctrl.q=ctrl.questions[0],ctrl.goToDst=function(dst){"string"==typeof dst?(ctrl.getResult(dst),$(".ui.modal").modal({onApprove:function(){$("html, body").delay(500).animate({scrollTop:$("#info").offset().top},500)}}).modal("show")):"number"==typeof dst&&(ctrl.q=ctrl.questions[dst-1])}}),$http.get("./js/data/types.json").then(function(res){ctrl.types=res.data,console.log(ctrl.types),ctrl.getResult=function(type){ctrl.result=ctrl.types[type]}})});