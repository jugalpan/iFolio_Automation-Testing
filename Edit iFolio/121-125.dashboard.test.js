"@fixture 121-125.Dashboard";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Dashboard"] = {
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
    "10.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click link "Dashboard"': function() {
        act.click("#popups-dashboard");
    },
    '12.Drag div "Example1 Test case"': function() {
        var actionTarget = function() {
            return $("#modalDashboard").find(":containsExcludeChildren(Example1 Test case)");
        };
        act.drag(actionTarget, 175, 0, {
            offsetX: 3,
            offsetY: 18
        });
    },
    '13.Click div "Example1 Test case"': function() {
        var actionTarget = function() {
            return $("#modalDashboard").find(":containsExcludeChildren(Example1 Test case)");
        };
        act.click(actionTarget);
    },
    '14.Click paragraph "jugalpan@gmail.com"': function() {
        var actionTarget = function() {
            return $("#modalDashboard").find(":containsExcludeChildren(jugalpangmailcom)");
        };
        act.click(actionTarget);
    },
    '15.Click paragraph "(762)-728-0527"': function() {
        var actionTarget = function() {
            return $("#modalDashboard").find(":containsExcludeChildren(7627280527)");
        };
        act.click(actionTarget);
    },
    "16.Click div": function() {
        act.click(".welcome-tips-link.welcome-tips-links-next[data-link='https://vimeo.com/222888852']");
    },
    "17.Click div": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-remove").eq(15);
        };
        act.click(actionTarget);
    },
    "18.Click div": function() {
        act.click(".welcome-tips-link.welcome-tips-links-next[data-link='https://vimeo.com/222380982']");
    },
    "19.Click div": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-remove").eq(15);
        };
        act.click(actionTarget);
    },
    "20.Click div": function() {
        act.click(".welcome-tips-link.welcome-tips-links-next[data-link='https://vimeo.com/230088404/9fb1a6c56b']");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-remove").eq(15);
        };
        act.click(actionTarget);
    },
    '22.Click span "Set to Default..."': function() {
        act.click(":containsExcludeChildren(Set to Default iFolio)");
    },
    '23.Click span "Set to Default..."': function() {
        act.click(":containsExcludeChildren(Set to Default iFolio)");
    },
    "24.Click image": function() {
        var actionTarget = function() {
            return $(".portfolio-delete").find(" > img:nth(0)").eq(2);
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '25.Click list item "Project Template"': function() {
        act.click(":containsExcludeChildren(Project Template)");
    },
    '26.Select in div "iFolio 3"': function() {
        act.select("#header-portfolio-name", 29, 21);
    },
    '27.Type in div "Project Template"': function() {
        act.type("#header-portfolio-name", "Project Template", {
            caretPos: 21
        });
    },
    "28.Press key ENTER": function() {
        act.press("enter");
    },
    "29.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '30.Click link "Dashboard"': function() {
        act.click("#popups-dashboard");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $("#tab_welcome").find(".popup-selected-indicator.glyphicon.glyphicon-ok").eq(0);
        };
        act.click(actionTarget);
    },
    '32.Click span "Set to Default..."': function() {
        act.click(":containsExcludeChildren(Set to Default iFolio)");
    },
    '33.Click span "Set to Default..."': function() {
        act.click(":containsExcludeChildren(Set to Default iFolio)");
    },
    "34.Click image": function() {
        var actionTarget = function() {
            return $("#modalDashboard").find(".avatar-image");
        };
        act.click(actionTarget);
    },
    '35.Click div "Close"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Close)").eq(3);
        };
        act.click(actionTarget);
    }
};

