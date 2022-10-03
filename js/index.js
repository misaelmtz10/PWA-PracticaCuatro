document.body.onload = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2')
        const data = await response.json()
        fillData(data)
    } catch (error) {
        console.log(error);
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    create(event)
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

let fillData = (data) => {
    let list = data.data;
    let contentString = "";
    let divContent = document.getElementById('content');

    for (let index = 0; index < list.length - 1; index++) {
        contentString += `
        <div class="col-md-4 col-lg-3">
            <div class="card my-3 text-center">
                <div class="card-thumbnail">
                    <img src="${list[index].avatar}" width="150" height="150" class="img-fluid" alt="thumbnail">
                </div>
                <div class="card-body">
                    <h6 class="card-title">${list[index].email}</h6>
                    <p class="card-text">${list[index].first_name} ${list[index].last_name}</p>
                </div>
            </div>
        </div>
        `;
    }
    divContent.innerHTML = contentString;
}

// let data = {
//     name: '',
//     job: ''
// }

// let create = async (event) => {
//     event.preventDefault()
//     let url = "https://reqres.in/api/users"
//     data.name = document.getElementById('firstIn').value
//     data.job = document.getElementById('lastIn').value

//     try {
//         const request = await fetch(url, {
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify(data)
//         })
//         const response = await request.json()
//         alert('success: '+ JSON.stringify(response));
//     } catch (error) {
//         alert(error);
//     }
// }
