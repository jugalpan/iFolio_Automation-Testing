"@fixture 79.Download PDF";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["Download PDF"] = {
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
        act.type("#password", "12ifolio!@");
    },
    '5.Click submit button "Log In"': function() {
        act.click(":containsExcludeChildren(Log In)");
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
    '8.Click link "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    "10.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click image": function() {
        var actionTarget = function() {
            return $(".glyphicon").find(" > img:nth(0)");
        };
        act.click(actionTarget);
    },
    "12.Rclick image": function() {
        var actionTarget = function() {
            return $(".glyphicon").find(" > img:nth(0)");
        };
        act.rclick(actionTarget);
    }
};

