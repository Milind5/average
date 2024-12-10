let numPairs = 0;
let aValues = [];
let bValues = [];

function generateInputFields() {
    numPairs = document.getElementById("numPairs").value;
    
    if (numPairs <= 0) {
        alert("Please enter a valid number of pairs.");
        return;
    }

    const pairsContainer = document.getElementById("pairsContainer");
    pairsContainer.innerHTML = "";  // Clear any existing inputs

    for (let i = 1; i <= numPairs; i++) {
        const pairDiv = document.createElement("div");
        pairDiv.classList.add("pair-input");

        const labelA = document.createElement("label");
        labelA.setAttribute("for", `a${i}`);
        labelA.textContent = `Enter Weight${i}:`;
        pairDiv.appendChild(labelA);

        const inputA = document.createElement("input");
        inputA.setAttribute("type", "number");
        inputA.setAttribute("id", `a${i}`);
        inputA.setAttribute("name", `a${i}`);
        pairDiv.appendChild(inputA);

        const labelB = document.createElement("label");
        labelB.setAttribute("for", `b${i}`);
        labelB.textContent = `Enter Amount${i}:`;
        pairDiv.appendChild(labelB);

        const inputB = document.createElement("input");
        inputB.setAttribute("type", "number");
        inputB.setAttribute("id", `b${i}`);
        inputB.setAttribute("name", `b${i}`);
        pairDiv.appendChild(inputB);

        pairsContainer.appendChild(pairDiv);
    }

    document.getElementById("pairForm").style.display = "none";
    document.getElementById("pairsInputForm").style.display = "block";
}

function calculate() {
    aValues = [];
    bValues = [];

    // Collect input values
    for (let i = 1; i <= numPairs; i++) {
        const a = document.getElementById(`a${i}`).value;
        const b = document.getElementById(`b${i}`).value;

        if (a === "" || b === "") {
            alert("Please fill in all fields.");
            return;
        }

        aValues.push(parseInt(a));
        bValues.push(parseInt(b));
    }

    // Calculate sums
    let aShellSum = aValues.reduce((sum, value) => sum + value, 0);
    let bShellSum = bValues.reduce((sum, value) => sum + value, 0);

    let count = aValues.length;

    // Display the results
    document.getElementById("totalPairs").textContent = `Total pairs entered: ${count}`;
    document.getElementById("aShellSum").textContent = `Weight: ${aShellSum}`;
    document.getElementById("bShellSum").textContent = `Amount: ${bShellSum}`;
    
    if (aShellSum !== 0) {
        let result = bShellSum / aShellSum;
        document.getElementById("divisionResult").textContent = `Average Of Amount and Weight: ${result.toFixed(2)}`;
    } else {
        document.getElementById("divisionResult").textContent = "Division by zero is not allowed (A Shell Sum is 0).";
    }

    document.getElementById("results").style.display = "block";
}
