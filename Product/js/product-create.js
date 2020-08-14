const create = (product) => {
    var body = JSON.stringify(product);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/products", true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send(body);
}

const save = () => {
    let product = {
        id: +get("pid"),
        partNbr: get("ppartnbr"),
        name: get("pname"),
        price: +get("pprice"),
        unit: get("punit"),
        photoPath: get("pphotopath"),
        vendorId: getSelectedVendorId()
    };
    create(product);
}

const get = (id) => {
    return document.getElementById(id).value;
};

const getSelectedVendorId = () => {
    var select = document.getElementById("pvendors");
    let vendorId = +select.options[select.selectedIndex].value;
    return vendorId;
};

const loadVendors = (vendors) => {
    var select = document.getElementById("pvendors");
    for(let v of vendors) {
        let option = `<option value = ${v.id}>${v.name}</option>`;
        select.innerHTML += option;
    }
};

const vendors = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/vendors", true);
    xhr.onload = function() {
        console.log(xhr.response);
        loadVendors(xhr.response);
    }
    xhr.send();
}