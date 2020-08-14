const getUserByPk = () =>{
    let id = +document.getElementById("xid").value;
    let xhr = new XMLHttpRequest();
    xhr.responseType= "json";
    xhr.open("GET", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/users/${id}`, true);
    xhr.onload = () => {
        console.log(xhr.response);
        display(xhr.response)
    }
    xhr.send();
};
const display =(user) => {
    set("pid", user.id);
    set("pusername", user.userName);
    set("ppassword", user.password);
    set("pfirstname", user.firstName);
    set("plastname", user.lastName);
    set("pphone", user.phone);
    set("pemail", user.email);
    setCheckbox("padmin", user.isAdmin);
    setCheckbox("previewer", user.isReviewer);
};

const change = (user) => {
    var body = JSON.stringify(user);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("PUT", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/users/${user.id}`, true);
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
    change(user);
}

const get = (id) => {
    return document.getElementById(id).value;
};

const set = (id, val) => {
    document.getElementById(id).value = val;
};

const getCheckbox = (id) => {
    return document.getElementById(id).checked;
};
const setCheckbox = (id, val) => {
    document.getElementById(id).checked = val;
};
