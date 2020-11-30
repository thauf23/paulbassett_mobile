$(function(){
    //start

    const bannerImg = $(".banner_img");
    const aImg = $(".banner_img a");
    const numberSpan = $(".banner_number span");
    let m = 0;

    // ----------- a tag location ---------------------------------
    for(var i=0; i<aImg.length; i++){
        $(".banner_img a").eq(i).css({left: i*100+"%"});
        $('.box_img li').eq(i).css({
            left: i*72+'%'
        });
    }
    
    // ----------- banner move ---------------------------------
    numberSpan.eq(0).css({
        background: "rgba(255, 255, 255, 1)"
    });
    function infinite(){
        ++m;
        bannerImg.animate({
            left: -100*m+"%"
        },10);
        console.log(m);
        numberSpan.eq(m-1).css({
            background: "rgba(255, 255, 255, .5)"
        });
        numberSpan.eq(m).css({
            background: "rgba(255, 255, 255, 1)"
        });
        if(m > aImg.length-1){
            bannerImg.animate({left: 0});
            m = 0;
            numberSpan.eq(m).css({
                background: "rgba(255, 255, 255, 1)"
            });
        }
    }
    setInterval(infinite,4000);

    //end
});