; "use strict";

(function($) {
    $.ajax({
            type: "GET",
            url: "https://api.github.com/repos/lean-tra/Swift-Korean/git/refs/heads/master",
            dataType: "json"
        })
        .done(function(data) {
            document.write(data.object.sha);
        });
})(jQuery);
