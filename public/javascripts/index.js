var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);

$("document").ready(() => {
    $(".p1").typed({
        strings: ["Nay là mồng 8 tháng 3 <br/> Chúc mừng ngày của chị xa em gần <br/> Đầu tiên sẽ giảm được cân <br/>Ngày càng eo ót đẹp thân đẹp hình <br/>Thứ 2 là sẽ thật xinh <br/>Tiếp là học tốt, thông minh, ngoan hiền <br/>Rồi sẽ kiếm được nhiều tiền <br/>Nhiều người hâm mộ như tiên giáng trần <br/>Chúc thêm sẽ có những lần <br/>Bỏ giày cao gót vì chân đã dài <br/>Sớm tìm hoàng tử lâu đài <br/>Tình duyên như í thật dài thật lâu..."],
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 2000,
        showCursor: true,
        loop: true
    });
    setTimeout(() => {
        $('#img1').css("visibility", "visible");
    }, 1500);
    setTimeout(() => {
        $('#img1').css("visibility", "visible");
    }, 1500);
    setTimeout(() => {
        $('#img2').css("visibility", "visible");
    }, 2000);
    setTimeout(() => {
        $('#img3').css("visibility", "visible");
    }, 3000);
    setTimeout(() => {
        $('#img4').css("visibility", "visible");
    }, 4000);
    setTimeout(() => {
        $('#img5').css("visibility", "visible");
    }, 5000);
    setTimeout(() => {
        $('#img6').css("visibility", "visible");
    }, 6000);
    setTimeout(() => {
        $('#img7').css("visibility", "visible");
    }, 7000);
    setTimeout(() => {
        $('#img8').css("visibility", "visible");
    }, 13000);
    setTimeout(() => {
        $('#img9').css("visibility", "visible");
    }, 13000);
    setTimeout(() => {
        $('#img10').css("visibility", "visible");
    }, 8000);
    setTimeout(() => {
        $('#img11').css("visibility", "visible");
    }, 15000);
    setTimeout(() => {
        $('#img12').css("visibility", "visible");
    }, 9000);
    setTimeout(() => {
        $('#img13').css("visibility", "visible");
    }, 9999);
    setTimeout(() => {
        $('#img14').css("visibility", "visible");
    }, 11000);
    setTimeout(() => {
        $('#img15').css("visibility", "visible");
    }, 12000);
    setTimeout(() => {
        $('#img16').css("visibility", "visible");
    }, 15000);
    $(".click").on({
        mouseover: function() {
            $('.text-first').css("visibility", "visible");
        },
        mouseout: function() {
            $('.text-first').css("visibility", "hidden");
        }
    });
});
