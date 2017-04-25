/* global Vue */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        { text: 'Annoy Cat', completed: false },
        { text: 'Take out Dishes', completed: false },
        { text: 'Do Laundry', completed: false }
      ],
      newTask: '',
    },
    methods: {
      addTask: function() {
        if (this.newTask !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      toggleComplete: function(task) {
        task.completed = !task.completed;
      },
      incompleteTasks: function() {
        var count = 0;
        for (var i = 0; i < this.tasks.length; i++) {
          if (!this.tasks[i].completed) {
            count += 1;
          }
        }
        return count;
      },
      removeCompletedTasks: function() {
        var incompleteTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
          if (!this.tasks[i].completed) {
            incompleteTasks.push(this.tasks[i]);
          }
        }
        this.tasks = incompleteTasks;
      }
    }
  });
});