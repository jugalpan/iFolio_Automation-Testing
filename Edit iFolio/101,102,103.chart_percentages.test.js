"@fixture 101,102,103.Chart percentages";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["chart percentages"] = {
    '1.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@admin.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#password", "12ifolio.");
    },
    "3.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '4.Type in password input "Password"': function() {
        act.type("#password", "!@");
    },
    '5.Click submit button "Log In"': function() {
        act.click(":containsExcludeChildren(Log In)");
    },
    '6.Click link "Accounts"': function() {
        act.click(":containsExcludeChildren(Accounts)");
    },
    '7.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $(".admin-accounts-edit[data-route='http://dev99.it-aces.com/admin/accounts/1316/edit']").find(" > i:nth(0)");
        };
        act.click(actionTarget);
    },
    '8.Click link "log in to account"': function() {
        act.click(":containsExcludeChildren(log in to account)");
    },
    '9.Click <i> "edit"': function() {
        act.click(":containsExcludeChildren(edit)");
    },
    '10.Click link "Portfolios"': function() {
        act.click(":containsExcludeChildren(Portfolios)");
    },
    '11.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(1);
        };
        act.click(actionTarget);
    },
    "12.Click circle": function() {
        act.click("#SvgjsCircle1015");
    },
    '13.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(0);
        };
        act.click(actionTarget);
    },
    '14.Click option "20"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").find(" > option:nth(4)").eq(0);
        };
        act.click(actionTarget);
    },
    '15.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(1);
        };
        act.click(actionTarget);
    },
    '16.Click option "40"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(40)").eq(6);
        };
        act.click(actionTarget);
    },
    '17.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(2);
        };
        act.click(actionTarget);
    },
    '18.Click option "70"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(70)").eq(2);
        };
        act.click(actionTarget);
    },
    '19.Click submit button "Save changes"': function() {
        act.click("#save");
    },
    "20.Click <svg>": function() {
        act.click("#SvgjsSvg1026");
    },
    '21.Click submit button "Add New Item"': function() {
        act.click("#add");
    },
    '22.Type in input "names[]"': function() {
        var actionTarget = function() {
            return $(".named-form-chart").find("[name='names[]']").eq(3);
        };
        act.type(actionTarget, "test");
    },
    '23.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(3);
        };
        act.click(actionTarget);
    },
    '24.Click option "10"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").find(" > option:nth(2)").eq(3);
        };
        act.click(actionTarget);
    },
    '25.Click submit button "Save changes"': function() {
        act.click("#save");
    },
    "26.Click circle": function() {
        act.click("#SvgjsCircle1055");
    },
    "27.Click submit button": function() {
        var actionTarget = function() {
            return $(".btn.btn-danger.remove-button").eq(0);
        };
        act.click(actionTarget);
    },
    '28.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(0);
        };
        act.click(actionTarget);
    },
    '29.Click option "40"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(40)").eq(5);
        };
        act.click(actionTarget);
    },
    '30.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(1);
        };
        act.click(actionTarget);
    },
    '31.Click option "45"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(45)").eq(1);
        };
        act.click(actionTarget);
    },
    '32.Click select "percents[]"': function() {
        var actionTarget = function() {
            return $(".form-control[name='percents[]']").eq(2);
        };
        act.click(actionTarget);
    },
    '33.Click option "50"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(50)").eq(9);
        };
        act.click(actionTarget);
    },
    '34.Click submit button "Save changes"': function() {
        act.click("#save");
    },
    "35.Click <svg>": function() {
        act.click("#SvgjsSvg1069");
    },
    '36.Click submit button "Close"': function() {
        act.click("#close");
    }
};

