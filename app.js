const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Uset Data
const data = {
    name: 'Jhon Doe',
    usename: 'jhondoe',
    email: 'jhon@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2',)
    .then(data => console.log(data))
    .catch(err => console.log(err));