
let calculation = () => {
    let principalField = document.querySelector(".principal");
    let principal = parseFloat(principalField.value)
    let selectedRate = document.getElementById("duration-select")
    let actualRate = parseFloat(selectedRate[selectedRate.selectedIndex].value);
    let para = document.querySelector(".Interest")
    if (actualRate==1) {
        let prorated = (0.06/365.2425)*30;
        let interest = principal*prorated*30
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate==2) {
        prorated = (0.08/365.2425)*60;
        interest = principal*prorated*60
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate==3) {
        prorated = (0.01/365.2425)*90;
        interest = principal*prorated*90
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==4) {
        prorated = (0.13/365.2425)*120
        interest = principal*prorated*120
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==5){
        prorated = (0.13/365.2425)*150
        interest = principal*prorated*150
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==6) {
        prorated = (0.13/365.2425)*180
        interest = principal*prorated*180
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==7) {
        prorated = (0.13/365.2425)*210
        interest = principal*prorated*210
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==8) {
        prorated = (0.13/365.2425)*240
        interest = principal*prorated*240
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==9) {
        prorated = (0.13/365.2425)*270
        interest = principal*prorated*270
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==10) {
        prorated = (0.13/365.2425)*300
        interest = principal*prorated*300
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==11) {
        prorated = (0.13/365.2425)*330
        interest = principal*prorated*330
        para.textContent = "₦"+interest.toFixed(2);
    }else if (actualRate ==12) {
        interest = principal*13*1
        para.textContent = "₦"+interest.toFixed(2);
    }else{
    console.log("InvalidInput")
    }
}
let calculate = document.querySelector(".calculate")
calculate.addEventListener('click',calculation)

