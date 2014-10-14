ngSlide
=======

#基于angularJs和scss制作的幻灯组件

###包依赖
    <script src='js/jquery.js'>
    <script src='js/angular.js'>
    <script src='js/slider.js'>
###使用方法
    <div slider controller='yourcon' id='plugnid'>
        <li>
            <img src="imagesrc" alt="">
        </li>
        <li>
            <img src="imagesrc" alt="">
        </li>
        <li>
            <img src="imagesrc" alt="">
        </li>
        <li>
            <img src="imagesrc" alt="">
        </li>
    </div>
###SCSS调用
    @import "rowimg.scss";
    #plugnid{
      @include tibooslider($colpadding,$rowpadding,$slidewidth,$slideheight,$shadow,$font);
    } //$colpadding:列间距，$rowpadding:行间距,$slidewidth:幻灯宽度，$slideheight:幻灯高度,$shadow:是否开启底部阴影,$font:字体


###配置方法 例：
    <div slider controller='youcon' id='plugnid' prev='.prev' autoPlay='true'>

###配置选项:
    effect : "fade", //效果 || fade：渐显； || top：上滚动；|| left：左滚动；|| topLoop：上循环滚动；|| leftLoop：左循环滚动；|| topMarquee：上无缝循环滚动；|| leftMarquee：左无缝循环滚动；
    autoPlay:false, //自动运行
    delayTime : 500, //效果持续时间
    interTime : 2500,//自动运行间隔。当effect为无缝滚动的时候，相当于运行速度。
    defaultIndex : 0,//默认的当前位置索引。0是第一个
    titCell:".hd li",//导航元素
    trigger: "mouseover",//触发方式 || mouseover：鼠标移过触发；|| click：鼠标点击触发；
    scroll:1,//每次滚动个数。
    vis:1,//visible，可视范围个数，当内容个数少于可视个数的时候，不执行效果。
    titOnClassName:"on",//当前位置自动增加的class名称
    autoPage:false,//系统自动分页，当为true时，titCell则为导航元素父层对象，同时系统会在titCell里面自动插入分页li元素(1.2版本新增)
    prevCell:".prev",//前一个按钮元素。
    nextCell:".next"//后一个按钮元素。