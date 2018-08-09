import { Selector } from 'testcafe';

export default class ResetPage {
    constructor () {

        // Register Page items from top to bottom in appreance on the page
        this.ifolio_logo = Selector('.navbar-brand');
        this.sign_in_register = Selector('.navbar-iFolio-signin');
        this.e_mail = Selector('#email');
        this.e_mail_required_label = Selector('.form-group.has-error').find('#email').sibling('.help-block');
        this.send_link = Selector('.btn.btn-sm.btn-iFolio');
        this.already_sign_in = Selector('.panel-footer').find('.link');
        this.sent_steps_in_mail = Selector('.alert.alert-success');

    }
}
