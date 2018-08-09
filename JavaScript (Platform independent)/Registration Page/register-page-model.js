import { Selector } from 'testcafe';

export default class RegisterPage {
    constructor () {

        // Register Page items from top to bottom in appreance on the page
        this.ifolio_logo = Selector('.navbar-brand');
        this.sign_in_register = Selector('.navbar-iFolio-signin');
        this.e_mail = Selector('#email');
        this.e_mail_required_label = Selector('.form-group.has-error').find('#email').sibling('.help-block');
        this.set_up_password = Selector('#password');
        this.show_password = Selector('#password_show');
        this.password_required_label = Selector('.form-group.has-error').find('#password').sibling('.help-block');;
        this.re_enter_password = Selector('#password_confirmation');
        this.sign_in_facebook = Selector('.btn.btn-facebook');
        this.sign_in_google = Selector('.btn.btn-google');
        this.get_started = Selector('.btn-sm');
        this.already_sign_in = Selector('.panel-footer').find('.link');

    }
}
