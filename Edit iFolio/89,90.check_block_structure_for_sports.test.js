"@fixture 89,90.Check block structure for Sports";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Check block structure of Sports"] = {
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
            return $(".admin-accounts-edit[data-route='http://dev99.it-aces.com/admin/accounts/1318/edit']").find(" > i:nth(0)");
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
    '10.Click div "Student Template"': function() {
        act.click("#header-portfolio-name", {
            caretPos: 29
        });
    },
    "11.Click body": function() {
        act.click("body");
    },
    "12.Click div": function() {
        var actionTarget = function() {
            return $("#block-25456").find(".fib-inner");
        };
        act.click(actionTarget);
    },
    '13.Click <h1> "COLLEGE PROGRAM..."': function() {
        act.click(":containsExcludeChildren(COLLEGE PROGRAM INTERESTS)");
    },
    "14.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '15.Click link "Athlete Template"': function() {
        act.click(":containsExcludeChildren(Athlete Template)");
    },
    "16.Click div": function() {
        var actionTarget = function() {
            return $("#block-25466").find(".fib-inner");
        };
        act.click(actionTarget);
    },
    '17.Click <h1> "ATHLETIC STATS"': function() {
        act.click(":containsExcludeChildren(ATHLETIC STATS)");
    },
    '18.Click <h1> "KEY ACHIEVEMENTS"': function() {
        act.click(":containsExcludeChildren(KEY ACHIEVEMENTS)");
    },
    '19.Click <h1> "ACTIVITIES"': function() {
        act.click(":containsExcludeChildren(ACTIVITIES)");
    },
    '20.Click <h1> "COLLEGE PROGRAM..."': function() {
        act.click(":containsExcludeChildren(COLLEGE PROGRAM INTERESTS)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $("#block-25476").find(".fib-inner");
        };
        act.click(actionTarget);
    },
    "22.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '23.Click link "Project Template"': function() {
        act.click(":containsExcludeChildren(Project Template)");
    },
    "24.Click div": function() {
        var actionTarget = function() {
            return $("#block-25490").find(".fib-inner");
        };
        act.click(actionTarget);
    },
    '25.Click <h1> "PORTFOLIO DISPLAY"': function() {
        act.click(":containsExcludeChildren(PORTFOLIO DISPLAY)");
    },
    '26.Click <h1> "SECTION/DAY 1"': function() {
        act.click(":containsExcludeChildren(SECTIONDAY 1)");
    },
    "27.Click div": function() {
        var actionTarget = function() {
            return $("#block-25490").find(".fib-inner");
        };
        act.click(actionTarget);
    }
};