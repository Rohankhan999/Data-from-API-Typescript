
var main = document.getElementById('main');

let Users = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log("Fetched Data Succesfully:", data);
        console.log(data.users[0]);
        main.innerHTML = `
        <table border="1">
          <tr>
            <th>ID</th> 
            <th>First Name</th>
            <th>Last Name</th>  
            <th>Age</th>  
            <th>Phone no</th>  
            <th>Address</th>  
            <th>iban no</th> 
            </tr>
          <tr>
            <td>${data.users[0].id}</td> 
             <td>${data.users[0].firstName}</td> 
             <td>${data.users[0].lastName}</td> 
             <td>${data.users[0].age}</td> 
             <td>${data.users[0].phone}</td> 
             <td>${data.users[0].address.address}</td> 
             <td>${data.users[0].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[1].id}</td> 
             <td>${data.users[1].firstName}</td> 
             <td>${data.users[1].lastName}</td> 
             <td>${data.users[1].age}</td> 
             <td>${data.users[1].phone}</td> 
             <td>${data.users[1].address.address}</td> 
             <td>${data.users[1].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[2].id}</td> 
             <td>${data.users[2].firstName}</td> 
             <td>${data.users[2].lastName}</td> 
             <td>${data.users[2].age}</td> 
             <td>${data.users[2].phone}</td> 
             <td>${data.users[2].address.address}</td> 
             <td>${data.users[2].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[3].id}</td> 
             <td>${data.users[3].firstName}</td> 
             <td>${data.users[3].lastName}</td> 
             <td>${data.users[3].age}</td> 
             <td>${data.users[3].phone}</td> 
             <td>${data.users[3].address.address}</td> 
             <td>${data.users[3].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[4].id}</td> 
             <td>${data.users[4].firstName}</td> 
             <td>${data.users[4].lastName}</td> 
             <td>${data.users[4].age}</td> 
             <td>${data.users[4].phone}</td> 
             <td>${data.users[4].address.address}</td> 
             <td>${data.users[4].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[5].id}</td> 
             <td>${data.users[5].firstName}</td> 
             <td>${data.users[5].lastName}</td> 
             <td>${data.users[5].age}</td> 
             <td>${data.users[5].phone}</td> 
             <td>${data.users[5].address.address}</td> 
             <td>${data.users[5].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[6].id}</td> 
             <td>${data.users[6].firstName}</td> 
             <td>${data.users[6].lastName}</td> 
             <td>${data.users[6].age}</td> 
             <td>${data.users[6].phone}</td> 
             <td>${data.users[6].address.address}</td> 
             <td>${data.users[6].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[7].id}</td> 
             <td>${data.users[7].firstName}</td> 
             <td>${data.users[7].lastName}</td> 
             <td>${data.users[7].age}</td> 
             <td>${data.users[7].phone}</td> 
             <td>${data.users[7].address.address}</td> 
             <td>${data.users[7].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[8].id}</td> 
             <td>${data.users[8].firstName}</td> 
             <td>${data.users[8].lastName}</td> 
             <td>${data.users[8].age}</td> 
             <td>${data.users[8].phone}</td> 
             <td>${data.users[8].address.address}</td> 
             <td>${data.users[8].bank.iban}</td> 
          </tr>
          <tr>
            <td>${data.users[9].id}</td> 
             <td>${data.users[9].firstName}</td> 
             <td>${data.users[9].lastName}</td> 
             <td>${data.users[9].age}</td> 
             <td>${data.users[9].phone}</td> 
             <td>${data.users[9].address.address}</td> 
             <td>${data.users[9].bank.iban}</td> 
          </tr>
        </table>
      `;

    } catch (error) {
        console.log("error aya hai ->", error);

    }

}
Users();

