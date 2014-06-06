; "use strict";

(function ($) {
    $(document).ready(function () {
        var file = getCurrentPage();
        for (var i in pages) {
            var page = pages[i];

            if (page.page == "index") {
                getMarkdown(page.doc);
            } else {
                for (var j in page.children) {
                    var p = page.children[j];
                    if (p.doc == undefined || p.page + ".html" != file) {
                        continue;
                    }
                    getMarkdown(p.doc);
                }
            }

            if (!page.isParent) {
                continue;
            }

            getSideNavigation(page);
        }
    });

    // Gets the current page.
    var getCurrentPage = function() {
        var page = $.url().attr("file");
        if (page == undefined || !page.length) {
            page = "index.html";
        }
        return page;
    };

    // Gets the given markdown page.
    var getMarkdown = function (doc) {
        var url = "https://api.github.com/repos/lean-tra/Swift-Korean/contents/" + doc;
        $.ajax({
                type: "GET",
                url: url,
                dataType: "json"
            })
            .done(function(data) {
                var decoded = Base64.decode(data.content);
                markdownToHtml(decoded);
            });
    };

    // Converts the markdown to HTML and put them into the HTML element.
    var markdownToHtml = function (markdown) {
        var url = "https://api.github.com/markdown";
        var params = {
            "mode": "gfm",
            "text": markdown
        };
        $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(params),
                dataType: "html"
            })
            .done(function(data) {
                for (var i in pages) {
                    var doc = pages[i].doc;
                    var page = pages[i].page;
                    data = data.replace(doc, page + ".html");
                }
                $("#main-content").html(data);
            });
    };

    // Gets the side navigation menus.
    var getSideNavigation = function (page) {
        if (page == undefined) {
            return;
        }

        if (page.page == "index") {
            return;
        }

        var link = $("<a></a>").text(page.name);
        if (page.children == undefined) {
            link.attr({ "href": page.page + ".html" });
        } else {
            link.attr({ "data-toggle": "collapse", "data-parent": "#accordion", "href": "#" + page.page });
        }

        var title = $("<h4></h4>")
            .addClass("panel-title")
            .append(link);

        var heading = $("<div></div>")
            .addClass("panel-heading")
            .append(title);

        var panel = $("<div></div>")
            .addClass("panel panel-default")
            .append(heading);

        if (page.children != undefined) {
            var ul = $("<ul></ul>")
                .addClass("nav nav-stacked");

            for (var i in page.children) {
                var p = page.children[i];
                var l = $("<a></a>")
                    .attr("href", p.page + ".html")
                    .text(p.name);
                var li = $("<li></li>")
                    .append(l);
                ul.append(li);
            }

            var body = $("<div></div>")
                .addClass("panel-body")
                .append(ul);
            var collapsable = $("<div></div>")
                .attr("id", page.page)
                .addClass("panel-collapse collapse")
                .append(body);

            panel.append(collapsable);
        }
        $("#accordion").append(panel);
    };
})(jQuery);
