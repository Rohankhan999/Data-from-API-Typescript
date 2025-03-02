interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    address: {
      address: string;
    };
    bank: {
      iban: string;
    };
  }
  

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data: { users: User[] } = await response.json();
      console.log("Fetched Data Successfully:", data);
  
      const main: HTMLElement | null = document.getElementById("main");
      if (!main) {
        console.error("Error: Main element not found!");
        return;
      }
  
      let tableHTML: string = `
        <table border="1">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Phone No</th>
            <th>Address</th>
            <th>IBAN No</th>
          </tr>`;
  
      // 🔥 Dynamically Generate Rows
      data.users.forEach((user: User) => {
        tableHTML += `
          <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td>${user.address.address}</td>
            <td>${user.bank.iban}</td>
          </tr>`;
      });
  
      tableHTML += `</table>`;
      main.innerHTML = tableHTML;
  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  // ✅ Call Function
  fetchUsers();
  