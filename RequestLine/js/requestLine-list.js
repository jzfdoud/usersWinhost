let requestlines = null;

$().ready(()=>{
    getRequestLines();
});

const getRequestLines = () => {
    let url = "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/requestlines";
    $.getJSON(url)
        .done((res)=>{
            $("#load").fadeOut();
            requestlines = res;
            display();
        })
        .fail( err => {console.error(err);})
}

const display= () =>{
    let tbody =$("tbody");
    tbody.empty();
    for(let requestline of requestlines) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${requestline.id}</td>`));
        tr.append($(`<td>${requestline.quantity}</td>`));
        tr.append($(`<td>${requestline.productId}</td>`));
        tr.append($(`<td>${requestline.requestId}</td>`));
    }
}