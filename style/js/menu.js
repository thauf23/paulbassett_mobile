$(function(){
    //start

    const menuIcon = document.querySelector(".menu_icon");
    const mainMenu = document.querySelector(".main_menu");
    const bodyBackground = document.querySelector(".body_background");

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

    
    // console.log("a");
    //end
});