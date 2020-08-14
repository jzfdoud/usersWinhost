const create = (vendor) => {
    var body = JSON.stringify(vendor);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/vendors", true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send(body);
}

const save = () => {
    let vendor = {
        id: +get("pid"),
        code: get("pcode"),
        name: get("pname"),
        address: get("paddress"),
        city: get("pcity"),
        state: get("pstate"),
        zip: get("pzip"),
        phone: get("pphone"),
        email: get("pemail")
    };
    create(vendor);
}


const get = (id) => {
    return document.getElementById(id).value;
};