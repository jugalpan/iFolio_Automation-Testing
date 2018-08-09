"@fixture 179,180,181.Scrollmap";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Scrollmap"] = {
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
    '11.Click span "Scrollmap"': function() {
        act.click(":containsExcludeChildren(Scrollmap)");
    },
    "12.Wait 10000 milliseconds": function() {
        act.wait(1e4);
    },
    "13.Click select": function() {
        act.click("#select-startdate");
    },
    '14.Click option "Month"': function() {
        act.click(":containsExcludeChildren(Month)");
    },
    "15.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "16.Click select": function() {
        act.click("#select-startdate");
    },
    '17.Click option "Year"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Year)").eq(1);
        };
        act.click(actionTarget);
    },
    "18.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '19.Click header cell "Total Time"': function() {
        act.click(":containsExcludeChildren(Total Time)");
    },
    '20.Click header cell "Total Time"': function() {
        act.click(":containsExcludeChildren(Total Time)");
    },
    '21.Click header cell "Avg Time"': function() {
        var actionTarget = function() {
            return $("#heatmap-table").find(":containsExcludeChildren(Avg Time)");
        };
        act.click(actionTarget);
    },
    '22.Click header cell "Avg Time"': function() {
        var actionTarget = function() {
            return $("#heatmap-table").find(":containsExcludeChildren(Avg Time)");
        };
        act.click(actionTarget);
    },
    '23.Click header cell "Block Views"': function() {
        act.click(":containsExcludeChildren(Block Views)");
    },
    '24.Click header cell "Block Views"': function() {
        act.click(":containsExcludeChildren(Block Views)");
    },
    '25.Click link "TOP 2 COLLEGE..."': function() {
        act.click(":containsExcludeChildren(TOP 2 COLLEGE PREFERENCES)");
    },
    '26.Click span "TOP 2 COLLEGE..."': function() {
        act.click(":containsExcludeChildren(TOP 2 COLLEGE PREFERENCES)");
    }
};

