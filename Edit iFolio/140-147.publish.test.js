"@fixture 140-147.Publish";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["publish"] = {
    '1.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@admin.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#password", "12ifolio!@");
    },
    '3.Click submit button "Log In"': function() {
        act.click(":containsExcludeChildren(Log In)");
    },
    '4.Click link "Accounts"': function() {
        act.click(":containsExcludeChildren(Accounts)");
    },
    '5.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $(".admin-accounts-edit[data-route='http://dev99.it-aces.com/admin/accounts/1316/edit']").find(" > i:nth(0)");
        };
        act.click(actionTarget);
    },
    '6.Click link "log in to account"': function() {
        act.click(":containsExcludeChildren(log in to account)");
    },
    '7.Click <i> "edit"': function() {
        act.click(":containsExcludeChildren(edit)");
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
    '10.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Type in input "alias"': function() {
        act.type("#alias", "``@");
    },
    '12.Click div "Publish"': function() {
        act.click("#publish");
    },
    '13.Click input "alias"': function() {
        act.click("#alias");
    },
    "14.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "15.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "16.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '17.Type in input "alias"': function() {
        act.type("#alias", "12345");
    },
    '18.Click div "Publish"': function() {
        act.click("#publish");
    },
    '19.Click div "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '20.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '21.Click input "alias"': function() {
        act.click("#alias");
    },
    "22.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "23.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "24.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "25.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "26.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '27.Type in input "alias"': function() {
        act.type("#alias", "qwertyasdfghqwerty123456");
    },
    '28.Click div "Publish"': function() {
        act.click("#publish");
    },
    '29.Click div "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '30.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '31.Select in input "alias"': function() {
        act.select("#alias", 18, 32);
    },
    '32.Click input "alias"': function() {
        act.click("#alias", {
            caretPos: 18
        });
    },
    "33.Press key RIGHT RIGHT RIGHT RIGHT": function() {
        act.press("right right right right");
    },
    "34.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "35.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "36.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "37.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "38.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "39.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "40.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "41.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "42.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "43.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "44.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "45.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "46.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "47.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "48.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "49.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "50.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "51.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "52.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "53.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "54.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "55.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "56.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "57.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '58.Click div "Publish"': function() {
        act.click("#publish");
    },
    '59.Click div "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '60.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '61.Click span "SECURE WITH PASSWORD"': function() {
        act.click(":containsExcludeChildren(SECURE WITH PASSWORD)");
    },
    '62.Click span "SECURE WITH PASSWORD"': function() {
        act.click(":containsExcludeChildren(SECURE WITH PASSWORD)");
    },
    '63.Click div "Unpublish"': function() {
        act.click("#unpublish");
    },
    '64.Click div "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '65.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '66.Click div "Publish"': function() {
        act.click("#publish");
    },
    '67.Click div "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '68.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '69.Click div "Back"': function() {
        var actionTarget = function() {
            return $("#popup-publish").find(":containsExcludeChildren(Back)");
        };
        act.click(actionTarget);
    }
};

