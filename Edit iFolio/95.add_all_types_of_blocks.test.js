"@fixture 95.Add all types of blocks";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Add all types of blocks"] = {
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
    '9.Click link "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "11.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25551").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '13.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "14.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(1);
        };
        act.click(actionTarget);
    },
    '15.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25552").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '16.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "17.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(2);
        };
        act.click(actionTarget);
    },
    '18.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25553").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '19.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "20.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    },
    '21.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25554").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '22.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "23.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(4);
        };
        act.click(actionTarget);
    },
    '24.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25555").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    "25.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '26.Click link "Athlete Template"': function() {
        act.click(":containsExcludeChildren(Athlete Template)");
    },
    "27.Click body": function() {
        act.click("body");
    },
    '28.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "29.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(0);
        };
        act.click(actionTarget);
    },
    '30.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25556").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '31.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "32.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25557").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '34.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "35.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(4);
        };
        act.click(actionTarget);
    },
    '36.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25558").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    "37.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '38.Click link "Project Template"': function() {
        act.click(":containsExcludeChildren(Project Template)");
    },
    "39.Click body": function() {
        act.click("body");
    },
    '40.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "41.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(0);
        };
        act.click(actionTarget);
    },
    '42.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25559").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '43.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "44.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(1);
        };
        act.click(actionTarget);
    },
    '45.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25560").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '46.Click div "Add new block"': function() {
        act.click("#add-block-button");
    },
    "47.Click image": function() {
        var actionTarget = function() {
            return $(".hover-shadow-target[data-dismiss='modal']").eq(4);
        };
        act.click(actionTarget);
    },
    '48.Click div "Delete block"': function() {
        var actionTarget = function() {
            return $("#block-25561").find(".fib-button.fib-button-trash.block-destroy[title='Delete block']");
        };
        handleConfirm(true);
        act.click(actionTarget);
    }
};