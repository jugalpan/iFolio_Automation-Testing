"@fixture 172,173.Summary";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Summary"] = {
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
    "10.Click image": function() {
        var actionTarget = function() {
            return $("[title='Statistics']").find(" > img:nth(0)");
        };
        act.click(actionTarget);
    },
    "11.Click select": function() {
        act.click("#select-startdate");
    },
    '12.Click option "Month"': function() {
        act.click(":containsExcludeChildren(Month)");
    },
    "13.Click select": function() {
        act.click("#select-startdate");
    },
    '14.Click option "Half-Year"': function() {
        act.click(":containsExcludeChildren(HalfYear)");
    },
    "15.Click select": function() {
        act.click("#select-startdate");
    },
    '16.Click option "Year"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Year)").eq(1);
        };
        act.click(actionTarget);
    },
    "17.Click select": function() {
        act.click("#select-startdate");
    },
    '18.Click option "Week"': function() {
        act.click(":containsExcludeChildren(Week)");
    },
    '19.Click div "Total page views"': function() {
        act.click("#pageviews-text");
    },
    '20.Click div "Unique page views"': function() {
        act.click("#uniquePageviews-text");
    },
    '21.Click div "New users"': function() {
        act.click("#newUsers-text");
    }
};

