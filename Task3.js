//Take input of the task
const readline = require('readline');

// Define the Task class
class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

// Create an array to store tasks
const tasks = [];
let nextId = 1; // Variable to keep track of the next task ID

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display the menu
function displayMenu() {
    console.log('\nTask Management System');
    console.log('1. Create a new task');
    console.log('2. Read all tasks');
    console.log('3. Update a task');
    console.log('4. Delete a task');
    console.log('5. Exit');
    rl.question('Select an option: ', handleMenuSelection);
}

// Function to handle menu selection
function handleMenuSelection(option) {
    switch (option) {
        case '1':
            createTask();
            break;
        case '2':
            readTasks();
            break;
        case '3':
            updateTask();
            break;
        case '4':
            deleteTask();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Invalid option. Please select a valid option.');
            displayMenu();
            break;
    }
}

// Function to create a new task
function createTask() {
    rl.question('Enter task title: ', (title) => {
        rl.question('Enter task description: ', (description) => {
            const task = new Task(nextId++, title, description);
            tasks.push(task);
            console.log('Task created successfully!');
            displayMenu();
        });
    });
}

// Function to read and display all tasks
function readTasks() {
    if (tasks.length === 0) {
        console.log('No tasks found.');
    } else {
        tasks.forEach(task => {
            console.log(`ID: ${task.id}`);
            console.log(`Title: ${task.title}`);
            console.log(`Description: ${task.description}`);
            console.log('---');
        });
    }
    displayMenu();
}

// Function to update a task
function updateTask() {
    rl.question('Enter the ID of the task to update: ', (id) => {
        const task = tasks.find(t => t.id === parseInt(id));
        if (task) {
            rl.question('Enter new task title (leave blank to keep current): ', (title) => {
                if (title) task.title = title;
                rl.question('Enter new task description (leave blank to keep current): ', (description) => {
                    if (description) task.description = description;
                    console.log('Task updated successfully!');
                    displayMenu();
                });
            });
        } else {
            console.log('Task not found.');
            displayMenu();
        }
    });
}

// Function to delete a task
function deleteTask() {
    rl.question('Enter the ID of the task to delete: ', (id) => {
        const index = tasks.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            tasks.splice(index, 1);
            console.log('Task deleted successfully!');
        } else {
            console.log('Task not found.');
        }
        displayMenu();
    });
}

// Start the application
displayMenu();
