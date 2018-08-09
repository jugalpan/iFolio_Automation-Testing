"@fixture 162-171.Interaction elements";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["interaction elements"] = {
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
            return $("[title='Statistics']").find(" > img:nth(0)");
        };
        act.click(actionTarget);
    },
    "11.Wait 10000 milliseconds": function() {
        act.wait(1e4);
    },
    "12.Click select": function() {
        act.click("#select-startdate");
    },
    '13.Click option "Month"': function() {
        act.click(":containsExcludeChildren(Month)");
    },
    '14.Click span "Activity"': function() {
        act.click(":containsExcludeChildren(Activity)");
    },
    '15.Click span "Summary"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Summary)").eq(0);
        };
        act.click(actionTarget);
    },
    '16.Click link "Terms & conditions"': function() {
        act.click(":containsExcludeChildren(Terms conditions)");
    },
    '17.Click list item "HOW DO iFolio..."': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(HOW DO iFolio SERVICES WORK and WHAT IS AN iFOLIO The iFolio platform enables the development of targeted digital portfolios iFOLIO guided by tools fr)");
        };
        act.click(actionTarget);
    },
    '18.Click list item "COPYRIGHT: All..."': function() {
        act.click(":containsExcludeChildren(COPYRIGHT All content that we have produced is covered by our copyright including content on our site our digital portfolio templates and tools in our)");
    },
    '19.Drag list item "Use iFolio site..."': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(Use iFolio site or services to send pornographic material or content that is threatening violent hateful or objectionable according to iFolio opinion)");
        };
        act.drag(actionTarget, 53, 75, {
            offsetX: 438,
            offsetY: 4
        });
    },
    '20.Click list item "User is..."': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(User is responsible for your own password)");
        };
        act.click(actionTarget);
    },
    '21.Click list item "User is..."': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(User is responsible for how you distribute your iFOLIO link It is not up to iFolio to restrict that link)");
        };
        act.click(actionTarget);
    },
    '22.Drag list item "User is..."': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(User is responsible for how you distribute your iFOLIO link It is not up to iFolio to restrict that link)");
        };
        act.drag(actionTarget, 10, 39, {
            offsetX: 649,
            offsetY: 13
        });
    },
    '23.Click list item "UPDATES TO TERMS..."': function() {
        act.click(":containsExcludeChildren(UPDATES TO TERMS CONDITIONS OF SERVICE iFolio may update or amend the Terms and Conditions of Service from time to time and will notify users of these)");
    },
    '24.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#terms-conditions-modal").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    '25.Click link "Privacy policy"': function() {
        act.click(":containsExcludeChildren(Privacy policy)");
    },
    "26.Press key DOWN": function() {
        act.press("down");
    },
    "27.Press key DOWN": function() {
        act.press("down");
    },
    '28.Click list item "HOW DO iFolio..."': function() {
        var actionTarget = function() {
            return $("#privacy-policy-modal").find(":containsExcludeChildren(HOW DO iFolio SERVICES WORK and WHAT IS AN iFOLIO The iFolio platform enables the development of targeted digital portfolios iFOLIO guided by tools fr)");
        };
        act.click(actionTarget);
    },
    "29.Press key DOWN": function() {
        act.press("down");
    },
    "30.Press key DOWN": function() {
        act.press("down");
    },
    "31.Press key DOWN": function() {
        act.press("down");
    },
    "32.Press key DOWN": function() {
        act.press("down");
    },
    "33.Press key DOWN": function() {
        act.press("down");
    },
    "34.Press key DOWN": function() {
        act.press("down");
    },
    "35.Press key DOWN": function() {
        act.press("down");
    },
    "36.Press key DOWN": function() {
        act.press("down");
    },
    "37.Press key DOWN": function() {
        act.press("down");
    },
    "38.Press key DOWN": function() {
        act.press("down");
    },
    "39.Press key DOWN": function() {
        act.press("down");
    },
    "40.Press key DOWN": function() {
        act.press("down");
    },
    "41.Press key DOWN": function() {
        act.press("down");
    },
    "42.Press key DOWN": function() {
        act.press("down");
    },
    "43.Press key DOWN": function() {
        act.press("down");
    },
    "44.Press key DOWN": function() {
        act.press("down");
    },
    "45.Press key DOWN": function() {
        act.press("down");
    },
    '46.Click list item "Use scraping tools..."': function() {
        var actionTarget = function() {
            return $("#privacy-policy-modal").find(":containsExcludeChildren(Use scraping tools or tools that collect or aggregate data)");
        };
        act.click(actionTarget);
    },
    '47.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#privacy-policy-modal").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    "48.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '49.Click link "Dashboard"': function() {
        act.click("#popups-dashboard");
    },
    "50.Click image": function() {
        var actionTarget = function() {
            return $(".portfolio-delete").find(" > img:nth(0)").eq(2);
        };
        handleConfirm(true);
        act.click(actionTarget);
    },
    '51.Click list item "Project Template"': function() {
        act.click(":containsExcludeChildren(Project Template)");
    },
    '52.Dblclick div "iFolio 3"': function() {
        act.dblclick("#header-portfolio-name", {
            caretPos: 21
        });
    },
    '53.Type in div "Project Template"': function() {
        act.type("#header-portfolio-name", "Project Template", {
            caretPos: 21
        });
    },
    "54.Press key ENTER": function() {
        act.press("enter");
    },
    "55.Click image": function() {
        var actionTarget = function() {
            return $(".avatar-image").eq(0);
        };
        act.click(actionTarget);
    },
    '56.Click link "Dashboard"': function() {
        act.click("#popups-dashboard");
    },
    "57.Click image": function() {
        var actionTarget = function() {
            return $(".portfolio-delete").find(" > img:nth(0)").eq(2);
        };
        handleConfirm(false);
        act.click(actionTarget);
    }
};

