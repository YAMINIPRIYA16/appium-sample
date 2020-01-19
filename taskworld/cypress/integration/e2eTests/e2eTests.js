import commonFunctions from '../../utils/commonFunctions'
import loginPage from '../../actions/e2eTests.actions'
import waits from '../../utils/waits'
import e2ePageObjects from '../../pageObjects/e2ePageObjects'

const commonfunctions = new commonFunctions();
const wait = new waits();
const login = new loginPage();



describe('Taskworld', function() {

  beforeEach(function () {
  cy.visit('/') 
  })

  it('login using valid credentials', function() {
    commonfunctions.loginIntoHomePage(e2ePageObjects.emailID,e2ePageObjects.password)
    cy.url()                   
      .should('include', e2ePageObjects.endpoint)
    cy.get(e2ePageObjects.icon).should('be.visible')
    })

  it('create a new task under a new project created', function() {
    commonfunctions.loginIntoHomePage(e2ePageObjects.emailID,e2ePageObjects.password)
    wait.explicitWait(5000)
    login.createANewProject(e2ePageObjects.title,e2ePageObjects.description)

  })    
  });