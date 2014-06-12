; "use strict";

(function ($) {
    $(document).ready(function () {
        var path = getCurrentPath();
        if (path == undefined || path == "404") {
            return;
        }

        $.each(pages, function(i, page) {
            getDropdown(page);
            getSideNavigation(page);

            if (page.page == "index") {
                getMarkdown(page);
            } else {
                $.each(page.children, function(j, p) {
                    getMarkdown(p);
                });
            }
        });

        $("a").click(function () {
            var href = $(this).attr("href");
            var path = href.substring(href.lastIndexOf("/") + 1);
            var section = getSection(path);
            if (section != undefined) {
                for (var k in pages) {
                    if (section.page == pages[k].page) {
                        $("#" + section.page).addClass("in");
                    } else {
                        $("#" + pages[k].page).removeClass("in");
                    }
                }
            }
            var subPage = getSubPage(path);
            if (subPage != undefined) {
                history.pushState(null, null, $(this).attr("href"));
                getMarkdown(subPage.doc);
                return false;
            }
            return true;
        });
    });

    // Gets the current path.
    var getCurrentPath = function () {
        var path = $.url().attr("path");
        if (path == undefined || path == "/") {
            path = "index";
            var query = $.url().attr("query");
            if (query != undefined && query.length) {
                path = query;
                if (!validatePage(path)) {
                    path = "404";
                }
            }
        }
        return path.replace("/", "");
    };

    // Validates whether the path provide is valid or not.
    var validatePage = function (path) {
        if (path == undefined || !path.length) {
            return false;
        }

        if (path == "index") {
            return true;
        }

        var validated = false;
        for (var i in pages) {
            var page = pages[i];
            if (page.children == undefined) {
                continue;
            }

            for (var j in page.children) {
                var p = page.children[j];
                if (p.page != path) {
                    continue;
                }

                validated = true;
                break;
            }

            if (validated) {
                break;
            }
        }
        return validated;
    };

    // Gets the dropdown menu link.
    var getDropdown = function(page) {
        if (page == undefined) {
            return;
        }

        if (page.page == "index") {
            return;
        }

        if (page.children == undefined) {
            return;
        }

        var $link = $("<a></a>").addClass("dropdown-toggle").attr({ "data-toggle": "dropdown", "href": "#" }).html(page.name + " <strong class=\"caret\"></strong>");

        var $dropdown = $("#dropdown-" + page.page);
        $dropdown.append($link);

        var $ul = $("<ul></ul>").addClass("dropdown-menu");
        for (var i in page.children) {
            var p = page.children[i];
            var $l = $("<a></a>").addClass("internal").attr("href", "?" + page.page + "#" + p.page).text(p.name);
            var $li = $("<li></li>").append($l);
            $ul.append($li);
        }
        $dropdown.append($ul);
    };

    // Gets the side navigation menus.
    var getSideNavigation = function(page) {
        if (page == undefined) {
            return;
        }

        if (page.page == "index") {
            return;
        }

        if (page.children == undefined) {
            return;
        }

        var $link = $("<a></a>").attr({ "data-toggle": "collapse", "data-parent": "#accordion", "href": "#" + page.page }).text(page.name);
        var $title = $("<h4></h4>").addClass("panel-title").append($link);
        var $heading = $("<div></div>").addClass("panel-heading").append($title);
        var $panel = $("<div></div>").addClass("panel panel-default").append($heading);

        var $ul = $("<ul></ul>").addClass("nav nav-stacked");
        for (var i in page.children) {
            var p = page.children[i];
            var $l = $("<a></a>").addClass("nav-padding-flat").attr("href", "?" + page.page + "#" + p.page).text(p.name);
            var $li = $("<li></li>").append($l);
            $ul.append($li);
        }

        var $body = $("<div></div>").addClass("panel-body").append($ul);
        var $collapsable = $("<div></div>").attr("id", page.page).addClass("panel-collapse collapse").append($body);

        $panel.append($collapsable);
        $("#accordion").append($panel);
    };

    // Gets the given markdown page.
    var getMarkdown = function (page) {
        if (page == undefined) {
            return;
        }

        var url = "https://api.github.com/repos/lean-tra/Swift-Korean/contents/" + page.doc;
        $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                headers: { "Authorization": "token 66b2543e01677885e8fd3b68bcdc79edfc3d63e1" }
            })
            .done(function(data) {
                var decoded = Base64.decode(data.content);
                markdownToHtml(page, decoded);
            });
    };

    // Converts the markdown to HTML and put them into the HTML element.
    var markdownToHtml = function (page, markdown) {
        var url = "https://api.github.com/markdown";
        var params = {
            "mode": "gfm",
            "text": markdown
        };
        $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(params),
                dataType: "html",
                headers: { "Authorization": "token 66b2543e01677885e8fd3b68bcdc79edfc3d63e1" }
            })
            .done(function(data) {
                for (var i in pages) {
                    data = data.replace(pages[i].doc, pages[i].page);
                }

                $("#main-content").html(data);
            });
    };

    // Gets the section of the page.
    var getSection = function(path) {
        var section = undefined;
        for (var i in pages) {
            var page = pages[i];
            if (page.children == undefined) {
                continue;
            }
            if (page.children.length > 0) {
                for (var j in page.children) {
                    var p = page.children[j];
                    if (p.page != path) {
                        continue;
                    }
                    section = page;
                    break;
                }
            }
            if (section != undefined) {
                break;
            }
        }
        return section;
    };

    // Gets the sub page.
    var getSubPage = function (path) {
        var subPage = undefined;
        for (var i in pages) {
            var page = pages[i];
            if (page.doc != undefined && page.doc.length > 0 && page.page == path) {
                subPage = page;
                break;
            }
            if (page.children != undefined && page.children.length > 0) {
                for (var j in page.children) {
                    var p = page.children[j];
                    if (p.doc != undefined && p.doc.length > 0 && p.page == path) {
                        subPage = p;
                        break;
                    }
                }
            }
            if (subPage != undefined && subPage.page != undefined && subPage.page.length > 0) {
                break;
            }
        }
        return subPage;
    };
})(jQuery);
