"@fixture 196.Share from preview";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["share from preview"] = {
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
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(2);
        };
        act.click(actionTarget);
    },
    '10.Click span "PREVIEW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PREVIEW)").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click <i>": function() {
        act.click(".fa.fa-share-square-o");
    },
    '12.Type in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.type(actionTarget, "Hello");
    },
    "13.Press key ENTER": function() {
        act.press("enter");
    },
    '14.Click text area "custom_message"': function() {
        act.click(".form-control[name='custom_message']", {
            caretPos: 12
        });
    },
    '15.Click div "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    "16.Click <i>": function() {
        act.click(".fa.fa-share-square-o");
    },
    '17.Type in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.type(actionTarget, "Mr. Watson");
    },
    '18.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '19.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '20.Click div "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    }
};

