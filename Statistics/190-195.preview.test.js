"@fixture 190-195.Preview";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["preview"] = {
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
    "11.Wait 3000 milliseconds": function() {
        act.wait(3e3);
    },
    '12.Click <h1> "SUMMARY"': function() {
        act.click(":containsExcludeChildren(SUMMARY)");
    },
    '13.Click <h1> "KEY ACHIEVEMENTS"': function() {
        act.click(":containsExcludeChildren(KEY ACHIEVEMENTS)");
    },
    '14.Click <h1> "ACTIVITIES"': function() {
        act.click(":containsExcludeChildren(ACTIVITIES)");
    },
    "15.Click span": function() {
        act.click(".glyphicon.glyphicon-chevron-right");
    },
    "16.Click span": function() {
        act.click(".glyphicon.glyphicon-chevron-right");
    },
    "17.Click span": function() {
        act.click(".glyphicon.glyphicon-chevron-right");
    },
    "18.Click span": function() {
        act.click(".glyphicon.glyphicon-chevron-right");
    },
    "19.Click span": function() {
        act.click(".glyphicon.glyphicon-chevron-right");
    },
    '20.Click <h1> "ACTIVITIES"': function() {
        act.click(":containsExcludeChildren(ACTIVITIES)");
    },
    '21.Click <h1> "WORK EXPERIENCE"': function() {
        act.click(":containsExcludeChildren(WORK EXPERIENCE)");
    },
    '22.Click <h1> "SKILLS"': function() {
        act.click(":containsExcludeChildren(SKILLS)");
    },
    '23.Click <h1> "COLLEGE PROGRAM..."': function() {
        act.click(":containsExcludeChildren(COLLEGE PROGRAM INTERESTS)");
    },
    '24.Click <h1> "TRANSCRIPT"': function() {
        act.click(":containsExcludeChildren(TRANSCRIPT)");
    },
    '25.Click link "Terms & conditions"': function() {
        act.click(":containsExcludeChildren(Terms conditions)");
    },
    '26.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    '27.Click link "Privacy policy"': function() {
        act.click(":containsExcludeChildren(Privacy policy)");
    },
    '28.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#privacy-policy-modal").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    "29.Click link": function() {
        act.click(".page-vcard-link");
    },
    '30.Click <h1> "TRANSCRIPT"': function() {
        act.click(":containsExcludeChildren(TRANSCRIPT)");
    },
    "31.Click link": function() {
        act.click(".page-vcard-link");
    },
    '32.Click link "Terms & conditions"': function() {
        act.click(":containsExcludeChildren(Terms conditions)");
    },
    '33.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    '34.Click link "Privacy policy"': function() {
        act.click(":containsExcludeChildren(Privacy policy)");
    },
    '35.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#privacy-policy-modal").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    }
};

