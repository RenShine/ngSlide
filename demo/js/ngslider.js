    angular.module("ngSlide",[])
        .directive("slider",['$timeout',function($timeout){
            return{
                restrict: 'A',
                replace: true,
                scope:{
                    id: '@id',
                    effect: '@effect',
                    delayTime: "@delayTime",
                    interTime: '@interTime',
                    defaultIndex: '@defaultIndex',
                    titCell: '@titCell',
                    trigger: '@trigger',
                    scroll: '@scroll',
                    vis: '@vis',
                    titOnClassName: '@titOnClassName',
                    autoPage: '@autoPage',
                    prevCell: '@prevCell',
                    nextCell: '@nextCell'
                },
                transclude:true,
                template:"" +
                    "<div class='cc tibooslider'>" +
                    '<ul class="cc" ng-transclude id="{{ ulid }}"></ul>' +
                    "</div>",
                //templateUrl: 'slider.html'   (if you have localhost)
                link:function(scope,elem,attrs){
                        scope.ulid = scope.id + "ul";
                        var id = "#" + scope.id;
                        var ulid = id + "ul",
                            autoPlay = scope.autoPlay || true,
                            effect = scope.effect || "fade",
                            delayTime = scope.delayTime || 500,
                            interTime = scope.interTime || 2500,
                            defaultIndex = scope.defaultIndex || 0,
                            titCell = scope.titCell || ".hd li",
                            trigger = scope.trigger || "mouseover",
                            scroll = scope.scroll || 1,
                            vis = scope.vis || 1,
                            titOnClassName = titOnClassName || "on",
                            autoPage = autoPage || false,
                            prevCell = ".prev",
                            nextCell = ".next";
                        $timeout(function(){
                            $(id).slide({autoPlay:autoPlay,mainCell:ulid});
                            $timeout.cancel();
                        })



                }
            }
        }])



