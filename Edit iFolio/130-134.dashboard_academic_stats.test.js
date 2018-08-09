"@fixture 130-134.Dashboard Academic stats";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Dashboard Acad stats"] = {
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
    '12.Click span "Edit Information"': function() {
        act.click(":containsExcludeChildren(Edit Information)");
    },
    '13.Click div "Academic Stats"': function() {
        var actionTarget = function() {
            return $("#tab_profileform").find(":containsExcludeChildren(Academic Stats)");
        };
        act.click(actionTarget);
    },
    '14.Click select "gpa"': function() {
        act.click(".form-control[data-original='0'][name='gpa']");
    },
    '15.Click option "1"': function() {
        var actionTarget = function() {
            return $(".form-control[data-original='0'][name='gpa']").find(" > option:nth(80)");
        };
        act.click(actionTarget);
    },
    '16.Click select "class_rank"': function() {
        act.click(".form-control[data-original='0'][name='class_rank']");
    },
    '17.Click option "5"': function() {
        var actionTarget = function() {
            return $(".form-control[data-original='0'][name='class_rank']").find(" > option:nth(145)");
        };
        act.click(actionTarget);
    },
    '18.Click submit button "Save"': function() {
        act.click(".welcome-button.welcome-button-done");
    },
    '19.Click span "1"': function() {
        act.click("#info_gpa");
    },
    '20.Drag span "5"': function() {
        act.drag("#info_class_rank", -87, -3, {
            offsetX: 7,
            offsetY: 10
        });
    },
    "21.Click list item": function() {
        var actionTarget = function() {
            return $(".welcome-info-info-text.welcome-info-info-stats.welcome-info-highschool").find(" > ul:nth(0) > li:nth(4)");
        };
        act.click(actionTarget);
    },
    '22.Click span "Edit Information"': function() {
        act.click(":containsExcludeChildren(Edit Information)");
    },
    '23.Click div "Academic Stats"': function() {
        var actionTarget = function() {
            return $("#tab_profileform").find(":containsExcludeChildren(Academic Stats)");
        };
        act.click(actionTarget);
    },
    '24.Click select "gpa"': function() {
        act.click(".form-control[data-original='1'][name='gpa']");
    },
    '25.Click option "0"': function() {
        var actionTarget = function() {
            return $(".form-control[data-original='1'][name='gpa']").find(" > option:nth(100)");
        };
        act.click(actionTarget);
    },
    '26.Click select "class_rank"': function() {
        act.click(".form-control[data-original='5'][name='class_rank']");
    },
    '27.Click option "0"': function() {
        var actionTarget = function() {
            return $(".form-control[data-original='5'][name='class_rank']").find(" > option:nth(150)");
        };
        act.click(actionTarget);
    },
    '28.Click submit button "Save"': function() {
        act.click(".welcome-button.welcome-button-done");
    },
    '29.Click span "Edit Information"': function() {
        act.click(":containsExcludeChildren(Edit Information)");
    },
    '30.Click div "Academic Stats"': function() {
        var actionTarget = function() {
            return $("#tab_profileform").find(":containsExcludeChildren(Academic Stats)");
        };
        act.click(actionTarget);
    },
    '31.Click button "Cancel"': function() {
        var actionTarget = function() {
            return $("#modalInfoForm").find(".welcome-button.welcome-button-back[data-show='#tab_welcome']");
        };
        act.click(actionTarget);
    }
};

