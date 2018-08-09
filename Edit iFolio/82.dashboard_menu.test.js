"@fixture 82.Dashboard menu";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["Dashboard menu"] = {
    '1.Select in input "Username or E-mail"': function() {
        act.select("#email", 0, 0);
    },
    '2.Select in input "Username or E-mail"': function() {
        act.select("#email", 15, 0);
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
        act.type("#password", "12ifolio!@", {
            caretPos: 0
        });
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
    '9.Click link "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(0);
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
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    "12.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    "13.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    }
};