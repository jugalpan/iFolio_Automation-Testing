import { Selector } from 'testcafe';

export default class LoginPage {
    constructor () {

        // Register Page items from top to bottom in appreance on the page
        this.ifolio_logo = Selector('.navbar-brand');
        this.sign_in_register = Selector('.navbar-iFolio-signin');
        this.e_mail = Selector('#email');
        this.e_mail_required_label = Selector('.form-group.has-error').find('#email').sibling('.help-block');
        this.set_up_password = Selector('#password');
        this.show_password = Selector('#password_show');
        this.password_required_label = Selector('.form-group.has-error').find('#password').sibling('.help-block');;
        this.remember_me = Selector('#form-group').child('.checkbox').find('input').withText(' Remember me ');
        this.forgot_password = Selector('#form-group').child('.checkbox').sibling('.float-right.link').withText('Forgot Password?');
        this.sign_in_facebook = Selector('.btn.btn-facebook');
        this.sign_in_google = Selector('.btn.btn-google');
        this.login = Selector('.btn.btn-sm.btn-iFolio');
        this.sign_up_now = Selector('.panel-footer').find('.link');

    }
}
