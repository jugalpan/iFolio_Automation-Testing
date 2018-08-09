"@fixture 110,111,112,113.Media crop";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["media crop"] = {
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
    "10.Click <i>": function() {
        var actionTarget = function() {
            return $("#block-25399").find(".fa.fa-crop");
        };
        act.click(actionTarget);
    },
    '11.Click submit button "4/3"': function() {
        act.click(":containsExcludeChildren(43)");
    },
    '12.Click submit button "16/9"': function() {
        act.click(":containsExcludeChildren(169)");
    },
    '13.Click submit button "free"': function() {
        act.click(":containsExcludeChildren(free)");
    },
    '14.Click button "Save"': function() {
        act.click("#cropper-save");
    },
    '15.Click <h1> "WORK EXPERIENCE"': function() {
        act.click(":containsExcludeChildren(WORK EXPERIENCE)");
    },
    "16.Click div": function() {
        act.click(".block-media[data-index='0'][data-source='http://www.portfoliovantage.com/photos/ec01daeaa57baf5ba6e2018aeab5c8a8d8810b65/1200x600.jpeg'][data-block='25399']");
    }
};