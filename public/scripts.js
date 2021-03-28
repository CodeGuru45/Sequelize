async function windowsActions() {
    const request = await fetch('/api/dining');
    const halls_dict = await request.json();
    const halls = halls_dict['data'];

    const table = document.getElementById('data');
    var tr = "";

    table.innerHTML = "";
    halls.forEach((hall) => {
        tr += '<tr>';
        tr += '<td>'+ hall.hall_name + '</td>' + '<td>' + hall.hall_address + '</td>';
        tr += '</tr>';
    });

    table.innerHTML += tr;
} 

window.onload = windowsActions;