function lidoProcess(){
    const weight = document.getElementById('weight').value
    const loadingDoseRate = document.getElementById('loadingDoseRate').value
    const drugCon = document.getElementById('drugCon').value
    const weightxdose = weight * loadingDoseRate
    
    const loadingDose = weightxdose / drugCon

document.getElementById('result').innerHTML = "<h3>The loading dose is " + loadingDose.toFixed(2) + " ml</h3>" 
}

function lidoSyrProcess(){

    const weight = document.getElementById('weight').value
    const drugCon = document.getElementById('drugCon').value
    const criDuration = document.getElementById('criDuration').value
    const syringSize = document.getElementById('syringSize').value
    const lidocaine = document.getElementById('lidocaine').value
    const finDelRate = syringSize / criDuration
    const totDrug = (weight * criDuration) * lidocaine
    console.log (totDrug)
    const lidTotVol = totDrug / drugCon
    console.log(drugCon)
    const addSal = syringSize - lidTotVol;

document.getElementById('result2').innerHTML = "<h3>Total volume = " + lidTotVol.toFixed(2) + " ml<br>" +
"Final delivery rate = " + finDelRate.toFixed(2) + " ml</h3>"
}

