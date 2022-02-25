(document).ready(function(){
    (window).scroll(function(){
         if(this.scrollY > 20){
              ('.navbar').addClass("sticky");
              (console.log("Divine has finished me"))
         }else{
               $('.navbar').removeClass("sticky");
        }

    })
});