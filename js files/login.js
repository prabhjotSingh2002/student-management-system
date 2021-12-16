console.log("hello login");

document.getElementById("indar").addEventListener("click", function(e) {
    console.log(e.target);
    e.preventDefault();
    var names = document.getElementById('S-name').value;
    console.log('kaka open ho gaya');
    console.log(names);
    var email = document.getElementById('S-email').value;
    var pass = document.getElementById('S-pass').value;
    if (names == 'puffy' && email == 'puffy@gmail.com' && pass == '1234') {
        console.log("succes");
        window.location.href = "input.html";
    } else {
        // swal("Opps!", "bsdk achha se dekh!", "warning");
        console.log('fail');
        let message = document.getElementById('message');
        message.innerHTML = `
        A simple danger alert—check it out!
      `
        setTimeout(function() { message.innerHTML = "" }, 2000);

    }
});