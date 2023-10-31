let usernames:string[]=["Ali","Ahmad","Qasim","Taha"];
function checkUserList(userList: string[]) {
    if (userList.length === 0) {
      console.log("We need to find some users!");
    }else {
        console.log("The user list is not empty.");
      }
  };
  console.log(checkUserList(usernames));

  let username1:string[]=[];
  function checkUserList1(userList: string[]) {
    if (userList.length === 0) {
      console.log("We need to find some users!");
    }else {
        console.log("The user list is not empty.");
      }
  };
  console.log(checkUserList(username1));
