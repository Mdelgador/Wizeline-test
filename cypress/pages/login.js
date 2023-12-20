class LoginPage{
    constructor(){
        this.url ="https://app.todoist.com/auth/login?success_page=%2Fapp%2F";
        this.emailSelector= 'input[type="email"]';
        this.passwordSelector= 'input[type="password"]';
        this.submitSelector= 'button[data-gtm-id="start-email-login"]';
    }
    visit(){
        cy.visit(this.url);
    }
    typeCredentials(email, password){
        cy.get(this.emailSelector).type(email)
        cy.get(this.passwordSelector).type(password)
    }
    clickButton(){
        cy.get(this.submitSelector).click()
    }
    assertloged(){
        cy.get('.FzlakBP').should('be.visible')
    }
}
export const loginPage = new LoginPage();