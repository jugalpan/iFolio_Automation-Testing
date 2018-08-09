"@fixture 88.Check block structure for Eductor";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Check block structure for Educator"] = {
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
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(5);
        };
        act.click(actionTarget);
    },
    "10.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click link "Athlete Template"': function() {
        act.click(":containsExcludeChildren(Athlete Template)");
    },
    "12.Click div": function() {
        var actionTarget = function() {
            return $("#block-25418").find(".fib-inner");
        };
        act.click(actionTarget);
    },
    "13.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '14.Click link "Student Template"': function() {
        act.click(":containsExcludeChildren(Student Template)");
    },
    "15.Click <svg>": function() {
        act.click("#SvgjsSvg1006");
    },
    '16.Click span "×"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(×)").eq(3);
        };
        act.click(actionTarget);
    }
};

