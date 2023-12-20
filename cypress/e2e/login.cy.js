import { loginPage } from "../pages/login";
import { addTask } from "../pages/addtask";

describe('login page', () => {
   it('user should log in', () => {
    loginPage.visit()
    cy.fixture('example.json').then((data)=>{
    loginPage.typeCredentials(data.email, data.password)
    loginPage.clickButton() 
    //loginPage.assertloged()
    addTask.addTaskbutton()
    addTask.addTaskDescription(data.taskName, data.taskDescription)
    addTask.createTaskbutton()
    })

   });
})