const getRequestByPk = () =>{
    let id = +document.getElementById("xid").value;
    let xhr = new XMLHttpRequest();
    xhr.responseType= "json";
    xhr.open("GET", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requests/${id}`, true);
    xhr.onload = () => {
        console.log(xhr.response);
        display(xhr.response)
    }
    xhr.send();
};

const display =(request) => {
    set("pid", request.id);
    set("pdescription", request.description);
    set("pjust", request.justification);
    set("prr", request.rejectionReason);
    set("pdeliv", request.deliveryMode);
    set("pstatus", request.status);
    set("ptotal", request.total);
    set("puid", request.userId);
};

const change = (request) => {
    var body = JSON.stringify(request);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("PUT", `http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requests/${request.id}`, true);
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
    change(request);
}

const get = (id) => {
    return document.getElementById(id).value;
};

const set = (id, val) => {
    document.getElementById(id).value = val;
};