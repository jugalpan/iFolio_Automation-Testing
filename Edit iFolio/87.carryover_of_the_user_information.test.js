"@fixture 87.Carryover of the user information";
"@page http://dev99.it-aces.com/student/portfolio/view/1680";

"@test"["carryover of user information"] = {
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
    '7.Click image "edit"': function() {
        act.click("[alt='edit']");
    },
    "8.Click image": function() {
        var actionTarget = function() {
            return $(".popup-table-item-icon-big").eq(0);
        };
        act.click(actionTarget);
    },
    '9.Click div "Save"': function() {
        act.click("#setHeadshot");
    },
    "10.Click div": function() {
        var actionTarget = function() {
            return $(".folio-popup-close.header-with-icon-icon.glyphicon.glyphicon-remove[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    },
    '11.Drag list item "17th Street Junior..."': function() {
        act.drag(":containsExcludeChildren(17th Street Junior High School Westminster)", 98, 58, {
            offsetX: 7,
            offsetY: 10
        });
    },
    "12.Click div": function() {
        act.click(".general-info-content.container");
    },
    '13.Click image "edit"': function() {
        act.click("[alt='edit']");
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $(".popup-table-item-3.popup-table-item-darkgreen").eq(1);
        };
        act.click(actionTarget);
    },
    '15.Click div "Save"': function() {
        act.click("#setHeadshot");
    },
    "16.Click div": function() {
        var actionTarget = function() {
            return $(".folio-popup-close.header-with-icon-icon.glyphicon.glyphicon-remove[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    },
    '17.Drag list item "17th Street Junior..."': function() {
        act.drag(":containsExcludeChildren(17th Street Junior High School Westminster)", 191, 63, {
            offsetX: 729,
            offsetY: 3
        });
    },
    '18.Click image "Change avatar...."': function() {
        act.click("#avatar-control");
    },
    "19.Click div": function() {
        var actionTarget = function() {
            return $(".folio-popup-close.header-with-icon-icon.glyphicon.glyphicon-remove[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    }
};

