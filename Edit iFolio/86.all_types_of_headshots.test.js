"@fixture 86.All types of headshots";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["all types of headshots"] = {
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
    "8.Click div": function() {
        var actionTarget = function() {
            return $(".folio-popup-close.header-with-icon-icon.glyphicon.glyphicon-remove[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    },
    '9.Click image "edit"': function() {
        act.click("[alt='edit']");
    },
    "10.Click div": function() {
        act.click(".folio-popup-section-activate.header-with-icon-icon.glyphicon.glyphicon-chevron-down");
    },
    "11.Click image": function() {
        var actionTarget = function() {
            return $(".popup-table-item-icon-full-size.hover-shadow-target").eq(1);
        };
        act.click(actionTarget);
    },
    '12.Click div "Save"': function() {
        act.click("#setHeadshot");
    },
    '13.Click div "Close"': function() {
        var actionTarget = function() {
            return $(".folio-popup-ok.folio-popup-button-rounded[data-dismiss='modal']").eq(2);
        };
        act.click(actionTarget);
    },
    '14.Click image "Change avatar...."': function() {
        act.click("#avatar-control");
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $(".folio-popup-close.header-with-icon-icon.glyphicon.glyphicon-remove[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    },
    '16.Click image "edit"': function() {
        act.click("[alt='edit']");
    },
    "17.Click div": function() {
        act.click(".folio-popup-section-activate.header-with-icon-icon.glyphicon.glyphicon-chevron-down");
    },
    "18.Click image": function() {
        act.click(".popup-table-item-icon-full-size.popup-c-item-rounded.hover-shadow-target");
    },
    '19.Click div "Save"': function() {
        act.click("#setHeadshot");
    },
    '20.Click div "Close"': function() {
        var actionTarget = function() {
            return $(".folio-popup-ok.folio-popup-button-rounded[data-dismiss='modal']").eq(2);
        };
        act.click(actionTarget);
    }
};

