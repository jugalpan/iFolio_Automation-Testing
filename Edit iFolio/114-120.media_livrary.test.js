"@fixture 114-120.Media livrary";
"@page http://dev99.it-aces.com/student/portfolio/view/1705";

"@test"["media library"] = {
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
    '10.Click div "Edit media file...."': function() {
        act.click(".changeable-media-control[title='Edit media file. Optimum image size 1200x900']");
    },
    '11.Click div "ADD VIDEO"': function() {
        act.click(":containsExcludeChildren(ADD VIDEO)");
    },
    '12.Click input "Paste Youtube or..."': function() {
        act.click("#video_link");
    },
    '13.Rclick input "Paste Youtube or..."': function() {
        act.rclick("#video_link");
    },
    '14.Click submit button "Save"': function() {
        act.click("#save_video_link");
    },
    '15.Click div "Edit media file...."': function() {
        act.click(".changeable-media-control[title='Edit media file. Optimum image size 1200x900']");
    },
    '16.Click div "iFOLIO STOCK"': function() {
        act.click(":containsExcludeChildren(iFOLIO STOCK)");
    },
    "17.Click image": function() {
        act.click("body > div:nth(17) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > img:nth(0)");
    },
    '18.Click div "Edit media file...."': function() {
        act.click(".changeable-media-control[title='Edit media file. Optimum image size 1200x900']");
    },
    '19.Click div "MY UPLOADS"': function() {
        act.click(":containsExcludeChildren(MY UPLOADS)");
    },
    "20.Click span": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-refresh").eq(0);
        };
        act.click(actionTarget);
    },
    "21.Click span": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-refresh").eq(0);
        };
        act.click(actionTarget);
    },
    "22.Click span": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-refresh").eq(0);
        };
        act.click(actionTarget);
    },
    "23.Click span": function() {
        var actionTarget = function() {
            return $(".glyphicon.glyphicon-refresh").eq(0);
        };
        act.click(actionTarget);
    },
    '24.Click file button "Please upload a..."': function() {
        act.click("#file_upload");
    },
    '25.Upload "work.png" file': function() {
        act.upload("#file_upload", "./uploads/work.png");
    },
    '26.Click submit button "Upload"': function() {
        act.click("#upload_photo");
    },
    "27.Click span": function() {
        var actionTarget = function() {
            return $("[title='Delete photo'].btn.btn-danger.btn-xs.delete").find(" > span:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "28.Click div": function() {
        var actionTarget = function() {
            return $(".folio-popup-close.header-with-icon-icon.glyphicon.glyphicon-remove[data-dismiss='modal']").eq(3);
        };
        act.click(actionTarget);
    },
    '29.Click div "Edit media file...."': function() {
        act.click(".changeable-media-control[title='Edit media file. Optimum image size 1200x900']");
    },
    '30.Click div "ADD VIDEO"': function() {
        act.click(":containsExcludeChildren(ADD VIDEO)");
    },
    '31.Click input "Paste Youtube or..."': function() {
        act.click("#video_link");
    },
    '32.Rclick input "Paste Youtube or..."': function() {
        act.rclick("#video_link");
    },
    '33.Click submit button "Save"': function() {
        act.click("#save_video_link");
    },
    '34.Click div "Close"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Close)").eq(3);
        };
        act.click(actionTarget);
    }
};

