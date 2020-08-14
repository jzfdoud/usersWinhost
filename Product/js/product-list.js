let products = null;

$().ready(()=>{
    getProducts();
});

const getProducts = () => {
    let url = "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/products";
    $.getJSON(url)
        .done((res)=>{
            $("#load").fadeOut();
            products = res;
            display();
        })
        .fail( err => {console.error(err);})
}

const display= () =>{
    let tbody =$("tbody");
    tbody.empty();
    for(let product of products) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${product.id}</td>`));
        tr.append($(`<td>${product.partNbr}</td>`));
        tr.append($(`<td>${product.name}</td>`));
        tr.append($(`<td>${product.price}</td>`));
        tr.append($(`<td>${product.unit}</td>`));
        tr.append($(`<td>${product.photoPath}</td>`));
    }
}