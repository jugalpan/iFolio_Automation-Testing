"@fixture 109.Uppercase of title";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["uppercase titles"] = {
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
    '10.Click <h1> "ACADEMIC STATS"': function() {
        act.click(":containsExcludeChildren(ACADEMIC STATS)");
    },
    '11.Dblclick <h1> "ACADEMIC STATS"': function() {
        act.dblclick(":containsExcludeChildren(ACADEMIC STATS)", {
            caretPos: 9
        });
    },
    '12.Click <h1> "ACADEMIC STATS"': function() {
        act.click(":containsExcludeChildren(ACADEMIC STATS)", {
            caretPos: 0
        });
    },
    '13.Click <h1> "ACADEMIC STATS"': function() {
        act.click(":containsExcludeChildren(ACADEMIC STATS)", {
            caretPos: 0
        });
    },
    '14.Click <h1> "SUMMARY"': function() {
        act.click("[data-key='options.title'][data-id='25395']");
    },
    '15.Click <h1> "KEY ACHIEVEMENTS"': function() {
        act.click(":containsExcludeChildren(KEY ACHIEVEMENTS)");
    },
    '16.Click <h1> "PORTFOLIO DISPLAY"': function() {
        act.click(":containsExcludeChildren(PORTFOLIO DISPLAY)");
    },
    '17.Click <h1> "ACTIVITIES"': function() {
        act.click(":containsExcludeChildren(ACTIVITIES)");
    },
    '18.Click <h1> "WORK EXPERIENCE"': function() {
        act.click(":containsExcludeChildren(WORK EXPERIENCE)");
    },
    '19.Click <h1> "SERVICE"': function() {
        var actionTarget = function() {
            return $("#block-25400").find(":containsExcludeChildren(SERVICE)");
        };
        act.click(actionTarget);
    },
    '20.Click <h1> "SKILLS"': function() {
        act.click(":containsExcludeChildren(SKILLS)");
    },
    '21.Click span "TOP 2 COLLEGE..."': function() {
        act.click(":containsExcludeChildren(TOP 2 COLLEGE PREFERENCES)");
    },
    '22.Click <h1> "TRANSCRIPT"': function() {
        act.click(":containsExcludeChildren(TRANSCRIPT)");
    },
    "23.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '24.Click link "Athlete Template"': function() {
        act.click(":containsExcludeChildren(Athlete Template)");
    },
    '25.Click <h1> "ATHLETIC STATS"': function() {
        act.click(":containsExcludeChildren(ATHLETIC STATS)");
    },
    '26.Click <h1> "SUMMARY"': function() {
        act.click(":containsExcludeChildren(SUMMARY)");
    },
    '27.Click <h1> "KEY ACHIEVEMENTS"': function() {
        act.click(":containsExcludeChildren(KEY ACHIEVEMENTS)");
    },
    '28.Click <h1> "PORTFOLIO DISPLAY"': function() {
        act.click(":containsExcludeChildren(PORTFOLIO DISPLAY)");
    },
    '29.Click <h1> "ACTIVITIES"': function() {
        act.click(":containsExcludeChildren(ACTIVITIES)");
    },
    '30.Click <h1> "SERVICE"': function() {
        var actionTarget = function() {
            return $("#block-25415").find(":containsExcludeChildren(SERVICE)");
        };
        act.click(actionTarget);
    },
    '31.Click <h1> "COLLEGE PROGRAM..."': function() {
        act.click(":containsExcludeChildren(COLLEGE PROGRAM INTERESTS)");
    },
    "32.Click <h1>": function() {
        var actionTarget = function() {
            return $("#block-25417").find(".text-center").eq(0);
        };
        act.click(actionTarget);
    },
    '33.Click span "TOP 2 COLLEGE..."': function() {
        act.click(":containsExcludeChildren(TOP 2 COLLEGE PREFERENCES)");
    },
    '34.Click <h1> "TRANSCRIPT"': function() {
        act.click(":containsExcludeChildren(TRANSCRIPT)");
    },
    '35.Click <h1> "SOCIAL NETWORKS"': function() {
        act.click(":containsExcludeChildren(SOCIAL NETWORKS)");
    },
    '36.Click paragraph "TOP COLLEGES"': function() {
        act.click(":containsExcludeChildren(TOP COLLEGES)");
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
    '39.Click <h1> "HIGHLIGHT"': function() {
        act.click(":containsExcludeChildren(HIGHLIGHT)");
    },
    '40.Click <h1> "SECTION/DAY 1"': function() {
        act.click(":containsExcludeChildren(SECTIONDAY 1)");
    },
    '41.Click <h1> "SECTION/DAY 4"': function() {
        act.click(":containsExcludeChildren(SECTIONDAY 4)");
    },
    '42.Click <h1> "SECTION/DAY 5"': function() {
        act.click(":containsExcludeChildren(SECTIONDAY 5)");
    },
    '43.Click <h1> "PORTFOLIO DISPLAY"': function() {
        act.click(":containsExcludeChildren(PORTFOLIO DISPLAY)");
    },
    '44.Click <h1> "ENTER YOUR TITLE..."': function() {
        var actionTarget = function() {
            return $("#block-25571").find(":containsExcludeChildren(ENTER YOUR TITLE HERE)");
        };
        act.click(actionTarget);
    },
    '45.Click <h1> "ENTER YOUR TITLE..."': function() {
        var actionTarget = function() {
            return $("#block-25572").find(":containsExcludeChildren(ENTER YOUR TITLE HERE)");
        };
        act.click(actionTarget);
    },
    "46.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '47.Click link "Student Template"': function() {
        act.click(":containsExcludeChildren(Student Template)");
    }
};

