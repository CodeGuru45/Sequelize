function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getHalls() {
    const request = await fetch('/api/dining');
    const halls_dict = await request.json();
    const halls = halls_dict['data'];
    return halls;   
}

async function getMeals() {
    const request = await fetch('/api/wholeMeals');
    const mealsData = await request.json();
    return mealsData;   
}

async function windowsActions() {
    const resultsMeals = await getMeals();
    const meals = resultsMeals.data;
    const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const selected = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length - 1);
        return meals[random];
    });
    
    console.table(selected);

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Meal Macros"
        },
        axisX: {
            
        },
        axisY: {
            
        },
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "Calories",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].calories, label: selected[0].meal_name },
                { y: selected[1].calories, label: selected[1].meal_name },
                { y: selected[2].calories, label: selected[2].meal_name },
                { y: selected[3].calories, label: selected[3].meal_name },
                { y: selected[4].calories, label: selected[4].meal_name },
                { y: selected[5].calories, label: selected[5].meal_name },
                { y: selected[6].calories, label: selected[6].meal_name },
                { y: selected[7].calories, label: selected[7].meal_name },
                { y: selected[8].calories, label: selected[8].meal_name },
                { y: selected[9].calories, label: selected[9].meal_name }
            ]
        },
        {
            type: "stackedBar",
            name: "Serving Size",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].serving_size, label: selected[0].meal_name },
                { y: selected[1].serving_size, label: selected[1].meal_name },
                { y: selected[2].serving_size, label: selected[2].meal_name },
                { y: selected[3].serving_size, label: selected[3].meal_name },
                { y: selected[4].serving_size, label: selected[4].meal_name },
                { y: selected[5].serving_size, label: selected[5].meal_name },
                { y: selected[6].serving_size, label: selected[6].meal_name },
                { y: selected[7].serving_size, label: selected[7].meal_name },
                { y: selected[8].serving_size, label: selected[8].meal_name },
                { y: selected[9].serving_size, label: selected[9].meal_name }
            ]
        },
        {
            type: "stackedBar",
            name: "Cholesterol",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].cholesterol, label: selected[0].meal_name },
                { y: selected[1].cholesterol, label: selected[1].meal_name },
                { y: selected[2].cholesterol, label: selected[2].meal_name },
                { y: selected[3].cholesterol, label: selected[3].meal_name },
                { y: selected[4].cholesterol, label: selected[4].meal_name },
                { y: selected[5].cholesterol, label: selected[5].meal_name },
                { y: selected[6].cholesterol, label: selected[6].meal_name },
                { y: selected[7].cholesterol, label: selected[7].meal_name },
                { y: selected[8].cholesterol, label: selected[8].meal_name },
                { y: selected[9].cholesterol, label: selected[9].meal_name }
            ]
        },
        {
            type: "stackedBar",
            name: "Sodium",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].sodium, label: selected[0].meal_name },
                { y: selected[1].sodium, label: selected[1].meal_name },
                { y: selected[2].sodium, label: selected[2].meal_name },
                { y: selected[3].sodium, label: selected[3].meal_name },
                { y: selected[4].sodium, label: selected[4].meal_name },
                { y: selected[5].sodium, label: selected[5].meal_name },
                { y: selected[6].sodium, label: selected[6].meal_name },
                { y: selected[7].sodium, label: selected[7].meal_name },
                { y: selected[8].sodium, label: selected[8].meal_name },
                { y: selected[9].sodium, label: selected[9].meal_name }
            ]
        },
        {
            type: "stackedBar",
            name: "Carbs",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].carbs, label: selected[0].meal_name },
                { y: selected[1].carbs, label: selected[1].meal_name },
                { y: selected[2].carbs, label: selected[2].meal_name },
                { y: selected[3].carbs, label: selected[3].meal_name },
                { y: selected[4].carbs, label: selected[4].meal_name },
                { y: selected[5].carbs, label: selected[5].meal_name },
                { y: selected[6].carbs, label: selected[6].meal_name },
                { y: selected[7].carbs, label: selected[7].meal_name },
                { y: selected[8].carbs, label: selected[8].meal_name },
                { y: selected[9].carbs, label: selected[9].meal_name }
            ]
        },
        {
            type: "stackedBar",
            name: "Protein",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].protein, label: selected[0].meal_name },
                { y: selected[1].protein, label: selected[1].meal_name },
                { y: selected[2].protein, label: selected[2].meal_name },
                { y: selected[3].protein, label: selected[3].meal_name },
                { y: selected[4].protein, label: selected[4].meal_name },
                { y: selected[5].protein, label: selected[5].meal_name },
                { y: selected[6].protein, label: selected[6].meal_name },
                { y: selected[7].protein, label: selected[7].meal_name },
                { y: selected[8].protein, label: selected[8].meal_name },
                { y: selected[9].protein, label: selected[9].meal_name }
            ]
        },
        {
            type: "stackedBar",
            name: "Fat",
            showInLegend: "true",
            xValueFormatString: "",
            yValueFormatString: "",
            dataPoints: [
                { y: selected[0].fat, label: selected[0].meal_name },
                { y: selected[1].fat, label: selected[1].meal_name },
                { y: selected[2].fat, label: selected[2].meal_name },
                { y: selected[3].fat, label: selected[3].meal_name },
                { y: selected[4].fat, label: selected[4].meal_name },
                { y: selected[5].fat, label: selected[5].meal_name },
                { y: selected[6].fat, label: selected[6].meal_name },
                { y: selected[7].fat, label: selected[7].meal_name },
                { y: selected[8].fat, label: selected[8].meal_name },
                { y: selected[9].fat, label: selected[9].meal_name }
            ]
        }]
    });        
    chart.render();
    
    function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    halls = await getHalls();
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