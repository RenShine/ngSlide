    angular.module("ngSlide",[])
        .directive("slider",['$timeout',function($timeout){
            return{
                restrict: 'A',
                replace: true,
                scope:{
                    id: '@id'
                },
                transclude:true,
                template:"" +
                    "<div class='cc tibooslider'>" +
                    "<ul class='cc' ng-transclude>" +

                    "</ul>" +
                    "</div>",
                link:function(scope,elem,attrs){

                          var id = "#" + scope.id;
                          $(id).unslider({});


                }
            }
        }])


