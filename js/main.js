//-----------Menu--------------//
    console.log($("section"));
$(".menu").click(function() {
    let target = "#"+this.dataset.target;
        if ($(target).hasClass("closed")) {
            if (!$("main").hasClass("pages")) {
                $("main").addClass("pages");
                $("header").addClass("pages");
            }
            $(".open").addClass("closed");
            $(".open").removeClass("open");
            $(target).addClass("open");
            $(target).removeClass("closed");
        }
});

// --------Click on closed sections---------- //
// $("section").click(function() {
//     console.log("click");
    
//         if ($(this).hasClass("closed")) {
//             if (!$("main").hasClass("pages")) {
//                 $("main").addClass("pages");
//                 $("header").addClass("pages");
//             }
//             $(".open").addClass("closed");
//             $(".open").removeClass("open");
//             $(this).addClass("open");
//             $(this).removeClass("closed");
//         }
// });