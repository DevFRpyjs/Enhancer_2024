module.exports = {
  headers: {
    name: "FUT Trade Enhancer",
    namespace: "http://tampermonkey.net/",
    version: "20240925",
    description: "FUT Trade Enhancer",
    author: "DevFRpyjs",
    match: ["https://www.ea.com/ea-sports-fc/ultimate-team/web-app/*"],
    grant: ["GM_xmlhttpRequest", "GM_download"],
    connect: ["ea.com", "ea2.com", "futbin.com", "amazonaws.com"]
  },
};
