import {Selector, t, ClientFunction} from 'testcafe';

const dataSet = require('../Data/Data.json');

const getUrl = ClientFunction (() => window.location);

fixture ('Prueba Json')

dataSet.forEach(data => {

    test 
        .page ("https://the-internet.herokuapp.com/login")
        (`Login page Validation - ${data.expectedMessage}`, async t => {

            await t
            .maximizeWindow()
            .typeText(Selector('input#username'), data.userName)
            .typeText(Selector('input#password'), data.password)
            .click ('button')

            await t.expect(Selector('div#flash').innerText).contains(data.expectedMessage);
        });

});