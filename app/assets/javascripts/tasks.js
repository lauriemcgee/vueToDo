/* global Vue */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        { text: 'Annoy Cat' },
        { text: 'Take out Dishes' },
        { text: 'Do Laundry' }
      ],
      newTask: '',
    },
    methods: {
      addTask: function() {
        this.tasks.push({ text: this.newTask });
        this.newTask = '';
      }
    }
  });
});