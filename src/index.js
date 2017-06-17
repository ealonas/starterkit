import { getUsers } from './api/userApi';

//Populate table of users via UPI call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstname}</td>
    <td>${user.lastnam}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});
