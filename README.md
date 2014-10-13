ngSlide
=======

#基于angularJs和scss制作的幻灯组件

###使用方法

####HTML部分：

    <div slider controller=‘yourcon’></div>

####js部分：
    <script src="js/ngslider.js"></script>
    <script>
        angular.module("app",['tibooslider'])
                .controller("appcon",function($scope){
                    $scope.config = {autoPlay:'true',id: "tibooslider"};
                    $scope.config.li = [
                        {src:"http://img0.bdstatic.com/img/image/shouye/mxlss-11768371880.jpg",txt:"你猜猜看啊"},
                        {src:"http://img0.bdstatic.com/img/image/shouye/mxlss-11768371880.jpg"},
                        {src:"http://img0.bdstatic.com/img/image/shouye/mxlss-11768371880.jpg"},
                        {src:"http://img0.bdstatic.com/img/image/shouye/mxlss-11768371880.jpg"},
                    ];
                });
    </script>
