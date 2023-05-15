function validate(){
    var username=document.getElementById('username').value ;
    var email=document.getElementById('email').value ;
    var password=document.getElementById('password').value ;
    var cpassword=document.getElementById('cpassword').value ;

    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordmatch(password,cpassword);

    function checkusername(username){
        if(username.length>7){
            document.getElementById('username').classList.add('success')
            document.getElementById('username').classList.replace('error' , 'success') //replace error to success class from css
        }
        else{
            document.getElementById('username').classList.add('error')//add error class from css
            document.getElementById('username_error').innerText='Username must be 8 letters long'
        }
    }
    function checkemail(email){
        if(email.length>8 && email.includes('@gmail')){
            document.getElementById('email').classList.add('success')
            document.getElementById('email').classList.replace('error' , 'success') //replace error to success class from css
        }
        else{
            document.getElementById('email').classList.add('error')//add error class from css
            document.getElementById('email_error').innerText='email length must include @gmail,length must be greater than 8'
        }
    }

    function checkpassword(password) {
        if(password.length>7 && password.includes('.')){
            document.getElementById('password').classList.add('success')
            document.getElementById('password').classList.replace('error' , 'success') //replace error to success class from css
        }
        else{
            document.getElementById('password').classList.add('error')//add error class from css
            document.getElementById('password_error').innerText='password must be 8 letters long and should contain .'
        }
    }
    function checkpasswordmatch(cpassword) {
        if(cpassword==password && password!=''){
            document.getElementById('cpassword').classList.add('success')
            document.getElementById('cpassword').classList.replace('error' , 'success') //replace error to success class from css
        }
        else{
            document.getElementById('cpassword').classList.add('error')//add error class from css
            document.getElementById('cpassword_error').innerText='passwords not matched'
        }
    }
}