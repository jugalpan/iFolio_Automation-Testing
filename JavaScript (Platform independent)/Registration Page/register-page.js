import { ClientFunction } from 'testcafe';
import Page from './register-page-model';

// Register page on iFolio
fixture`Sample`
    .page`http://dev99.it-aces.com/register`;

const page = new Page();

// 18.Input of invalid values in the username field
test('invalid_username', async t => {
    await t
        .typeText(page.e_mail, '!#$%^&*@123')
        .typeText(page.set_up_password, 'invalid')
        .typeText(page.re_enter_password, 'invalid')
        .click(page.get_started)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')
        .expect(page.e_mail_required_label.innerText).eql('The email must be a valid email address.');

});

// test for existing username or e-mail address
test('existing_username', async t => {
    await t
        .typeText(page.e_mail, 'admin@admin.com')
        .typeText(page.set_up_password, 'invalid')
        .typeText(page.re_enter_password, 'invalid')
        .click(page.get_started)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
        .expect(page.e_mail_required_label.innerText).eql('This email address has already been registered');

});

// test for unregistered e-mail
test('existing_username', async t => {
    await t
        .typeText(page.e_mail, 'sample@testing.com')
        .typeText(page.set_up_password, 'example')
        .typeText(page.re_enter_password, 'example')
        .click(page.get_started)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
        .expect(page.e_mail_required_label.innerText).eql('This email is not registered');

});


// 19.Entering invalid characters in the fields username password
test('invalid_e_mail_password', async t => {
    await t
        .typeText(page.e_mail, '~+_%*-+@123')
        .typeText(page.set_up_password, '~+_%^|{;>*&%#!')
        .typeText(page.re_enter_password, '~+_%^|{;>*&%#!')
        .click(page.get_started)

    // assertion to check for invalid characters in username and password
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
        .expect(page.e_mail_required_label.innerText).eql('The email must be a valid email address.');

});

// 20.Check for empty fields
test('empty_fields', async t => {
    await t
        .click(page.get_started)

    // assertion to check empty fields
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
        .expect(page.e_mail_required_label.innerText).eql('The email field is required.');
    await t
        .expect(page.password_required_label.innerText).eql('The password field is required.');


});

// 21.Long text input field values ​​into username passowrd
test('long_text_e_mail_password', async t => {
    await t
        .typeText(page.e_mail, 'thisisjustanexampleofverylongtextfortestingpurposeintheemailfieldontheregistrationpageofifolioandrecordingtherestresultsforit@texting.com')
        .typeText(page.set_up_password, 'thisisjustanexampleofverylongtextfortestingpurposeinthepasswordfieldontheregistrationpageofifolioandrecordingtherestresultsforit')
        .typeText(page.re_enter_password, 'thisisjustanexampleofverylongtextfortestingpurposeinthepasswordfieldontheregistrationpageofifolioandrecordingtherestresultsforit')
        .click(page.get_started)

    // assertion to check very long test in email and password field
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
        .expect(page.e_mail_required_label.innerText).eql('The email must be a valid email address.', 'email address too long.');

});

// 22.SHOW function for checking the password field
test('show_password', async t => {
    await t
        .typeText(page.e_mail, 'example@sample.com')
        .typeText(page.set_up_password, 'invalid')
        .click(page.show_password)

    // assertion to check SHOW button working
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
    //
    //

});

// test to check if you enter incorrect string in re-enter password.
test('un-matched password', async t => {
    await t
        .typeText(page.e_mail, 'example@sample.com')
        .typeText(page.set_up_password, 'validate')
        .typeText(page.re_enter_password, 'invalid')
        .click(page.get_started)

    // assertion to check if user entered incorrect text in re-enter password
    var web_url = ClientFunction(() => window.location.href);
    await t
        .expect(web_url()).contains('dev99.it-aces.com/register')   //check if it is on correct webpage
        .expect(page.e_mail_required_label.innerText).eql('This email is not registered')
        .expect(page.password_required_label.innerText).eql('The password confirmation does not match.');

});


// 23.Check corresponding transition to the screen when you press the sign in button with Facebook
test('sign_in_with_facebook', async t => {
    await t
        .click(page.sign_in_facebook)

    // assertion to check transition to facebook login page
    var fb_url = ClientFunction(() => window.location.href);
    await t
        .expect(fb_url()).contains('www.facebook.com/login')   //check if it navigated to correct webpage

});



// 24.Check corresponding transition to the screen when you press the sign in button with G+
test('sign_in_with_google', async t => {
    await t
        .click(page.sign_in_google)

    // assertion to check transition to Google login page
    var google_url = ClientFunction(() => window.location.href);
    await t
        .expect(google_url()).contains('accounts.google.com/signin')   //check if it navigated to correct webpage

});

// 25.Switching to the appropriate screen when acquired on the button Sign in 'Already have an account?'
test('sign_in_button', async t => {
    await t
        .click(page.already_sign_in)

    //assertion to check if the action landed on the sign in page
    var sign_in_url = ClientFunction(() => window.location.href);
    await t
        .expect(sign_in_url()).contains('dev99.it-aces.com/login')   //check if it navigated to correct webpage

});

// 26.Switching to the appropriate screen when acquired on the button Get Started (the correct data for registration)
//
//
//

// 27.Switching to the appropriate screen button Sign in / Register
test('sign_in_register', async t => {
    await t
        .click(page.sign_in_register)

    //assertion to check if the action landed on the sign in page
    var sign_in_register_url = ClientFunction(() => window.location.href);
    await t
        .expect(sign_in_register_url()).contains('dev99.it-aces.com/login')   //check if it navigated to correct webpage

});

// 28.The transition to the screen clicking the logo iFolio
test('iFolio_logo', async t => {
    await t
        .click(page.ifolio_logo)

    // assertion to check transition to Google login page
    var google_url = ClientFunction(() => window.location.href);
    await t
        .expect(google_url()).contains('ifoliocorp.com')   //check if it navigated to correct webpage

});



// 29.Registration in the system

// 30.Logging in with Facebook

// 31.Logging in with G+

