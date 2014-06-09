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
                    if (p.doc == undefined || p.page!= file) {
                        continue;
                    }
                    getMarkdown(p.doc);
                }
            }

            if (!page.isParent) {
                continue;
            }

            getNavBar(page);
            getSideNavigation(page);
        }

        $("a").click(function () {
            var href = $(this).attr("href");
            var path = href.substring(href.lastIndexOf("/") + 1);
            var internalPage = getInternalPage(path);
            if (internalPage != undefined) {
                history.pushState(null, null, $(this).attr("href"));
                getMarkdown(internalPage.doc);
                return false;
            }
            return true;
        });
    });

    // Gets the current page.
    var getCurrentPage = function() {
        var page = $.url().attr("file");
        if (page == undefined || !page.length) {
            page = "index";
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
                    data = data.replace(doc, page);
                }
                $("#main-content").html(data);
            });
    };

    // Gets the nav bar dropdowns.
    var getNavBar = function(page) {
        if (page == undefined) {
            return;
        }

        if (page.page == "index") {
            return;
        }

        if (page.children != undefined) {
            var dropdown = $("#dropdown-" + page.page);

            var link = $("<a></a>").addClass("dropdown-toggle").attr({ "data-toggle": "dropdown", "href": "#" }).html(page.name + " <strong class=\"caret\"></strong>");
            dropdown.append(link);

            var ul = $("<ul></ul>").addClass("dropdown-menu");
            for (var i in page.children) {
                var p = page.children[i];
                var l = $("<a></a>").attr("href", p.page).text(p.name);
                var li = $("<li></li>").append(l);
                ul.append(li);
            }
            dropdown.append(ul);
        }
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
            link.attr({ "href": page.page});
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
                    .addClass("nav-padding-flat")
                    .attr("href", p.page)
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

    // Gets the internal page.
    var getInternalPage = function (path) {
        var internalPage = undefined;
        for (var i in pages) {
            var page = pages[i];
            if (page.doc != undefined && page.doc.length > 0 && page.page == path) {
                internalPage = page;
                break;
            }
            if (page.children != undefined && page.children.length > 0) {
                for (var j in page.children) {
                    var p = page.children[j];
                    if (p.doc != undefined && p.doc.length > 0 && p.page == path) {
                        internalPage = p;
                        break;
                    }
                }
            }
            if (internalPage != undefined && internalPage.page != undefined && internalPage.page.length > 0) {
                break;
            }
        }
        return internalPage;
    };
})(jQuery);
