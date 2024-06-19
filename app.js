// const devices = [];

// devices.push({ user: "Mary", name: "Mary's iPhone" });
// devices.push({ user: "Alex", name: "Alex's Surface Pro" });
// devices.push({ user: "Mary", name: "Mary's MacBook" });
$('#navbar').load('navbar.html');
// const devices = localStorage.getItem('devices') || [];
const devices = JSON.parse(localStorage.getItem('devices')) || [];


// devices.forEach(function(device) {
//     const table = document.querySelector('#devices');
//     const row = document.createElement('tr');

//     const user = document.createElement('td');
//     const userText = document.createTextNode(device.user);
//     user.appendChild(userText);

//     const name = document.createElement('td');
//     const nameText = document.createTextNode(device.name);
//     name.appendChild(nameText);

//     row.appendChild(user);
//     row.appendChild(name);

//     table.appendChild(row);
//   });

devices.forEach(function (device) {
  $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`

  );


});

//   document.querySelector('#add-device').addEventListener('click', function() {
//     const user = document.querySelector('#user').value;
//     const name = document.querySelector('#name').value;
//     devices.push({ user: user, name: name });
//     console.log(devices);
//   });
// $('#add-device').on('click', function() {
//     const user = $('#user').val();
//     const name = $('#name').val();
//     devices.push({ user: user, name: name });
//     console.log(devices);
//   });

$('#add-device').on('click', function () {
  const user = $('#user').val();
  const name = $('#name').val();

  if (user.length >= 4 && name.length >= 4 ) {
    devices.push({ user, name });
    
    
  }
  else if (!isNaN(user) || !isNaN(name)){
    $("#error").text("Error: Input is not a string.").addClass("error");
    alert('Invalid input. Please enter a string.');
    return;
  }
   else {
    alert("Please keep the character limitations in mind!!");
    return;
  }
 
  // console.log(devices);
  devices.push({ user, name });
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = 'device-list.html';
});
