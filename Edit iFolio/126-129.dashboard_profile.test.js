"@fixture 126-129.Dashboard profile";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Dashboard profile"] = {
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
    "6.Click div": function() {
        var actionTarget = function() {
            return $("#modal-with-account-info").find(".admin-modal-header");
        };
        act.click(actionTarget);
    },
    '7.Click link "log in to account"': function() {
        act.click(":containsExcludeChildren(log in to account)");
    },
    '8.Click <i> "edit"': function() {
        act.click(":containsExcludeChildren(edit)");
    },
    '9.Click link "Portfolios"': function() {
        act.click(":containsExcludeChildren(Portfolios)");
    },
    '10.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(1);
        };
        act.click(actionTarget);
    },
    "11.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click link "Dashboard"': function() {
        act.click("#popups-dashboard");
    },
    '13.Click span "Edit Information"': function() {
        act.click(":containsExcludeChildren(Edit Information)");
    },
    '14.Select in input "firstname"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find("[name='firstname']");
        };
        act.select(actionTarget, 8, 8);
    },
    "15.Press key BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE": function() {
        act.press("backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace");
    },
    '16.Click submit button "Save"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find(".welcome-button.welcome-button-continue");
        };
        act.click(actionTarget);
    },
    '17.Type in input "firstname"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find("[name='firstname']");
        };
        act.type(actionTarget, "Example1");
    },
    '18.Select in input "school_name"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find("[name='school_name']");
        };
        act.select(actionTarget, 3, 0);
    },
    "19.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '20.Click submit button "Save"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find(".welcome-button.welcome-button-continue");
        };
        act.click(actionTarget);
    },
    '21.Type in input "school_name"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find("[name='school_name']");
        };
        act.type(actionTarget, "UGA");
    },
    "22.Click div": function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find(".welcome-buttons");
        };
        act.click(actionTarget);
    },
    '23.Click submit button "Save"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find(".welcome-button.welcome-button-continue");
        };
        act.click(actionTarget);
    },
    '24.Drag paragraph "UGA"': function() {
        act.drag(":containsExcludeChildren(UGA)", 26, -2, {
            offsetX: 2,
            offsetY: 9
        });
    },
    '25.Drag paragraph "6th grade"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(6th grade)").eq(0);
        };
        act.drag(actionTarget, 62, 2, {
            offsetX: 2,
            offsetY: 10
        });
    },
    '26.Click span "Edit Information"': function() {
        act.click(":containsExcludeChildren(Edit Information)");
    },
    '27.Click button "Cancel"': function() {
        var actionTarget = function() {
            return $("#modalProfileForm").find(".welcome-button.welcome-button-back[data-show='#tab_welcome']");
        };
        act.click(actionTarget);
    }
};

