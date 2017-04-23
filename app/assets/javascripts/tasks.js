/* global Vue */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
        'Annoy Cat',
        'Take out Dishes',
        'Do Laundry'
      ]

    }
  });
});