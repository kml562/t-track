let plan_price = document.getElementById("plan_price")
let Plan_price_prof = document.getElementById("Plan_price_prof")
let annual_p;
let month_p;

// function declaretion
let month = document.getElementById("month")
month.onclick = () => {
    monthplan()
}

let annually = document.getElementById("annually")
annually.onclick = () => {
    annuallyPlan()
}



// funcitons deffinations
const annuallyPlan = () => {
    // console.log("hello")
    plan_price.innerHTML = null;
    plan_price.innerHTML = '$7&#x00b3'
    annual_p = 7
    Plan_price_prof.innerHTML = null;
    Plan_price_prof.innerHTML = '$5&#x00b3'
    month_p = 5


}
const monthplan = () => {
    // console.log("hello")
    plan_price.innerHTML = null;
    plan_price.innerHTML = '$8&#x00b3'
    annual_p = 8
    Plan_price_prof.innerHTML = null;
    Plan_price_prof.innerHTML = '$6&#x00b3'
    month_p = 6

}
let price_btn = document.getElementById("bussiness")
price_btn.onclick = () => {
    BusinessPlan()
}

let Professional_btn = document.getElementById("Professional")
Professional_btn.onclick = () => {
    ProfessionalPlan()
}


const BusinessPlan = async () => {
    let team_size = document.getElementById("team_number").value;
    let time;
    let Price;
    if (annual_p == 7) {
        time = "Annual Plan"
        Price = 7

    } if (annual_p == 8) {
        time = "Monthly Plan"
        Price = 8
    }
    let Send_this_data = {
        "Plan_size": time,
        "Team_size": team_size,
        "Price": Price,
        "Plan": "Business Plan"

    }
    let res = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        body: JSON.stringify(Send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    console.log(data)


}
const ProfessionalPlan = async () => {
    let team_size = document.getElementById("team_number").value;
    let time;
    let Price;
    if (annual_p == 7) {
        time = "Annual Plan"
        Price = 7

    } if (annual_p == 8) {
        time = "Monthly Plan"
        Price = 8
    }
    let Send_this_data = {
        "Plan_size": time,
        "Team_size": team_size,
        "Price": Price,
        "Plan": "Professinal Plan"

    }
    let res = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        body: JSON.stringify(Send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })
    let data = await res.json()
    console.log(data)

}