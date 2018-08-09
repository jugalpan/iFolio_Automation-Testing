"@fixture 148-155.Share window";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["Share window"] = {
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
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(1);
        };
        act.click(actionTarget);
    },
    '10.Click span "PREVIEW"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PREVIEW)").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click <i>": function() {
        act.click(".fa.fa-share-square-o");
    },
    '12.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '13.Type in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.type(actionTarget, "!!!!");
    },
    '14.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '15.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '16.Select in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.select(actionTarget, 4, 0);
    },
    "17.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "18.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "19.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "20.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '21.Type in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.type(actionTarget, "sample");
    },
    '22.Type in input "email"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='email']");
        };
        act.type(actionTarget, "####");
    },
    '23.Click text area "custom_message"': function() {
        act.click(".form-control[name='custom_message']");
    },
    '24.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '25.Click span "Message preview"': function() {
        act.click(":containsExcludeChildren(Message preview)");
    },
    '26.Drag div "sample very nice..."': function() {
        act.drag(":containsExcludeChildren(sample very nice to meet youHere is my iFolio httpdev99itacescompE8TC7hJhtmlkJctG9My contact info is here httpdev99itacescompE8TC7hJvcfMy mobile is 1 )", 243, 135, {
            offsetX: 6,
            offsetY: 14
        });
    },
    '27.Click div "sample very nice..."': function() {
        act.click(":containsExcludeChildren(sample very nice to meet youHere is my iFolio httpdev99itacescompE8TC7hJhtmlkJctG9My contact info is here httpdev99itacescompE8TC7hJvcfMy mobile is 1 )");
    },
    '28.Select in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.select(actionTarget, 6, 0);
    },
    '29.Type in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.type(actionTarget, "Mr.Sample", {
            caretPos: 0
        });
    },
    '30.Select in input "email"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='email']");
        };
        act.select(actionTarget, 4, 0);
    },
    "31.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '32.Type in input "phone_number"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='phone_number']");
        };
        act.type(actionTarget, "000", {
            caretPos: 2
        });
    },
    '33.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '34.Type in text area "custom_message"': function() {
        act.type(".form-control[name='custom_message'][data-gramm='true'][data-txt_gramm_id='dc52795a-e527-52ab-4e53-b443f13e6d95'][data-gramm_id='dc52795a-e527-52ab-4e53-b443f13e6d95'][data-gramm_editor='true']", "$$$$$$$$", {
            caretPos: 57
        });
    },
    '35.Type in input "email"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='email']");
        };
        act.type(actionTarget, "####");
    },
    '36.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '37.Select in input "email"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='email']");
        };
        act.select(actionTarget, 4, 0);
    },
    "38.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "39.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "40.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "41.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '42.Type in input "email"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='email']");
        };
        act.type(actionTarget, "jugalpan@gmail.com");
    },
    '43.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '44.Click div "Ok"': function() {
        act.click("#popup-published-done");
    },
    "45.Click <i>": function() {
        act.click(".fa.fa-share-square-o");
    },
    '46.Click input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.click(actionTarget);
    },
    '47.Click text area "custom_message"': function() {
        act.click(".form-control[name='custom_message']", {
            caretPos: 56
        });
    },
    '48.Type in input "name"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='name']");
        };
        act.type(actionTarget, "Mr. Example");
    },
    '49.Click input "emailbcc"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='emailbcc']");
        };
        act.click(actionTarget);
    },
    '50.Type in input "email"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='email']");
        };
        act.type(actionTarget, "jugalpan@gmail.com");
    },
    '51.Type in input "emailbcc"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='emailbcc']");
        };
        act.type(actionTarget, "jugalpan@");
    },
    "52.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "53.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "54.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "55.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '56.Type in input "emailbcc"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='emailbcc']");
        };
        act.type(actionTarget, ".panchal@ifoliocorp.com");
    },
    '57.Type in input "company"': function() {
        var actionTarget = function() {
            return $(".folio-popup-vertical-form").find("[name='company']");
        };
        act.type(actionTarget, "iFolio");
    },
    '58.Click div "Send"': function() {
        act.click("#popup-share-done");
    },
    '59.Click div "Ok"': function() {
        act.click("#popup-published-done");
    },
    "60.Click body": function() {
        act.click("body");
    }
};

"@test"["checking statistics of sharing iFolio"] = {
    '1.Click input "Username or E-mail"': function() {
        act.click("#email");
    },
    '2.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@admin.com");
    },
    '3.Type in password input "Password"': function() {
        act.type("#password", "12ifolio!@");
    },
    '4.Click submit button "Log In"': function() {
        act.click(":containsExcludeChildren(Log In)");
    },
    '5.Click link "Accounts"': function() {
        act.click(":containsExcludeChildren(Accounts)");
    },
    '6.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $(".admin-accounts-edit[data-route='http://dev99.it-aces.com/admin/accounts/1316/edit']").find(" > i:nth(0)");
        };
        act.click(actionTarget);
    },
    '7.Click link "log in to account"': function() {
        act.click(":containsExcludeChildren(log in to account)");
    },
    '8.Click <i> "edit"': function() {
        act.click(":containsExcludeChildren(edit)");
    },
    '9.Click link "Portfolios"': function() {
        act.click(":containsExcludeChildren(Portfolios)");
    },
    '10.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(1);
        };
        act.click(actionTarget);
    },
    "11.Click image": function() {
        var actionTarget = function() {
            return $("[title='Statistics']").find(" > img:nth(0)");
        };
        act.click(actionTarget);
    },
    '12.Click span "Shared stats"': function() {
        act.click(":containsExcludeChildren(Shared stats)");
    },
    '13.Click table cell "Mr.Sample"': function() {
        act.click(":containsExcludeChildren(MrSample)");
    },
    '14.Click table cell "Mr. Example"': function() {
        act.click(":containsExcludeChildren(Mr Example)");
    },
    '15.Drag table cell "No visit"': function() {
        var actionTarget = function() {
            return $("#kJctG9").find(":containsExcludeChildren(No visit)");
        };
        act.drag(actionTarget, 53, 0, {
            offsetX: 7,
            offsetY: 18
        });
    },
    '16.Drag table cell "No visit"': function() {
        var actionTarget = function() {
            return $("#JWAwqf").find(":containsExcludeChildren(No visit)");
        };
        act.drag(actionTarget, 54, 1, {
            offsetX: 6,
            offsetY: 17
        });
    }
};

