// User Balance
const balance = document.getElementById('balance');
const balance2 = document.getElementById('balance-2');
// Donation Amounts
const noaBal = document.getElementById('noa-bal');
const feniBal = document.getElementById('feni-bal');
const quotaBal = document.getElementById('quota-bal');
const noaInput = document.getElementById('noa-input');
const feniInput = document.getElementById('feni-input');
const quotaInput = document.getElementById('quota-input');
const noaBtn = document.getElementById('noa-btn');
const feniBtn = document.getElementById('feni-btn');
const quotaBtn = document.getElementById('quota-btn');

// Donation & History Buttons && Pages
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationPage = document.getElementById('donation-page');
const historyPage = document.getElementById('history-page');
// Confirmation Modal
const confModal = document.getElementById('confirmation-modal');

// Donation Button Listener
donationBtn.addEventListener('click', function () {
  handleDonHisBtn('donation');
});
// History Button Listener
historyBtn.addEventListener('click', function () {
  handleDonHisBtn('history');
});

// Donation & History Button Action
function handleDonHisBtn(currentBtn) {
  const clickedClasses = ['bg-[#B4F461]', 'hover:bg-opacity-80', 'font-bold'];
  const blurClasses = [
    'text-gray-600',
    'hover:bg-gray-100',
    'font-semibold',
    'border',
    'border-gray-400',
  ];

  if (currentBtn === 'history') {
    for (const className of clickedClasses) {
      donationBtn.classList.remove(className);
      historyBtn.classList.add(className);
    }
    for (const className of blurClasses) {
      historyBtn.classList.remove(className);
      donationBtn.classList.add(className);
    }

    donationPage.classList.add('hidden');
    historyPage.classList.remove('hidden');
  } else if (currentBtn === 'donation') {
    for (const className of clickedClasses) {
      historyBtn.classList.remove(className);
      donationBtn.classList.add(className);
    }
    for (const className of blurClasses) {
      donationBtn.classList.remove(className);
      historyBtn.classList.add(className);
    }

    historyPage.classList.add('hidden');
    donationPage.classList.remove('hidden');
  }
}

noaBtn.addEventListener('click', function () {
  handleBalance('noakhali');
});
feniBtn.addEventListener('click', function () {
  handleBalance('feni');
});
quotaBtn.addEventListener('click', function () {
  handleBalance('quota');
});

// Donate Balance Handler
function handleBalance(area) {
  if (area === 'noakhali') {
    let noaDon = checkNumber(noaInput.value);

    balance.innerText = Number(balance.innerText) - noaDon;
    noaBal.innerText = Number(noaBal.innerText) + noaDon;
  } else if (area === 'feni') {
    let feniDon = checkNumber(feniInput.value);

    balance.innerText = Number(balance.innerText) - feniDon;
    feniBal.innerText = Number(feniBal.innerText) + feniDon;
  } else if (area === 'quota') {
    let quotaDon = checkNumber(quotaInput.value);

    balance.innerText = Number(balance.innerText) - quotaDon;
    quotaBal.innerText = Number(quotaBal.innerText) + quotaDon;
  }
}
// Check is a Number & Return or Alert
function checkNumber(num) {
  if (!isNaN(num) && num > 0) {
    if (Number(num) > Number(balance.innerText)) {
      alert('Insufficient Balance!');
      return 0;
    } else {
      return Number(num);
    }
  } else {
    alert('Please Give a Valid Amount!');
    return 0;
  }
}

// window.addEventListener(
//   'scroll',
//   function () {
//     window.scrollTo(0, 0);
//   },
//   { passive: false }
// );
