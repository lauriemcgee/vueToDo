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
      }
    }
  });
});