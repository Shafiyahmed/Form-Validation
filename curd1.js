let data = [
    {id: 1, name: "Shafiy", email: "shafiy@gmail.com", age: 25, salary: 50000, department: "IT"},
    {id: 2, name: "ahmed", email: "ahmed@gmail.com", age: 30, salary: 60000, department: "HR"}
];

function readAll() {
    var tbody = document.querySelector(".table_body");
    if(!tbody) return;
    var element = "";
    data.forEach(d => {
        element += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.age}</td>
            <td>${d.salary}</td>
            <td>${d.department}</td>
            <td>
                <button type="button" onclick="edit(${d.id})">Edit</button>
                <button type="button" onclick="deleteData(${d.id})">Delete</button>
            </td>
        </tr>`
    });
    tbody.innerHTML = element;
}

// Show the create form and hide the add button / update form
function create() {
    var createForm = document.querySelector(".create_form");
    var updateForm = document.querySelector(".update_form");
    var addBtn = document.querySelector(".add_btn");

    if(createForm) createForm.style.display = "block";
    if(updateForm) updateForm.style.display = "none";
    if(addBtn) addBtn.style.display = "none";

    // focus the first input if available
    var firstInput = createForm ? createForm.querySelector('input') : null;
    if(firstInput) firstInput.focus();
}

function add() {
    var name = document.querySelector(".cname").value;
    var email = document.querySelector(".cemail").value;
    var age = document.querySelector(".cage").value;
    var salary = document.querySelector(".csalary").value;
    var department = document.querySelector(".cdepartment").value;

    if (!name || !email || !age || !salary || !department) {
        alert("Please fill all fields");
        return;
    }

    var newId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;
    var new_obj = {
        id: newId,
        name: name,
        email: email,
        age: parseInt(age),
        salary: parseFloat(salary),
        department: department
    };

    data.push(new_obj);
    
    // Clear inputs
    document.querySelector(".cname").value = "";
    document.querySelector(".cemail").value = "";
    document.querySelector(".cage").value = "";
    document.querySelector(".csalary").value = "";
    document.querySelector(".cdepartment").value = "";
    
    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_btn").style.display = "block";
    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    document.querySelector(".add_btn").style.display = "none";

    var obj = data.find(d => d.id === id);
    if(!obj) return;
    
    document.querySelector('.uid').value = obj.id;
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".uemail").value = obj.email;
    document.querySelector(".uage").value = obj.age;
    document.querySelector(".usalary").value = obj.salary;
    document.querySelector(".udepartment").value = obj.department;
}

function update() {
    var id = parseInt(document.querySelector(".uid").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var age = document.querySelector(".uage").value;
    var salary = document.querySelector(".usalary").value;
    var department = document.querySelector(".udepartment").value;

    if (!name || !email || !age || !salary || !department) {
        alert("Please fill all fields");
        return;
    }

    var obj = data.find(d => d.id === id);
    if(obj) {
        obj.name = name;
        obj.email = email;
        obj.age = parseInt(age);
        obj.salary = parseFloat(salary);
        obj.department = department;
    }

    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".add_btn").style.display = "block";
    readAll();
}