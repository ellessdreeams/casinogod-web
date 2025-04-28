function startMonitor() {
  console.log("🚀 Real-Time Slot Monitor Activated!");
  setInterval(() => {
    console.log("🔍 Scanning for profitable slots...");
    scanSlots(true);
  }, MONITOR_INTERVAL_MS);
}

function notifyProfitableSlot(title, rtp, volatility, bonusBuy) {
  if (Notification.permission === "granted") {
    new Notification(`🎰 HOT SLOT FOUND!`, {
      body: `${title}\nRTP: ${rtp}%\nVolatility: ${volatility}\nBonus Buy: ${bonusBuy}`,
      icon: "icon128.png" // optional if you have
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(`🎰 HOT SLOT FOUND!`, {
          body: `${title}\nRTP: ${rtp}%\nVolatility: ${volatility}\nBonus Buy: ${bonusBuy}`
        });
      }
    });
  }
}
