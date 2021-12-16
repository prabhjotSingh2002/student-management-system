console.log("hello input");
class Student {
    constructor(name, roll_no, prn_no, gender, department) {
        this.name = name;
        this.roll_no = roll_no;
        this.prn_no = prn_no;
        this.gender = gender;
        this.department = department;
    }
}

class Display {
    check(student) {
        if (student.name.length > 4 && (student.roll_no > 35100 && student.roll_no < 35250) && (student.prn_no > 1900000 && student.prn_no < 1990000)) {
            return true;
        } else {
            return false;
        }
    }
    add(student) {
        console.log("enter to ui");
        var uitext = ` <tr>
        <td>${student.name}</td>
        <td>${student.roll_no}</td>
        <td>${student.department}</td>
        <td>${student.gender}</td>
        <td>${student.prn_no}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>`
        var table_text = document.getElementById('tablebody');
        table_text.innerHTML = table_text.innerHTML + uitext;
    }
    clear() {
        var student_form = document.getElementById('f-1');
        student_form.reset();
    }
    show(type, displayMessage) {
        var message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>:</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
        setTimeout(function() { message.innerHTML = '' }, 2000);
    }
}

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("enter eventlistener");
    var name = document.getElementById('fname').value + " " + document.getElementById('lname').value;
    var roll_no = document.getElementById('roll').value;
    var prn_no = document.getElementById('prn').value;
    var gender;
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    if (male.checked) {
        gender = 'male';
    } else {
        gender = 'female';
    }
    var department;
    var CS = document.getElementById('CS');
    var entc = document.getElementById('E&TC');
    var CIVIL = document.getElementById('CIVIL');
    var MECH = document.getElementById('MECH');
    if (MECH.checked) {
        department = 'Mechanical';
    } else if (CIVIL.checked) {
        department = 'Civil';
    } else if (entc.checked) {
        department = 'E&Tc ';
    } else if (CS.checked) {
        department = 'Csc';
    }
    var student = new Student(name, roll_no, prn_no, gender, department);
    console.log(name);
    console.log(roll_no);
    console.log(prn_no);
    console.log(gender);
    console.log(department);

    console.log(student);
    var display = new Display();
    if (display.check(student)) {
        display.add(student);
        display.clear();
        display.show('pass', 'wlcm bhai wlcm aapka wlcm');
    } else {
        display.show('fail', 'bulle izzat se daal')
    }
});