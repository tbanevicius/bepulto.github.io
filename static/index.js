$().ready(function() {
   console.log("Hello");
   var el = $(".bepulto");
   var el2 = $(".stay_tuned")
   var img = $(".img");
   var btn = $(".butt_div");
   setTimeout(function(){
      el2.show('slow');
      btn.show('slow');
    }, 4000);
});
