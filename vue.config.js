// vue.config.js
module.exports = {
  devServer: {
    allowedHosts: ["all"],  // ✅ Correct array format
    host: "0.0.0.0"          // (optional) allow access from LAN
  }
};
