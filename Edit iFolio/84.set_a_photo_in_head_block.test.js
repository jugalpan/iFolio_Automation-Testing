"@fixture 84.Set a photo in head block";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["Set a photo in head block"] = {
    '1.Type in input "Username or E-mail"': function() {
        act.type("#email", "admin@admin.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#password", "12ifolio!@");
    },
    '3.Click submit button "Log In"': function() {
        act.click(":containsExcludeChildren(Log In)");
    },
    '4.Click <i> "edit"': function() {
        var actionTarget = function() {
            return $(".admin-users-edit.show-user-edit-modal[data-route='http://dev99.it-aces.com/admin/users/1213/edit']").find(" > i:nth(0)");
        };
        act.click(actionTarget);
    },
    '5.Click link "Portfolios"': function() {
        act.click(":containsExcludeChildren(Portfolios)");
    },
    '6.Click link "edit"': function() {
        var actionTarget = function() {
            return $("#user-edit-modal-portfolios").find(":containsExcludeChildren(edit)").eq(0);
        };
        act.click(actionTarget);
    },
    '7.Click image "Change avatar...."': function() {
        act.click("#avatar-control");
    },
    '8.Click div "MY UPLOADS"': function() {
        act.click(":containsExcludeChildren(MY UPLOADS)");
    },
    '9.Click div "iFOLIO STOCK"': function() {
        act.click(":containsExcludeChildren(iFOLIO STOCK)");
    },
    "10.Click image": function() {
        act.click("body > div:nth(17) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > img:nth(0)");
    },
    '11.Click image "Change avatar...."': function() {
        act.click("#avatar-control");
    },
    "12.Click image": function() {
        act.click("body > div:nth(17) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > img:nth(0)");
    },
    '13.Click span "PUBLISH"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(PUBLISH)").eq(0);
        };
        act.click(actionTarget);
    },
    '14.Click div "Publish"': function() {
        act.click("#publish");
    },
    '15.Click div "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};