let requests = null;

$().ready(()=>{
    getRequests();
});

const getRequests = () => {
    let url = "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requests";
    $.getJSON(url)
        .done((res)=>{
            $("#load").fadeOut();
            requests = res;
            display();
        })
        .fail( err => {console.error(err);})
}

const display= () =>{
    let tbody =$("tbody");
    tbody.empty();
    for(let request of requests) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${request.id}</td>`));
        tr.append($(`<td>${request.description}</td>`));
        tr.append($(`<td>${request.justification}</td>`));
        tr.append($(`<td>${request.rejectionReason}</td>`));
        tr.append($(`<td>${request.deliveryMode}</td>`));
        tr.append($(`<td>${request.status}</td>`));
        tr.append($(`<td>${request.total}</td>`));
    }
}