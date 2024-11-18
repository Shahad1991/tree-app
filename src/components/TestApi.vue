<template>
    <div>
      <h1>Test API</h1>
      <button @click="sendData">Send Data</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      sendData() {
        fetch('http://localhost:3000/api/savePoints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: 1,
            name: 'John Doe',
            points: 100
          })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      }
    }
  }
  </script>