const getRequestLineByPk = () =>{
    let id = +document.getElementById("xid").value;
    let xhr = new XMLHttpRequest();
    xhr.responseType= "json";
    xhr.open("GET", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requestlines/${id}`, true);
    xhr.onload = () => {
        console.log(xhr.response);
        display(xhr.response)
    }
    xhr.send();
};

const display =(requestline) => {
    set("pid", requestline.id);
    set("pquant", requestline.quantity);
    set("ppid", requestline.productId);
    set("prid", requestline.requestId);
};

const change = (requestline) => {
    var body = JSON.stringify(requestline);
    let xhr = new XMLHttpRequestline();
    xhr.responseType = "json";
    xhr.open("PUT", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requestlines/${requestline.id}`, true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send(body);
}

const save = () => {
    let requestline = {
        id: +get("pid"),
        quantity: get("pquant"),
        productId: +get("ppid"),
        requestId: +get("prid")
    };
    change(requestline);
}

const get = (id) => {
    return document.getElementById(id).value;
};

const set = (id, val) => {
    document.getElementById(id).value = val;
};