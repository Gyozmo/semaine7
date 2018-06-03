let i = 0;
// let login = document.getElementsByName('login')[0].value;


// sign up submit function
function sendValue() {
  let loginValue = document.getElementsByName('logintest')[0].value;
  let mdpValue = document.getElementsByName('password')[0].value;
  let lastnameValue = document.getElementsByName('nom')[0].value;
  let firstnameValue = document.getElementsByName('prenom')[0].value;
  let dateValue = document.getElementsByName('birthday')[0].value;
  let villeValue = document.getElementsByName('ville')[0].value;
  let emailValue = document.getElementsByName('email')[0].value;
  let websiteValue = document.getElementsByName('siteweb')[0].value;
  let hobbysValue = document.getElementsByName('hobbys')[0].value;
  let telephoneValue = document.getElementsByName('telephone')[0].value;
  let colorValue = document.getElementsByName('color')[0].value;

  let userValue = {
    "userlogin": loginValue,
    "mdp": mdpValue,
    "lastname": lastnameValue,
    "firstname": firstnameValue,
    "date": dateValue,
    "email": emailValue,
    "website": websiteValue,
    "hobbys": hobbysValue,
    "telephone": telephoneValue,
    "color": colorValue,
  };


  //stringify
  if (loginValue !== localStorage.getItem(loginValue)) {
    // alert( 'bienvenue '+loginValue+' !')


    localStorage.setItem(loginValue, JSON.stringify(userValue))

    //store key
    let userkey = localStorage.getItem(loginValue)

    //parse key
    let parsedKey = JSON.parse(userkey);

    //get key value
    console.log(parsedKey.mdp);

  } else {
    alert('pb')
  }
};




//login user
function sendLogin() {
  let loginValue = document.getElementsByName('logintest')[0].value;
  let mdpValue = document.getElementsByName('password')[0].value;


  let userValue = {
    "userlogin": loginValue,
    "mdp": mdpValue,
  };


  //stringify



  // localStorage.setItem(loginValue, JSON.stringify(userValue))

  //store key
  let userkey = localStorage.getItem(loginValue)

  //parse key
  let parsedKey = JSON.parse(userkey);

  //get key value
  // console.log(parsedKey.mdp);

  if (loginValue === parsedKey.userlogin && mdpValue === parsedKey.mdp) {
    alert('bienvenue ' + loginValue + ' !')
  } else if (parsedKey.userlogin == null) {
    alert('probleme vous n\'etes pas inscrit');
  } else {

  }
};


function clearInfo() {
  localStorage.clear();
  i = 0;
}









// sendValue()
//
// function sendInfo() {
//
//     //add value
//     let userValue = {
//         'test': 'test1',
//         'test2': 'test2'
//     };
//     localStorage.setItem('login' + (++i), JSON.stringify(userValue))
//
//     //get value
//     let userkey = localStorage.getItem('login1')
//     console.log(JSON.parse(userkey));
//
// }
