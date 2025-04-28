function scanSlots(auto=false) {
  const cards = document.querySelectorAll('.slot-card'); // Adjust selector per site
  const output = document.getElementById("output");
  if (!auto) output.innerHTML = '';

  if (cards.length === 0) {
    if (!auto) output.innerHTML = '<li>No slots found.</li>';
    return;
  }

  let profitableCount = 0;

  cards.forEach(card => {
    const title = card.querySelector('.slot-title')?.innerText || 'Unknown Slot';
    const rtpRaw = card.querySelector('.slot-rtp')?.innerText || '';
    const volatility = card.querySelector('.slot-volatility')?.innerText || 'Unknown';
    const bonusBuy = card.querySelector('.bonus-buy') ? "Available" : "Not Available";

    const rtp = parseFloat(rtpRaw.replace('%', '')) || 0;

    if (isProfitableSlot(rtp, volatility)) {
      if (!auto) {
        const li = document.createElement('li');
        li.textContent = `${title} - RTP: ${rtp}%, Volatility: ${volatility}, Bonus Buy: ${bonusBuy} [🔥 HOT SLOT]`;
        output.appendChild(li);
      } else {
        notifyProfitableSlot(title, rtp, volatility, bonusBuy);
      }
      profitableCount++;
    }
  });

  if (auto && profitableCount > 0) {
    console.log(`🎰 ${profitableCount} HOT SLOTS detected.`);
  }
}
