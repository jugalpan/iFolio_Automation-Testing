"@fixture 76.Rename iFolio";
"@page http://dev99.it-aces.com/student/portfolio/view/1618";

"@test"["Rename iFolio"] = {
    '1.Select in input "Username or E-mail"': function() {
        act.select("#email", 15, 0);
    },
    '2.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@admin.com", {
            caretPos: 0
        });
    },
    "3.Press key TAB": function() {
        act.press("tab");
    },
    '4.Type in password input "Password"': function() {
        act.type("#password", "12ifolio!@", {
            caretPos: 0
        });
    },
    "5.Press key ENTER": function() {
        act.press("enter");
    },
    '6.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $(".admin-users-edit.show-user-edit-modal[data-route='http://dev99.it-aces.com/admin/users/1213/edit']").find(" > i:nth(0)");
        };
        act.click(actionTarget);
    },
    '7.Click link "Portfolios"': function() {
        act.click(":containsExcludeChildren(Portfolios)");
    },
    '8.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(1);
        };
        act.click(actionTarget);
    },
    '9.Select in div "testiFolioRename"': function() {
        act.select("#header-portfolio-name", 37, 31);
    },
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "11.Press key ENTER": function() {
        act.press("enter");
    },
    "12.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '13.Type in div "testiFolioRename"': function() {
        act.type("#header-portfolio-name", "Rename");
    },
    "14.Press key ENTER": function() {
        act.press("enter");
    },
    "15.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    "16.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    }
};

