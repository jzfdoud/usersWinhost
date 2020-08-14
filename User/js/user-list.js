let users = null;

$().ready(()=>{
    getUsers();
});

const getUsers = () => {
    let url = "http://jzfdoudc.w30.wh-2.com/prsdbserver/api/users";
    $.getJSON(url)
        .done((res)=>{
            $("#load").fadeOut();
            users = res;
            display();
        })
        .fail( err => {console.error(err);})
}

const display= () =>{
    let tbody =$("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tbody.append(tr);
        tr.append($(`<td>${user.id}</td>`));
        tr.append($(`<td>${user.userName}</td>`));
        tr.append($(`<td>${user.firstName}</td>`));
        tr.append($(`<td>${user.lastName}</td>`));
        tr.append($(`<td>${user.phone}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        tr.append($(`<td>${user.isReviewer ? "Y" : "N"}</td>`));
        tr.append($(`<td>${user.isAdmin ? "Y" : "N"}</td>`));
    }
}