"@fixture 91,92,93.Check block structure of Enterprise";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["check block structure for Enterprise"] = {
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
            return $(".admin-accounts-edit[data-route='http://dev99.it-aces.com/admin/accounts/1319/edit']").find(" > i:nth(0)");
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
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(5);
        };
        act.click(actionTarget);
    },
    '10.Click div "Professional..."': function() {
        act.click("#header-portfolio-name", {
            caretPos: 33
        });
    },
    "11.Click body": function() {
        act.click("body");
    },
    '12.Click <h1> "KEY ACHIEVEMENTS"': function() {
        act.click(":containsExcludeChildren(KEY ACHIEVEMENTS)");
    },
    '13.Click <h1> "WORK EXPERIENCE"': function() {
        act.click(":containsExcludeChildren(WORK EXPERIENCE)");
    },
    '14.Click <h1> "SKILLS"': function() {
        act.click(":containsExcludeChildren(SKILLS)");
    },
    "15.Click circle": function() {
        act.click("#SvgjsCircle1055");
    },
    "16.Click <svg>": function() {
        act.click("#SvgjsSvg1066");
    },
    '17.Click span "×"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(×)").eq(3);
        };
        act.click(actionTarget);
    },
    "18.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '19.Click link "Enterprise Template"': function() {
        act.click(":containsExcludeChildren(Enterprise Template)");
    },
    '20.Click div "Enterprise Template"': function() {
        act.click("#header-portfolio-name", {
            caretPos: 31
        });
    },
    '21.Click <h1> "SUMMARY"': function() {
        act.click(":containsExcludeChildren(SUMMARY)");
    },
    '22.Click <h1> "HOW I ADD VALUE"': function() {
        act.click(":containsExcludeChildren(HOW I ADD VALUE)");
    },
    '23.Click <h1> "WHY CHOOSE US?..."': function() {
        act.click(":containsExcludeChildren(WHY CHOOSE US EXAMPLE)");
    },
    '24.Click <h1> "BUSINESS PROFILE"': function() {
        act.click(":containsExcludeChildren(BUSINESS PROFILE)");
    },
    '25.Click <h1> "SERVICE VALUE PROP"': function() {
        act.click(":containsExcludeChildren(SERVICE VALUE PROP)");
    },
    '26.Click <h1> "THE ROADMAP FOR..."': function() {
        act.click(":containsExcludeChildren(THE ROADMAP FOR YOUR FUTURE BEGINS NOW)");
    },
    '27.Click <h1> "CASE STUDIES"': function() {
        act.click(":containsExcludeChildren(CASE STUDIES)");
    },
    '28.Click <h1> "RECOMMENDATIONS"': function() {
        act.click(":containsExcludeChildren(RECOMMENDATIONS)");
    },
    '29.Click <h1> "EXPERTISE"': function() {
        act.click(":containsExcludeChildren(EXPERTISE)");
    },
    '30.Click <h1> "STRENGTHS"': function() {
        act.click(":containsExcludeChildren(STRENGTHS)");
    },
    '31.Click <h1> "CONTACT ME TODAY!"': function() {
        act.click(":containsExcludeChildren(CONTACT ME TODAY)");
    },
    "32.Click body": function() {
        act.click("body");
    },
    "33.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '34.Click link "Project Template"': function() {
        act.click(":containsExcludeChildren(Project Template)");
    },
    '35.Click <h1> "HIGHLIGHT"': function() {
        act.click(":containsExcludeChildren(HIGHLIGHT)");
    },
    '36.Click <h1> "SECTION/DAY 1"': function() {
        act.click(":containsExcludeChildren(SECTIONDAY 1)");
    },
    '37.Click <h1> "SECTION/DAY 2"': function() {
        act.click(":containsExcludeChildren(SECTIONDAY 2)");
    },
    '38.Click <h1> "PORTFOLIO DISPLAY"': function() {
        act.click(":containsExcludeChildren(PORTFOLIO DISPLAY)");
    },
    '39.Click div "Project Template"': function() {
        act.click("#header-portfolio-name", {
            caretPos: 27
        });
    },
    "40.Click body": function() {
        act.click("body");
    }
};

