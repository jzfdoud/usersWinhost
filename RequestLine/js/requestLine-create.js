const create = (requestLine) => {
    var body = JSON.stringify(requestLine);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requestlines", true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send(body);
}

const save = () => {
    let requestLine = {
        id: +get("pid"),
        quantity: get("pquant"),
        productId: +get("ppid"),
        requestId: +get("prid")
    };
    create(requestLine);
}

const get = (id) => {
    return document.getElementById(id).value;
};