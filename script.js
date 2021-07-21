var navigate = {
    Student(){
        window.open("/Student/Signup/", "_self");
    },
    Teacher(){
        window.open("/Teacher/Signup/", "_self");
    }
}

function load(){
if(window.localStorage.getItem('type') == 'student'){
    window.open('/Student/Dashboard/', '_self');
}else if(window.localStorage.getItem('type') == 'teacher'){
    window.open('/Teacher/Dashboard/', '_self');
 }
}