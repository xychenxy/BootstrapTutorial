/**
 * Created by huiliang on 2018/12/9.
 */
$(function () {
//    当文档加载完成才执行

   function resize() {
       var windowWidth = $(window).width();

       var isSmallScreen = windowWidth < 768;

       $('#main_ad > .carousel-inner > .item').each(function (i,item) {
           var $item = $(item);
           var imgSrc =
               isSmallScreen ? $item.data('img-sm'):$item.data('img-lg');




           $item.css('backgroundImage','url("'+imgSrc+'")');
       //    小图的时候，往div中添加一个img；大图的时候， 使用背景

           if(isSmallScreen){
               $item.html('<img src="'+imgSrc+'" alt=""/>');
           }
           else{
               $item.empty();
           }



       })
   }

   $(window).on('resize',resize).trigger('resize');

   $('[data-toggle="tooltip"]').tooltip();

   var $ulContainer = $('.nav-tabs');

   var width = 30;


    $ulContainer.children().each(function (index, element) {
        width += element.clientWidth;
    })

    $ulContainer.css('width',width);

})
