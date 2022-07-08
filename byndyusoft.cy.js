describe('Test 1 for Byndyusoft', () => {
    it ('Search contact info', () => {

        cy.visit('https://www.google.com/');
        cy.get("input[title='Поиск']").type('Byndyusoft').type('{enter}');
        cy.get('*[class^="LC20lb MBeuO DKV0Md"]').first().click();
        cy.get('*[class^="btn btn--lg btn--info js-popup-callback-show"]').click();
        cy.contains('8 800 775-15-21');
        cy.contains('sales@byndyusoft.com');
    });
});