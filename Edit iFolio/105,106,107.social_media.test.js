"@fixture 105,106,107.Social media";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["social media"] = {
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
            return $(".hover-shadow-target[data-dismiss='modal']").eq(4);
        };
        act.click(actionTarget);
    },
    "12.Click paragraph": function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.facebook'][data-id='25579']").find(" > p:nth(0)");
        };
        act.click(actionTarget);
    },
    '13.Type in paragraph "www.facebook.com"': function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.facebook'][data-id='25579']").find(" > p:nth(0)");
        };
        act.type(actionTarget, "www.facebook.com");
    },
    "14.Click paragraph": function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.instagram'][data-id='25579']").find(" > p:nth(0)");
        };
        act.click(actionTarget);
    },
    '15.Type in paragraph "www.instagram.com"': function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.instagram'][data-id='25579']").find(" > p:nth(0)");
        };
        act.type(actionTarget, "www.instagram.com");
    },
    "16.Click paragraph": function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.twitter'][data-id='25579']").find(" > p:nth(0)");
        };
        act.click(actionTarget);
    },
    '17.Type in paragraph "www.tritter.com"': function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.twitter'][data-id='25579']").find(" > p:nth(0)");
        };
        act.type(actionTarget, "www.tritter.com");
    },
    "18.Click paragraph": function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.linkedin'][data-id='25579']").find(" > p:nth(0)");
        };
        act.click(actionTarget);
    },
    '19.Type in paragraph "www.linkedin.com"': function() {
        var actionTarget = function() {
            return $(".fib-text[data-key='options.social.linkedin'][data-id='25579']").find(" > p:nth(0)");
        };
        act.type(actionTarget, "www.linkedin.com");
    },
    '20.Click <h1> "SOCIAL NETWORKS"': function() {
        act.click(":containsExcludeChildren(SOCIAL NETWORKS)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $(".social-item-outer.col-md-3.col-sm-6.col-xs-8").eq(1);
        };
        act.click(actionTarget);
    },
    '22.Click div "Duplicate block"': function() {
        var actionTarget = function() {
            return $("#block-25579").find(".fib-button.fib-button-copy.block-duplicate[title='Duplicate block']");
        };
        act.click(actionTarget);
    }
};

