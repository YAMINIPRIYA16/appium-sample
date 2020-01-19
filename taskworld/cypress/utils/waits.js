export class waits {
    constructor(){}
explicitWait(timeInMilliSecond){
    cy.wait(timeInMilliSecond)
}
}
export default waits