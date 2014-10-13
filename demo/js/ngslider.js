    angular.module("tibooslider",[])
        .directive("slider",['$timeout',function($timeout){
            return{
                restrict: 'A',
                replace: true,
                template:"" +
                    "<div class='cc tibooslider' id='{{ config.id }}'>" +
                    "<ul class='cc' id='{{ config.ulid }}'>" +
                        "<li class='aa' ng-repeat='slide in config.li'>" +
                            "<img ng-src='{{ slide.src }}' />" +
                            "<p ng-if='slide.txt'>{{ slide.txt }}</p>" +
                        "</li>" +
                    "</ul>" +
                    "</div>",
                //templateUrl: 'slider.html'   (if you have localhost)
                link:function(scope,elem,attrs){
                    scope.config.ulid = scope.config.id + "ul";
                    $timeout(function(){
                        var slideid = "#" + scope.config.id;
                        $(slideid).unslider({});
                    })

                }
            }
        }])


