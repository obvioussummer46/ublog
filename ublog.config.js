module.exports = {
  title: "uBlog",
  description:
    "A minimalist blog on nostr that allows anyone to easily create their own personal micro-blog.",
  favicon:
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Greek_lc_mu.svg",
  logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Greek_lc_mu.svg",
  npub: "npub1hk08saqjqxj0u98vjyeh8rd7n3828wh60wsf74nwkjexwlg22x6q4acuqq",
  themes: [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ],
  customThemes: [
    {
      custom: {
        primary: "#ef7951",
        secondary: "#ea0eb3",
        accent: "#9d66d1",
        neutral: "#1D252B",
        "base-100": "#403B59",
        info: "#A0BEE4",
        success: "#12825D",
        warning: "#C87114",
        error: "#E9445F",
      },
    },
  ],
  relays: [
    "wss://relay.snort.social",
    "wss://nostr-pub.wellorder.net",
    "wss://relay.damus.io",
    "wss://nos.lol",
    "wss://nostr.wine",
    // "wss://nostr.nostrelay.org",
    // "wss://relay.nostr.ch",
    // "wss://nostr.bitcoiner.social",
    // "wss://nostr.onsats.org",
    // "wss://nostr-relay.wlvs.space",
    // "wss://nostr.zebedee.cloud",
    // "wss://relay.nostr.info",
  ],
};
