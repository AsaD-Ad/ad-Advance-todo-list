import inquirer from "inquirer"

let todos=["Take lecture","Visit Mall","Meeting with Khan Sahab"]

let todoList = await inquirer.prompt(
    [
        {
            name:"Q1",
            message:"Please select operation",
            type:"list",
            choices:["View","Add","Remove","Update",]
        }
    ]
)
if (todoList.Q1 == "View"){
    console.log(todos)
    let todoView = await inquirer.prompt(
        [
            {
             name:"Q1",
             message:"Are you sure,Exit from todo list?",
             type:"confirm",   
            }
        ]
        )
    };


 if (todoList.Q1 == "Add"){
let todoAdd = await inquirer.prompt(
    [
        {
            name:"Q1",
            message:"What you want to add?",
            type:"input"
        },
    ]
)
todos.push(todoAdd.Q1)
console.log(todos);
};
if (todoList.Q1 == "Remove"){
    let todoRemove = await inquirer.prompt(
        [
            {
                name:"Q1",
                message:"What you want to remove",
                type:"input",
                choices:[todos],
            }
        ]
    ) 
    .then((answers) => {const indexToRemove = todos.indexOf(answers.Q1);
        if (indexToRemove !== -1){
            todos.splice(indexToRemove, 1);
            console .log ("Element removed:", answers.Q1);
            console.log('Updated Todos:', todos);
        }else{
            console.log('Element not found in array');
        }
        })
    };
    if (todoList.Q1 == "Update"){
        let todoUpdate = await inquirer.prompt(
            [
                {
                    name:"elementToupdate",
                    message:"Which task you want to update?",
                    type:"list",
                    choices:todos,
                },
                {
                    name:"newValue",
                    message:"Enter updated task",
                    type:"input",
                }

            ]
        ) 
        .then((answers) => { 
            const elementToupdate = answers.elementToupdate
            const newValue = answers.newValue;

            const indexToupdate = todos.indexOf(elementToupdate);

            if(indexToupdate !== -1){
                todos[indexToupdate] = newValue;
                console.log("Element updated!");
                console.log("Updated Todos:", todos);
            }else{
                console.log("Element not found!");
            }
             })
            };
