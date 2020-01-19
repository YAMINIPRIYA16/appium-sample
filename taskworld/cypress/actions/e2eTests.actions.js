import 'cypress-xpath'
import e2ePageObjects from '../../cypress/pageObjects/e2ePageObjects'
export class loginPage {
    constructor(){}
    
 typeInEmailField(emailId){
    cy.xpath(e2ePageObjects.emailField)
    .type(emailId)   
 }
 typeInPasswordField(password){
    cy.get(e2ePageObjects.passwordField)
    .type(password)   
 }
 clickOnLOginButton(){
    cy.get(e2ePageObjects.loginButton)      
        .click()                 
}
createANewProject(title,description){
    cy.get(e2ePageObjects.newProjectButton).click()
      cy.get(e2ePageObjects.titleOfTheProject).type(title)
      cy.get(e2ePageObjects.descriptionOfTheProject).type(description)
      cy.get(e2ePageObjects.nextButton).click()
      cy.get(e2ePageObjects.createProjectButton).click()  
      this.createTaskList()
}

createTaskList(){
   cy.get(e2ePageObjects.newTaskTextField).type(e2ePageObjects.newTaskName).type('{enter}')
   cy.get(e2ePageObjects.createNewTask).click({force: true})
   cy.get(e2ePageObjects.descriptionTypingArea).type(e2ePageObjects.descriptionOfTask)
   cy.get('button').contains(e2ePageObjects.createNewTaskList).click({force:true})
   cy.get(e2ePageObjects.createdTask).click({force:true})
   cy.get(e2ePageObjects.closeButton).click({force:true})
   cy.get(e2ePageObjects.checkBox).click({force:true})
   cy.wait(3000)
   cy.contains(e2ePageObjects.hideCompletedTasks).click({force:true})


}

}

export default loginPage