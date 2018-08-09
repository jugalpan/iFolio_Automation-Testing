import { ClientFunction } from 'testcafe';
import Page from './reset-password-model';

// Register page on iFolio
fixture `Reset_Password`
    .page `http://dev99.it-aces.com/password/reset`;

const page = new Page();

// 32.Checking send an empty field
test('empty string', async t => {
        await t
        .click(page.send_link)

        // assertion to check the message generated after empty string
        var web_url = ClientFunction(() => window.location.href);
        await t
        .expect(web_url()).contains('dev99.it-aces.com/password/reset')
        .expect(page.e_mail_required_label.innerText).eql('The email field is required.');

    });

// 33.Checking sending invalid characters
test('invalid_characters', async t => {
    await t
    .typeText(page.e_mail, '!#$%^&*@123')
    .click(page.send_link)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
    .expect(web_url()).contains('dev99.it-aces.com/password/reset')
    .expect(page.e_mail_required_label.innerText).eql('The email must be a valid email address.');

});


// 34.Check references invalid email
test('invalid_e_mail', async t => {
    await t
    .typeText(page.e_mail, 'sample@example.com')
    .click(page.send_link)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
    .expect(web_url()).contains('dev99.it-aces.com/password/reset')
    .expect(page.e_mail_required_label.innerText).contains('find a user with that e-mail address.');

});


// 35.Checking the long text values
test('invalid_username', async t => {
    await t
    .typeText(page.e_mail, 'thisisjustanexampleofverylongtextfortestingpurposeintheemailfieldontheregistrationpageofifolioandrecordingtherestresultsforit@texting.com')
    .click(page.send_link)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
    .expect(web_url()).contains('dev99.it-aces.com/password/reset')
    .expect(page.e_mail_required_label.innerText).eql('The email must be a valid email address.');

});

// 36.Checking the transition button sign in
test('sign_in', async t => {
    await t
    .click(page.already_sign_in)

    //assertion to check if the action landed on the sign in page
    var sign_in_register_url = ClientFunction(() => window.location.href);
    await t
    .expect(sign_in_register_url()).contains('dev99.it-aces.com/login')   //check if it navigated to correct webpage
    
});


// 37.Switching to the appropriate screen button Sign in / Register
test('sign_in_register', async t => {
    await t
    .click(page.sign_in_register)

    //assertion to check if the action landed on the sign in page
    var sign_in_register_url = ClientFunction(() => window.location.href);
    await t
    .expect(sign_in_register_url()).contains('dev99.it-aces.com/login')   //check if it navigated to correct webpage
    
});


// 38.The transition to the screen matching the logo iFolio
test('iFolio_logo', async t => {
    await t
    .click(page.ifolio_logo)

    // assertion to check transition to Google login page
    var google_url = ClientFunction(() => window.location.href);
    await t
    .expect(google_url()).contains('ifoliocorp.com')   //check if it navigated to correct webpage

});


// 39.Switching to the appropriate screen button Send Password Reset Link (sushestvuet email)
test('invalid_e_mail', async t => {
    await t
    .typeText(page.e_mail, 'jugal.panchal@ifoliocorp.com')
    .click(page.send_link)

    // assertion to check the message generated after invalid values
    var web_url = ClientFunction(() => window.location.href);
    await t
    .expect(web_url()).contains('dev99.it-aces.com/password/reset')
    .expect(page.sent_steps_in_mail.innerText).contains('Check your email and follow the steps to reset your password and Sign In.');

});


