let e2ePageObjects = {
emailID :'testertester541@gmail.com',
password :'Tester@1234567890',
title :'Testing sample project',
description :'Description of sample project',
endpoint :'/tester',
icon :'.tw-global-add > .tw-icon',
createdlist :'.tw-create-tasklist-button',
emailField :'//*[@name="email"]',
passwordField:'.tw-login-form-container__stack > div:nth-child(5) > div > div > div >div > input',
loginButton :'button',
newProjectButton :'.tw-new-project-button-box',
titleOfTheProject :':nth-child(1) > .tw-form-input > .tw-form-input__control-wrapper > .tw-form-input__control > .tw-form-input__input-container > .tw-form-input__input-element',
descriptionOfTheProject :':nth-child(2) > .tw-form-input > .tw-form-input__control-wrapper > .tw-form-input__control > .tw-form-input__input-container > .tw-form-input__input-element',
nextButton :'.tw-new-project__choose-workflow-button > .tw-button',
createProjectButton :'.tw-choose-workflow__footer > .tw-button',
newTaskTextField : '.tw-editable-text-field__input',
newTaskName : ' Test task list ',
createNewTask: '.tw-tasklist-header__right-section > div:nth-child(2)',
descriptionTypingArea:'.ax-task-input-panel-textfield',
descriptionOfTask: 'This is a test task',
createNewTaskList: 'Create',
createdTask: '.tw-task__main',
closeButton: '.tw-click-area.tw-floating-panel-desktop__close.ax-floating-panel-close',
checkBox: '.tw-task-header__checkbox > div',
hideCompletedTasks: 'Hide completed tasks'
}

export default e2ePageObjects
