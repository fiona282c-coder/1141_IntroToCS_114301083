
const submitBtn = document.getElementById("submitBtn");
let rowCount = 0;

submitBtn.addEventListener("click", function () {
    const mathVal = parseFloat(document.getElementById("mathInput").value);
    const engVal = parseFloat(document.getElementById("englishInput").value);
    
    if (isNaN(mathVal) || isNaN(engVal)) return;

    rowCount++;
    const tableBody = document.querySelector("#gradeTable tbody");
    const rowAvg = (mathVal + engVal) / 2;

    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${rowCount}</td>
        <td class="mathScore">${mathVal}</td>
        <td class="engScore">${engVal}</td>
        <td>${rowAvg.toFixed(2)}</td>
    `;

    updateColumnAverages();
});

function updateColumnAverages() {
    const mathScores = document.querySelectorAll(".mathScore");
    const engScores = document.querySelectorAll(".engScore");
    
    let mathSum = 0;
    let engSum = 0;

    for (let i = 0; i < mathScores.length; i++) {
        mathSum += parseFloat(mathScores[i].innerText);
        engSum += parseFloat(engScores[i].innerText);
    }

    const mAvg = mathSum / rowCount;
    const eAvg = engSum / rowCount;
    const totalAvg = (mAvg + eAvg) / 2;

    document.getElementById("mathAvg").innerText = mAvg.toFixed(2);
    document.getElementById("englishAvg").innerText = eAvg.toFixed(2);
    document.getElementById("overallAvg").innerText = totalAvg.toFixed(2);
}