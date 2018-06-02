let i = 0;
let login = document.getElementsByName('login');

function sendValue() {
    console.log(login.value);
    
    
    
    
}

function sendInfo() {

    //add value
    let userValue = {
        'test': 'test1',
        'test2': 'test2'
    };
    localStorage.setItem('login' + (++i), JSON.stringify(userValue))

    //get value
    let userkey = localStorage.getItem('login1')
    console.log(JSON.parse(userkey));

}

function clearInfo() {
    localStorage.clear();
    i = 0;
}