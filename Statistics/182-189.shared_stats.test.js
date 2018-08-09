"@fixture 182-189.Shared stats";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["shared stats"] = {
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
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(3);
        };
        act.click(actionTarget);
    },
    "10.Click image": function() {
        var actionTarget = function() {
            return $("[title='Statistics']").find(" > img:nth(0)");
        };
        act.click(actionTarget);
    },
    '11.Click span "Shared stats"': function() {
        act.click(":containsExcludeChildren(Shared stats)");
    },
    "12.Click select": function() {
        act.click("#select-startdate");
    },
    '13.Click option "Year"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Year)").eq(1);
        };
        act.click(actionTarget);
    },
    '14.Click table cell "Email:..."': function() {
        var actionTarget = function() {
            return $("#kJctG9").find(":containsExcludeChildren(Email jugalpangmailcom)");
        };
        act.click(actionTarget);
    },
    "15.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '16.Click <h1> "Scrollmap of what..."': function() {
        act.click(":containsExcludeChildren(Scrollmap of what shared contact viewed)");
    },
    '17.Click table cell "Email:..."': function() {
        var actionTarget = function() {
            return $("#JWAwqf").find(":containsExcludeChildren(Email jugalpangmailcom)");
        };
        act.click(actionTarget);
    },
    "18.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '19.Click table cell "Example1 Test case"': function() {
        var actionTarget = function() {
            return $("#DF0bWc").find(":containsExcludeChildren(Example1 Test case)");
        };
        act.click(actionTarget);
    },
    "20.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '21.Click header cell "Sent"': function() {
        act.click(":containsExcludeChildren(Sent)");
    },
    '22.Click header cell "Sent"': function() {
        act.click(":containsExcludeChildren(Sent)");
    },
    '23.Click header cell "Visited"': function() {
        act.click(":containsExcludeChildren(Visited)");
    },
    '24.Click header cell "Visited"': function() {
        act.click(":containsExcludeChildren(Visited)");
    },
    '25.Click header cell "Company"': function() {
        act.click(":containsExcludeChildren(Company)");
    },
    '26.Click header cell "Company"': function() {
        act.click(":containsExcludeChildren(Company)");
    },
    '27.Click header cell "Company"': function() {
        act.click(":containsExcludeChildren(Company)");
    },
    "28.Click link": function() {
        act.click(".glyphicon.glyphicon-bell.dropdown-toggle[data-toggle='dropdown']");
    },
    "29.Click div": function() {
        var actionTarget = function() {
            return $(".dropdown-menu").eq(1);
        };
        act.click(actionTarget);
    },
    "30.Click select": function() {
        act.click("#select-startdate");
    },
    '31.Click option "Week"': function() {
        act.click(":containsExcludeChildren(Week)");
    },
    "32.Click select": function() {
        act.click("#select-startdate");
    },
    '33.Click option "Year"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Year)").eq(1);
        };
        act.click(actionTarget);
    },
    '34.Click table cell "Example1 Test case"': function() {
        var actionTarget = function() {
            return $("#kJctG9").find(":containsExcludeChildren(Example1 Test case)");
        };
        act.click(actionTarget);
    },
    "35.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

