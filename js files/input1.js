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
    add(shristi) {
        console.log("enter to ui");
        var table_text = document.getElementById('tablebody');
        var str = "";
        shristi.forEach((element, index) => {
            str += ` <tr>
                <td>${index+1}</td>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
                <td>${element[3]}</td>
                <td>${element[4]}</td>
                 <td><button type="button" id="${index}" onclick=del(this.id) class="btn btn-danger">Delete</button></td> 
                 </tr> `
        });
        table_text.innerHTML = str;
        // var uitext = ` <tr>
        // <td>${student.name}</td>
        // <td>${student.roll_no}</td>
        // <td>${student.department}</td>
        // <td>${student.gender}</td>
        // <td>${student.prn_no}</td>
        // <td><button type="button" class="btn btn-danger">Delete</button></td>`
        // var table_text = document.getElementById('tablebody');
        // table_text.innerHTML = table_text.innerHTML + uitext;
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

function store(student) {
    if (localStorage.getItem('studJson') == null) {
        var studJsonArray = [];
        studJsonArray.push([student.name, student.roll_no, student.prn_no, student.gender, student.department]);
        localStorage.setItem('studJson', JSON.stringify(studJsonArray));
    } else {
        studJsonArrayStr = localStorage.getItem('studJson');
        studJsonArray = JSON.parse(studJsonArrayStr);
        studJsonArray.push([student.name, student.roll_no, student.prn_no, student.gender, student.department]);
        localStorage.setItem('studJson', JSON.stringify(studJsonArray));
    }
    console.log('hi i m in store method of class Lstorage', studJsonArray);
    return studJsonArray;
}

function del(index) {
    studJsonArrayStr = localStorage.getItem('studJson');
    studJsonArray = JSON.parse(studJsonArrayStr);
    studJsonArray.splice(index, 1);
    localStorage.setItem('studJson', JSON.stringify(studJsonArray));

    var display = new Display();
    var shristi = studJsonArray;
    display.add(shristi);
    display.clear();
    console.log("index ", index, "item deleted");
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
        // var S_storage = new LStorage();
        var shristi = store(student);

        display.add(shristi);
        display.clear();
        display.show('pass', 'operation have done successfully!');
    } else {
        display.show('fail', 'plz try again')
    }
});
// var del = document.getElementsByClassName('btn-danger');
// document.getElementsByClassName('btn-danger').addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(e.target.id);
//     del(e.target.id);

// });