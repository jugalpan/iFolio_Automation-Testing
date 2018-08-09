"@fixture 85.Photo in background of head block";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["photo in background of head block"] = {
    '1.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@ad,");
    },
    '2.Select in input "Username or E-mail"': function() {
        act.select("#email", 11, 0);
    },
    '3.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@admin.com", {
            caretPos: 0
        });
    },
    "4.Press key TAB": function() {
        act.press("tab");
    },
    '5.Type in password input "Password"': function() {
        act.type("#password", "12ifolio!@");
    },
    '6.Click submit button "Log In"': function() {
        act.click(":containsExcludeChildren(Log In)");
    },
    '7.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $(".admin-users-edit.show-user-edit-modal[data-route='http://dev99.it-aces.com/admin/users/1213/edit']").find(" > i:nth(0)");
        };
        act.click(actionTarget);
    },
    '8.Click link "Portfolios"': function() {
        act.click(":containsExcludeChildren(Portfolios)");
    },
    '9.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(1);
        };
        act.click(actionTarget);
    },
    '10.Click image "edit"': function() {
        act.click("[alt='edit']");
    },
    "11.Click div": function() {
        var actionTarget = function() {
            return $(".hover-shadow-source.popup-c-item.popup-c-item-1.headshot-icon-6.popup-c-item-selected[data-val='wh3']").find(" > div:nth(1)");
        };
        act.click(actionTarget);
    },
    '12.Click div "Save"': function() {
        act.click("#setHeadshot");
    },
    '13.Click div "iFOLIO STOCK"': function() {
        act.click(":containsExcludeChildren(iFOLIO STOCK)");
    },
    '14.Click div "ORGANIZATION MEDIA"': function() {
        act.click(":containsExcludeChildren(ORGANIZATION MEDIA)");
    },
    '15.Click div "ICONS"': function() {
        act.click("[data-subsection='icons'].folio-popup-subsection-switcher-label");
    },
    '16.Click div "iFOLIO STOCK"': function() {
        act.click(":containsExcludeChildren(iFOLIO STOCK)");
    },
    "17.Click image": function() {
        act.click("body > div:nth(17) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > img:nth(0)");
    },
    "18.Drag image": function() {
        act.drag("body > div:nth(17) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > img:nth(0)", -197, 369, {
            offsetX: 111,
            offsetY: 62
        });
    },
    '19.Click div "Close"': function() {
        var actionTarget = function() {
            return $(".folio-popup-ok.folio-popup-button-rounded[data-dismiss='modal']").eq(2);
        };
        act.click(actionTarget);
    },
    "20.Click image": function() {
        act.click("[data-width='1920'][data-height='442.013'][data-aspect-ratio='4.034270485257221'][data-size='1783.2x442.013'].changeable-media-image.img-photo");
    }
};