$().ready(function() {
   console.log("Hello");
   var el = $(".bepulto");
   var el2 = $(".stay_tuned")
   var img = $(".img");
   setTimeout(function(){
      el2.show('slow');
    }, 4000);
});
