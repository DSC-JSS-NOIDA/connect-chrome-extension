// content.js
var htp = "http://210.212.85.155";
var flag = 0;
$(document).ready(function(){
    notices();

    $(".button").click(function() {
        // $(".sidebar").toggle();
        $(".sidebar").css({"left":"0px"});
        if($(".sidebar-layer").hasClass("show"))
        {
            $(".sidebar-layer").hide();
            $(".sidebar").css({"left": "-180px"}, function() {
                $(".sidebar-icon img").hide();
                $(".sidebar-name p").hide();
            });
            $(".sidebar-layer").removeClass("show");
        }
        else
        {
            $(".sidebar-layer").show();
            $(".sidebar-icon img").show();
            $(".sidebar-name p").show();
            $(".sidebar-layer").addClass("show");
        }
    });

    $(".list-group-item").click(function() {
        console.log(this.id);
        $(".notices div").remove();
        $(".new-notice div p").remove();
        $(".list-group-item").removeClass("active");
        $(this).addClass("active");
        if(this.id == "notices")
        {
            flag = 0;
            notices();
            $(".button").click();
        }
        else
        {
            flag = 1;
            college();
            $(".button").click();
        }
    })

    function college() {
        $(".new-notice div").append('<p><i class="fa fa-university"></i> &nbsp;New in College</p>');
        $(".notices").append($("<div class='col-sm-12 text-center'></div>").append($("<img class='preloader' src='assets/connect.gif'>")));
    var delay=1500; //1.5 second
    setTimeout(function() {
        $.get("http://210.212.85.155/", function(data, status){
            if(status == "success" && flag == 1) {
                $(".notices div").remove();
                $(".notices img").remove();
                var content = $("li.pad-list", data);
                $.each(content, function( index, value ) {
                    if(index >= 5)
                    {
                        // console.log(value);
                        if(index%2!=0)
                            var col = $("<div></div>").addClass("col-sm-12 odd notice-data");
                        else
                            var col = $("<div></div>").addClass("col-sm-12 notice-data");
                        var notice = $("div.bold-light", value).text();
                        var file = $("a", value).attr("href");
                        console.log(file);
                        var t = $("<p></p>").text(notice);
                        var download = $("<span class='download pull-right'><a href='"+htp+file+"' target='_blank'><i class='fa fa-download'></i></a></span>");
                        col.append(t);
                        t.append(download);
                        $(".notices").append(col);
                    }
                });
                var col = $("<div class='text-center' ></div>").addClass("col-sm-12 link-col");
                var link = $("<a href='http://210.212.85.155/' class='link' target='_blank'></a>").text("Read more");
                col.append(link);
                $(".notices").append(col);
            }
        });
    }, delay);

    }

    function notices()
    {
        $(".new-notice div").append('<p><i class="fa fa-thumb-tack"></i> &nbsp;New Notices</p>');
        $(".notices").append($("<div class='col-sm-12 text-center'></div>").append($("<img class='preloader' src='assets/connect.gif'>")));
    var delay=1500; //1.5 second
    setTimeout(function() {
        $.get("http://210.212.85.155/", function(data, status){
            if(status == "success") {
                $(".notices img").remove();
                var content = $("li.modal-index", data);
                $.each(content, function( index, value ) {
                    if(index%2==0)
                        var col = $("<div></div>").addClass("col-sm-12 odd notice-data");
                    else
                        var col = $("<div></div>").addClass("col-sm-12 notice-data");
                    var notice = $("div.col", value).html();
                    var t = $("<p></p>").text(notice);
                    col.append(t);
                    $(".notices").append(col);
                });
                var col = $("<div class='text-center' ></div>").addClass("col-sm-12 link-col");
                var link = $("<a href='http://210.212.85.155/' class='link' target='_blank'></a>").text("Read more Notices");
                col.append(link);
                $(".notices").append(col);
            }
        });
    }, delay);
    }


});