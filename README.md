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


