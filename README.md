# React To-Do List Application

This is a simple to-do list application developed using Vite, React, and TypeScript. The goal of this project is to help you improve your understanding of React and TypeScript by implementing various features in a to-do list application. The application allows users to add, update, delete, and view tasks, with tasks persisting in local storage for a seamless user experience.

## Table of Contents

- [Project Setup](#project-setup)
- [Core Features](#core-features)
- [Component Structure](#component-structure)

## Project Setup

To set up and run the project, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/yourusername/todo-list.git
   ```

2. Change into the project directory:

   ```
   cd todo-list
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the application.

## Core Features

### 1. Task Management

- **Add Tasks**: You can add new tasks by entering a task title in the input field and clicking the "Add" button.
  ![Alt text](src/assets/readme/input.png "Title")

- **Update Tasks**: To update a task's title, click on the task you want to edit, make your changes, and press the "Save" button.

- **Delete Tasks**: To remove a task, click the "Delete" button next to the task you want to delete.

- **View Tasks**: All your tasks are displayed in a list format.

- **No Todos Found**: If there are no tasks, a message "No todos found" is displayed.

### 2. Local Storage

Tasks are stored in local storage, ensuring that your to-do list persists even when you refresh the page or close your browser.

## Component Structure

The application is structured into multiple components for a clean and organized codebase. Here are some of the key components:

- **TodoList**: The main component that renders the list of tasks and handles task operations.

- **TodoItem**: Represents an individual task and allows you to edit and delete tasks.

- **AddTodo**: Provides an input field and an "Add" button to add new tasks.
