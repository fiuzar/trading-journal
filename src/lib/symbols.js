export const symbols = [
  // ===== FOREX MAJORS =====
  { value: "EURUSD", label: "EUR/USD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "GBPUSD", label: "GBP/USD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "USDJPY", label: "USD/JPY", type: "forex", pipValue: 9.1, lotSize: 100000 },
  { value: "USDCHF", label: "USD/CHF", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "USDCAD", label: "USD/CAD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "AUDUSD", label: "AUD/USD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "NZDUSD", label: "NZD/USD", type: "forex", pipValue: 10, lotSize: 100000 },

  // ===== FOREX MINORS / CROSSES =====
  { value: "EURGBP", label: "EUR/GBP", type: "forex", pipValue: 12, lotSize: 100000 },
  { value: "EURJPY", label: "EUR/JPY", type: "forex", pipValue: 9.3, lotSize: 100000 },
  { value: "EURCHF", label: "EUR/CHF", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "EURAUD", label: "EUR/AUD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "EURNZD", label: "EUR/NZD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "GBPJPY", label: "GBP/JPY", type: "forex", pipValue: 8.7, lotSize: 100000 },
  { value: "GBPAUD", label: "GBP/AUD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "GBPCAD", label: "GBP/CAD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "GBPNZD", label: "GBP/NZD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "AUDJPY", label: "AUD/JPY", type: "forex", pipValue: 9.2, lotSize: 100000 },
  { value: "AUDCAD", label: "AUD/CAD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "AUDNZD", label: "AUD/NZD", type: "forex", pipValue: 10, lotSize: 100000 },
  { value: "CADJPY", label: "CAD/JPY", type: "forex", pipValue: 9.3, lotSize: 100000 },
  { value: "CHFJPY", label: "CHF/JPY", type: "forex", pipValue: 9.1, lotSize: 100000 },
  { value: "NZDJPY", label: "NZD/JPY", type: "forex", pipValue: 9.3, lotSize: 100000 },
  { value: "NZDCAD", label: "NZD/CAD", type: "forex", pipValue: 10, lotSize: 100000 },

  // ===== METALS =====
  { value: "XAUUSD", label: "Gold (XAU/USD)", type: "metal", pipValue: 100, lotSize: 100 },
  { value: "XAGUSD", label: "Silver (XAG/USD)", type: "metal", pipValue: 50, lotSize: 5000 },
  { value: "XPTUSD", label: "Platinum (XPT/USD)", type: "metal", pipValue: 100, lotSize: 100 },
  { value: "XPDUSD", label: "Palladium (XPD/USD)", type: "metal", pipValue: 100, lotSize: 100 },

  // ===== CRYPTOS =====
  { value: "BTCUSD", label: "Bitcoin (BTC/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "ETHUSD", label: "Ethereum (ETH/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "LTCUSD", label: "Litecoin (LTC/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "XRPUSD", label: "Ripple (XRP/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "ADAUSD", label: "Cardano (ADA/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "SOLUSD", label: "Solana (SOL/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "BNBUSD", label: "Binance Coin (BNB/USD)", type: "crypto", pipValue: 1, lotSize: 1 },
  { value: "DOGEUSD", label: "Dogecoin (DOGE/USD)", type: "crypto", pipValue: 1, lotSize: 1 },

  // ===== INDICES =====
  { value: "US30", label: "Dow Jones (US30)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "NAS100", label: "Nasdaq 100 (NAS100)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "SPX500", label: "S&P 500 (SPX500)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "GER30", label: "DAX 30 (GER30)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "UK100", label: "FTSE 100 (UK100)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "FRA40", label: "CAC 40 (FRA40)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "JPN225", label: "Nikkei 225 (JPN225)", type: "index", pipValue: 1, lotSize: 1 },
  { value: "HK50", label: "Hang Seng (HK50)", type: "index", pipValue: 1, lotSize: 1 },

  // ===== COMMODITIES =====
  { value: "WTICOUSD", label: "WTI Crude Oil (WTI/USD)", type: "commodity", pipValue: 10, lotSize: 1000 },
  { value: "BRENTUSD", label: "Brent Crude (Brent/USD)", type: "commodity", pipValue: 10, lotSize: 1000 },
  { value: "NGASUSD", label: "Natural Gas (NGAS/USD)", type: "commodity", pipValue: 10, lotSize: 1000 },
  { value: "COPPERUSD", label: "Copper (COPPER/USD)", type: "commodity", pipValue: 10, lotSize: 25000 },

  // ===== EXOTICS =====
  { value: "USDTRY", label: "USD/TRY", type: "forex", pipValue: 7, lotSize: 100000 },
  { value: "USDMXN", label: "USD/MXN", type: "forex", pipValue: 5, lotSize: 100000 },
  { value: "USDZAR", label: "USD/ZAR", type: "forex", pipValue: 6, lotSize: 100000 },
];
