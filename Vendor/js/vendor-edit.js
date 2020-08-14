const getVendorByPk = () =>{
    let id = +document.getElementById("xid").value;
    let xhr = new XMLHttpRequest();
    xhr.responseType= "json";
    xhr.open("GET", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/vendors/${id}`, true);
    xhr.onload = () => {
        console.log(xhr.response);
        display(xhr.response)
    }
    xhr.send();
};

const display =(vendor) => {
    set("pid", vendor.id);
    set("pcode", vendor.code);
    set("pname", vendor.name);
    set("paddress", vendor.address);
    set("pcity", vendor.city);
    set("pstate", vendor.state);
    set("pzip", vendor.zip);
    set("pphone", vendor.phone);
    set("pemail", vendor.email);
};


const change = (vendor) => {
    var body = JSON.stringify(vendor);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("PUT", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/vendors/${vendor.id}`, true);
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
    change(vendor);
}


const get = (id) => {
    return document.getElementById(id).value;
};
const set = (id, val) => {
    document.getElementById(id).value = val;
};