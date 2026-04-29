const userLinks = {
  "test1": "https://roblox.com",
  "coolguy": "https://roblox.com"
};

const vanityName = window.location.pathname.substring(1);

if (userLinks[vanityName]) {
    // This overwrites your link with the one from the list above
    window.TARGET_URL = userLinks[vanityName];
}
