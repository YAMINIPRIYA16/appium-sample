import loginPage from '../actions/e2eTests.actions'

const login = new loginPage();

export class commonFunctions {
    constructor(){}
    loginIntoHomePage(emailId,password){
        login.typeInEmailField(emailId);
        login.typeInPasswordField(password);
        login.clickOnLOginButton();
      
    }
}
export default commonFunctions