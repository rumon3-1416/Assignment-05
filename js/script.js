const confModal = document.getElementById('confirmation-modal');

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationPage = document.getElementById('donation-page');
const historyPage = document.getElementById('history-page');

donationBtn.addEventListener('click', function () {
  handleDonHisBtn('donation');
});
historyBtn.addEventListener('click', function () {
  handleDonHisBtn('history');
});

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

// window.addEventListener(
//   'scroll',
//   function () {
//     window.scrollTo(0, 0);
//   },
//   { passive: false }
// );
