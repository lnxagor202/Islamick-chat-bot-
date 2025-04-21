const { loadImage, createCanvas } = require('canvas');
const axios = require('axios');
const fs = require('fs-extra');

// Function to generate a custom image with text
async function createCustomImage(text) {
  // Set canvas size
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');

  // Set background color
  ctx.fillStyle = '#EEEEE';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load a background image
  const backgroundImage = await loadImage('https://example.com/background.png');
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // Set text properties
  ctx.fillStyle = '#00FF00';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Wrap the text (if it's too long)
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Save the canvas to a file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./output.png', buffer);

  return './output.png'; // Return the path of the saved image
}

// Function to send image
async function sendImageToUser(api, event, imagePath) {
  const { senderID, threadID, messageID } = event;
  await api.sendMessage({
    attachment: fs.createReadStream(imagePath)
  }, threadID, messageID);
}

// Main function to create an image and send
async function processImageAndSend(api, event, text) {
  const imagePath = await createCustomImage(text);
  await sendImageToUser(api, event, imagePath);
  console.log('Image sent successfully!');
}

module.exports = {
  name: 'generateImage',
  description: 'Generate an image with custom text and send it to the user.',
  commandCategory: 'General',
  usages: 'generateImage <text>',
  cooldowns: 10,
  dependencies: {
    canvas: '',
    axios: '',
    fs-extra: ''
  },
  run: async ({ api, event, args }) => {
    const text = args.join(' ') || 'Default Text';
    await processImageAndSend(api, event, text);
  }
};
