class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(this.name + " is now online");
  }
}


const user1 = new User('Zohan', 'zohan@example.com');
user1.login(); // Output should be: Zohan is now online.

const user2 = new User('admin', 'wedevs@example.com');
user2.login(); // Output should be: wedevs is now online.

