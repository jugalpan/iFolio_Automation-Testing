"@fixture 83.Click stats button";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["Stats button"] = {
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
            return $("[title='Statistics']").find(" > img:nth(0)");
        };
        act.click(actionTarget);
    },
    '10.Click span "Activity"': function() {
        act.click(":containsExcludeChildren(Activity)");
    }
};

