const si = require('simple-icons');

const iconKeys = [
  'siGamejolt', 'siVk', 'siYoutube', 'siBluesky', 'siDiscord', 'siInstagram', 'siItchdotio', 'siSteam', 'siTelegram', 'siX'
];

const results = {};

iconKeys.forEach(key => {
  const icon = si[key];
  if (icon) {
    results[key] = {
      title: icon.title,
      hex: '#' + icon.hex,
      path: icon.path
    };
  }
});

console.log(JSON.stringify(results, null, 2));
