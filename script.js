let saldo = localStorage.getItem("saldo") || 0;

document.getElementById("saldo").innerText = saldo + " TON";

function minerar() {
    saldo = parseFloat(saldo) + 0.05;
    localStorage.setItem("saldo", saldo);
    document.getElementById("saldo").innerText = saldo + " TON";
}

function bonus() {
    saldo = parseFloat(saldo) + 0.1;
    localStorage.setItem("saldo", saldo);
    document.getElementById("saldo").innerText = saldo + " TON";
}
