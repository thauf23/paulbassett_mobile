$(function(){
    //start

    const menuIcon = document.querySelector(".menu_icon");
    const mainMenu = document.querySelector(".main_menu");
    const bodyBackground = document.querySelector(".body_background");
    const oneDepth = document.querySelector(".one_depth");

    const runOut = $(".run_out");
    const twoDepth = $(".two_depth");

    //menu open
    menuIcon.addEventListener("click", function(){
        mainMenu.style.left = 0;
        bodyBackground.style.zIndex = 90;
    });
    
    //menu close
    bodyBackground.addEventListener("click", function(){
        mainMenu.style.left = "-50%";
        bodyBackground.style.zIndex = "-1";
    });

    //two depth open
    $(".see_depth").on("click", function(e){
        e.preventDefault();
        $(this).find(runOut).toggle();
        var moter = this.parentNode;
        $(moter).find(twoDepth).toggle();
    });
    //end
});