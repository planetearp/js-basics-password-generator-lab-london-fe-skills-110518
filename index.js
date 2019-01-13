window.addEventListener("load", () => {
  //start your code here
  
  function handleSubmit(e) {
  e.preventDefault();
  const pwdlen = parseInt(document.getElementById('passwordLength').value)
  console.log('submitted!')
  const pwd = makeid(pwdlen);
  addPwd(pwd);
}

document.getElementById('form').addEventListener('submit', function(e) {
  handleSubmit(e);
})


//Random Password 

function makeid(pwdlength) {
  let pwd = "";
  const lowerCaps = "abcdefghijklmnopqrstuvwxyz";
  const upperCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = " !#$%&()*+,-./:;<=>?@[\\]^_{|}~";
  const possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !#$%&()*+,-./:;<=>?@[\\]^_{|}~";

  for (let i = 0; i < pwdlength; i++)
    pwd += possible.charAt(Math.round(Math.random() * possible.length));

  return pwd;
}

function addPwd(pwd) {
  document.getElementById("result").innerText = pwd;
}

});
