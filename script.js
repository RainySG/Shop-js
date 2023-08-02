const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

slide = (direction) => {

  direction === "next" ? translate -= translateAmount : translate += translateAmount;

  pages.forEach(
    pages => (pages.style.transform = `translateX(${translate}%)`)
  );
}

$(".product-colors span").click(function() {
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");
    $(".active").css("border-color", $(this).attr("data-color-sec"))
    $("body").css("background", $(this).attr("data-color-primary"));
    $(".content h2").css("color", $(this).attr("data-color-sec"));
    $(".content h3").css("color", $(this).attr("data-color-sec"));
    $(".container .imgBx").css("background", $(this).attr("data-color-sec"));
    $(".container .details button").css("background", $(this).attr("data-color-sec"));
    $(".imgBx img").attr('src', $(this).attr("data-pic"));
});