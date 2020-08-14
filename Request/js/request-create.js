const create = (request) => {
    var body = JSON.stringify(request);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requests", true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send(body);
}

const save = () => {
    let request = {
        id: +get("pid"),
        description: get("pdescription"),
        justification: get("pjust"),
        rejectionReason: get("prr"),
        deliveryMode: get("pdeliv"),
        status: get("pstatus"),
        total: +get("ptotal"),
        userId: +get("puid")
    };
    create(request);
}

const get = (id) => {
    return document.getElementById(id).value;
};