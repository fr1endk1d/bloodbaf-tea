// qr-code-generator.js

const QRCode = require('qrcode');

const generateQRCode = async (data, filename) => {
  try {
    await QRCode.toFile(filename, data);

    console.log(`QR code generated for ${data} and saved as ${filename}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  generateQRCode,
};
