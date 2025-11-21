// ==========================================
// BAGIAN 1: LOGIKA KALKULATOR
// ==========================================

let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

const currentElement = document.getElementById('current-operand');
const previousElement = document.getElementById('previous-operand');

function updateDisplay() {
    currentElement.innerText = currentOperand;
    if (operation != null) {
        previousElement.innerText = `${previousOperand} ${operation}`;
    } else {
        previousElement.innerText = '';
    }
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        // Batasi panjang angka biar tidak merusak tampilan
        if(currentOperand.length < 10) {
            currentOperand = currentOperand.toString() + number.toString();
        }
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') currentOperand = '0';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '*': computation = prev * current; break;
        case '/': computation = prev / current; break;
        case '%': computation = prev % current; break;
        default: return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

// ==========================================
// BAGIAN 2: LOGIKA JAM DIGITAL
// ==========================================

function updateClock() {
    const now = new Date();
    
    // Ambil jam, menit, detik dengan format 2 digit (01, 02, dst)
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Update tampilan Jam
    const clockTime = document.getElementById('clock-time');
    if(clockTime) {
        clockTime.innerText = `${hours}:${minutes}:${seconds}`;
    }

    // Update Tanggal
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const clockDate = document.getElementById('clock-date');
    if(clockDate) {
        clockDate.innerText = now.toLocaleDateString('id-ID', optionsDate); // Pakai 'id-ID' biar bahasa Indonesia
    }

    // Update Hari
    const optionsDay = { weekday: 'long' };
    const clockDay = document.getElementById('clock-day');
    if(clockDay) {
        clockDay.innerText = now.toLocaleDateString('id-ID', optionsDay);
    }
}

// Jalankan fungsi updateClock setiap 1000 milidetik (1 detik)
setInterval(updateClock, 1000);

// Panggil sekali saat pertama kali load biar tidak kosong
updateClock();