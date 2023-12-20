class Addtask{
        constructor(){
            this.addnewbutton =('.plus_add_button');
            this.taskName = ('div[aria-label="Task name"]');
            this.taskDescription= ('div[aria-label="Description"]');
            this.addNewTaskButton= ('button[data-testid="task-editor-submit-button"]');
        }
        addTaskbutton(){
            cy.get(this.addnewbutton).click()
        }
        addTaskDescription(taskName, taskDescription){
            cy.get(this.taskName).type(taskName)
            cy.get(this.taskDescription).type(taskDescription)
        }
        createTaskbutton(){
            cy.get(this.addNewTaskButton).click()
        }

}
export const addTask = new Addtask();