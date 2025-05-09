
describe('Description', () => {

    beforeEach(() => {
        cy.visit('/pagamento');
    });

    it('deve selecionar o método de pagamento PIX', () => {
        cy.contains('label', 'Pix').click();
        cy.contains('label', 'Pix').find('input[type="radio"]').should('be.checked');
    });

    it('deve copiar o código PIX quando clicado', () => {
        cy.contains('label', 'Pix').click();
        cy.get('.copy-button').click();
    });

    it('deve selecionar o método de pagamento Cartão', () => {
        cy.contains('label', 'Cartão').click();
        cy.contains('label', 'Cartão').find('input[type="radio"]').should('be.checked');
    });
    
    it('deve preencher o formulário de cartão de crédito', () => {
        cy.contains('label', 'Cartão').click();
        cy.get('input[formControlName="numeroCartao"]').type('9999999999999999', { force: true });
        cy.get('input[formControlName="nomeCartao"]').type('Fulano de Tal', { force: true });
        cy.get('input[formControlName="mesValidade"]').type('12', { force: true });
        cy.get('input[formControlName="anoValidade"]').type('2025', { force: true });
        cy.get('input[formControlName="codigoSeguranca"]').type('123', { force: true });
        cy.get('button[type="submit"]').should('not.be.disabled').click();
    });
});
