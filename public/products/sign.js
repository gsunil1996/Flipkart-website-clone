function signup() {
    let form = document.getElementById('signupform');
    let name = form.inputcontrol.value;
    let email = form.inputcontrol1.value;
    let password = form.inputcontrol2.value;

    if (name != "" && email != "" && password != "") {
        let data = {
            name,
            email,
            password
        }
       let arr = localStorage.getItem('data');
        if (arr == null) {
            arr = []
        }
        else {
            arr = JSON.parse(arr);
        }
            arr.push(data);
        localStorage.setItem('data', JSON.stringify(arr));
    } else {
        alert('Fill all mandatory details');
    }
}