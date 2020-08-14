const create = (user) => {
    var body = JSON.stringify(user);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/users", true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send(body);
}

const save = () => {
    let user = {
        id: +get("pid"),
        username: get("pusername"),
        password: get("ppassword"),
        firstname: get("pfirstname"),
        lastname: get("plastname"),
        phone: get("pphone"),
        email: get("pemail"),
        isReviewer: getCheckbox("previewer"),
        isAdmin: getCheckbox("padmin")
    };
    create(user);
}

const get = (id) => {
    return document.getElementById(id).value;
};

const getCheckbox = (id) => {
    return document.getElementById(id).checked;
};