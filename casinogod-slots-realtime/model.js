function isProfitableSlot(rtp, volatility) {
  if (rtp >= 96 && (volatility === "Low" || volatility === "Medium")) {
    return true;
  }
  if (rtp >= 97) { 
    return true;
  }
  return false;
}
