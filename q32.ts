const current_users:string[] = ['Shahid', 'Ali', 'Umar', 'Qasim', 'Yahya'];
const new_users:string[] = ['shahid','ahmad','ali', 'asad', 'Yahya'];
for (let i = 0; i < new_users.length; i++) {
  let isUsernameTaken:boolean = false;
  
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      isUsernameTaken = true;
      break; 
    }
  }
  if (isUsernameTaken) {
    console.log(`Username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Username '${new_users[i]}' is available.`);
  }
};