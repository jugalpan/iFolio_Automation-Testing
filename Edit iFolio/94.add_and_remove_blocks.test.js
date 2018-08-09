"@fixture 94.Add and remove blocks";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Add and remove blocks"] = {
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
    "10.Click body": function() {
        act.click("body");
    },
    '11.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "12.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(2);
        };
        act.click(actionTarget);
    },
    '13.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25549").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '14.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "15.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(1);
        };
        act.click(actionTarget);
    },
    '16.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25550").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    "17.Click html": function() {
        act.click("html");
    }
};