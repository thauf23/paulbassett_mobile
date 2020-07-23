$(function(){
    //start

    const bannerImg = $(".banner_img");
    const aImg = $(".banner_img a");

    // ----------- a tag location ---------------------------------
    for(var i=0; i<aImg.length; i++){
        $(".banner_img a").eq(i).css({left: i*100+"%"});
        $('.box_img li').eq(i).css({
            left: i*72+'%'
        });
    }

    // ----------- a tag move ---------------------------------
    let m = 0;
    function infinite(){
        ++m;
        bannerImg.animate({
            left: -100*m+"%"
        },20);
        if(m > aImg.length-2){
            bannerImg.animate({left: 0});
            m = 0;
        }
    }
    setInterval(infinite,5000);

    // ----------- banner number move ---------------------------------


    //end
});