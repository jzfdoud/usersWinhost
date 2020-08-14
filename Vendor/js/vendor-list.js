let vendors = null;

$().ready(()=>{
    getVendors();
});

const getVendors = () => {
    let url = "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/vendors";
    $.getJSON(url)
        .done((res)=>{
            $("#load").fadeOut();
            vendors = res;
            display();
        })
        .fail( err => {console.error(err);})
}

const display= () =>{
    let tbody =$("tbody");
    tbody.empty();
    for(let vendor of vendors) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${vendor.id}</td>`));
        tr.append($(`<td>${vendor.code}</td>`));
        tr.append($(`<td>${vendor.name}</td>`));
        tr.append($(`<td>${vendor.address}</td>`));
        tr.append($(`<td>${vendor.city}</td>`));
        tr.append($(`<td>${vendor.state}</td>`));
        tr.append($(`<td>${vendor.zip}</td>`));
        tr.append($(`<td>${vendor.phone}</td>`));
        tr.append($(`<td>${vendor.email}</td>`));
    }
}