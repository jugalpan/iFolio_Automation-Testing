"@fixture 156-161.Edit Vcard";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Edit Vcard"] = {
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
    "10.Click link": function() {
        act.click("#vcardEdit");
    },
    '11.Click input "firstname"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='firstname']");
        };
        act.click(actionTarget, {
            caretPos: 0
        });
    },
    "12.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '13.Select in input "lastname"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='lastname']");
        };
        act.select(actionTarget, 9, 0);
    },
    "14.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '15.Select in input "phone_number"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='phone_number']");
        };
        act.select(actionTarget, 0, 0);
    },
    '16.Dblclick input "phone_number"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='phone_number']");
        };
        act.dblclick(actionTarget, {
            caretPos: 10
        });
    },
    '17.Click input "phone_number"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='phone_number']");
        };
        act.click(actionTarget, {
            caretPos: 0
        });
    },
    "18.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '19.Dblclick input "school_name"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='school_name']");
        };
        act.dblclick(actionTarget, {
            caretPos: 0
        });
    },
    '20.Click input "school_name"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='school_name']");
        };
        act.click(actionTarget, {
            caretPos: 0
        });
    },
    "21.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '22.Dblclick input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.dblclick(actionTarget, {
            caretPos: 15
        });
    },
    '23.Click input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.click(actionTarget, {
            caretPos: 0
        });
    },
    "24.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '25.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    '26.Type in input "firstname"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='firstname']");
        };
        act.type(actionTarget, "Example1");
    },
    '27.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    '28.Type in input "lastname"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='lastname']");
        };
        act.type(actionTarget, "Test case");
    },
    '29.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    '30.Type in input "phone_number"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='phone_number']");
        };
        act.type(actionTarget, "7627280527");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(".folio-popup-buttons");
        };
        act.click(actionTarget);
    },
    '32.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    '33.Type in input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.type(actionTarget, "jugalpan@gmail.com");
    },
    '34.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    "35.Click link": function() {
        act.click("#vcardEdit");
    },
    '36.Select in input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.select(actionTarget, 18, 0);
    },
    "37.Press key BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE": function() {
        act.press("backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace");
    },
    '38.Type in input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.type(actionTarget, "jugal.panchal@ifoliocorp.com");
    },
    '39.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    "40.Click link": function() {
        act.click("#vcardEdit");
    },
    '41.Select in input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.select(actionTarget, 28, 0);
    },
    '42.Type in input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.type(actionTarget, "jugalpan@gmail.com", {
            caretPos: 0
        });
    },
    '43.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    },
    "44.Click link": function() {
        act.click("#vcardEdit");
    },
    '45.Select in input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.select(actionTarget, 18, 0);
    },
    "46.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "47.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "48.Press key BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE BACKSPACE": function() {
        act.press("backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace backspace");
    },
    '49.Click div "Cancel"': function() {
        act.click("#popup-share-cancel");
    },
    "50.Click link": function() {
        act.click("#vcardEdit");
    },
    '51.Click input "email"': function() {
        var actionTarget = function() {
            return $("#popup-vcard-form").find("[name='email']");
        };
        act.click(actionTarget);
    },
    "52.Click div": function() {
        var actionTarget = function() {
            return $(".popup-form-edit").eq(0);
        };
        act.click(actionTarget);
    },
    '53.Click div "Save"': function() {
        var actionTarget = function() {
            return $("#popup-vcard").find(":containsExcludeChildren(Save)");
        };
        act.click(actionTarget);
    }
};

