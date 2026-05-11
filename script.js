const header = document.querySelector("[data-site-header]");
const nav = document.querySelector("[data-site-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const langToggle = document.querySelector("[data-lang-toggle]");

const translations = {
  ar: {
    title: "BIIE New York | Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ",
    description: "ØµÙØ­Ø© BIIE New York Ù„Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ. ØªØ³ÙˆÙ‚ÙŠ Ù…ÙƒÙŠØ§Ø¬ BIIE Ù„Ù„Ø´ÙØ§Ù‡ ÙˆØ§Ù„ÙˆØ¬Ù‡ ÙˆØ§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ§Ù„Ø£Ø¸Ø§ÙØ± Ø¹Ø¨Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©.",
    selectors: [
      [".skip-link", "ØªØ®Ø·ÙŠ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø­ØªÙˆÙ‰"],
      [".site-nav a:nth-child(1)", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©"],
      [".site-nav a:nth-child(2)", "Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§"],
      [".site-nav a:nth-child(3)", "Ù„Ù„Ø®Ù„ÙŠØ¬"],
      [".site-nav a:nth-child(4)", "Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø§Øª"],
      [".site-nav a:nth-child(5)", "ØªÙˆØ§ØµÙ„"],
      [".header-cta", "ØªØ³ÙˆÙ‚ÙŠ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§"],
      [".hero-copy .eyebrow", "Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø±Ø³Ù…ÙŠ ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬"],
      [".hero-line", "Ø£Ù„ÙˆØ§Ù† Ù†ÙŠÙˆÙŠÙˆØ±Ùƒ Ø¨Ø«Ø¨Ø§Øª ÙŠÙ†Ø§Ø³Ø¨ Ø§Ù„Ø®Ù„ÙŠØ¬."],
      [".hero-text", "Ø´ÙØ§Ù‡ Ù…Ø¹Ø¨Ø±Ø©ØŒ Ø¨Ø´Ø±Ø© Ù…ØµÙ‚ÙˆÙ„Ø©ØŒ Ø¹ÙŠÙˆÙ† Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆÙ„Ù…Ø¹Ø© Ø£Ø¸Ø§ÙØ± Ø£Ù†ÙŠÙ‚Ø©ØŒ Ù…ØªØ§Ø­Ø© Ù„Ù„Ù…ØªØ³ÙˆÙ‚Ø§Øª ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬ Ø¹Ø¨Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
      [".hero-actions .primary", "ØªØ³ÙˆÙ‚ÙŠ BIIE Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
      [".hero-actions .secondary", "ÙˆØ§ØªØ³Ø§Ø¨ Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
      [".hero-note span:first-child", "Ù„Ø£Ù†Ùƒ ØªÙ‡Ù…ÙŠÙ†Ù†Ø§"],
      [".hero-note span:last-child", "ÙˆØ¬Ù‡ · Ø´ÙØ§Ù‡ · Ø¹ÙŠÙˆÙ† · Ø£Ø¸Ø§ÙØ±"],
      [".trust-bar div:nth-child(1) strong", "Ø¯Ø¹Ù… Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"],
      [".trust-bar div:nth-child(2) strong", "Ù…Ø³Ø§Ø± Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ø±Ø³Ù…ÙŠ"],
      [".trust-bar div:nth-child(2) span", "Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
      [".trust-bar div:nth-child(3) strong", "Ø£ØµÙ„ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"],
      [".trust-bar div:nth-child(4) strong", "Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
      [".intro-kicker", "Ø£Ù„ÙˆØ§Ù† Ø¹Ø§Ù„Ù…ÙŠØ© Ø¹Ø¨Ø± Ù…Ø³Ø§Ø± Ù…Ø­Ù„ÙŠ"],
      [".intro-grid h2", "Ù…ØµÙ…Ù…Ø© Ù„Ù„Ù…Ø±Ø£Ø© Ø§Ù„ØªÙŠ ØªØ±ÙŠØ¯ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø© Ø£ÙˆÙ„Ø§ØŒ Ø«Ù… Ø§Ù„Ø´Ø±Ø§Ø¡ Ø¨Ø³Ù‡ÙˆÙ„Ø©."],
      [".intro-grid p", "Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© ØªÙ‚Ø±Ø¨ BIIE Ù…Ù† Ø§Ù„Ù…Ù†ØªØ¬: Ø§Ù„Ø¯Ø±Ø¬Ø©ØŒ Ø§Ù„Ù„Ù…Ø³Ø© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©ØŒ Ø§Ù„Ù…Ù„Ù…Ø³ØŒ ÙˆÙ…ÙƒØ§Ù† Ø§Ù„Ø´Ø±Ø§Ø¡. Ù„ÙŠØ³Øª Ø¨Ø¯ÙŠÙ„Ø§ Ù„Ù„ÙƒØªØ§Ù„ÙˆØ¬ØŒ Ø¨Ù„ Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ù‚Ø¨Ù„ Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ø±Ø³Ù…ÙŠ."],
      [".collection .section-lead .eyebrow", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©"],
      [".collection .section-lead p:last-child", "Ø§Ø¨Ø¯Ø¦ÙŠ Ù…Ù† Ø§Ù„Ù„Ù…Ø³Ø© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©: Ø¨Ø´Ø±Ø© Ù…Ù†ØªØ¹Ø´Ø©ØŒ Ù„ÙˆÙ† Ù…ØµÙ‚ÙˆÙ„ØŒ ØªØ­Ø¯ÙŠØ¯ Ù„Ù„Ø±Ù…ÙˆØ´ØŒ ÙˆÙ„Ù…Ø¹Ø© Ø£Ø¸Ø§ÙØ± ÙÙŠ Ø§Ø®ØªÙŠØ§Ø± ÙˆØ§Ø­Ø¯ Ù…Ù† BIIE."],
      ["#collection-title", "Ø®Ù…Ø³ Ø·Ù‚ÙˆØ³ Ø¬Ù…Ø§Ù„ØŒ ÙˆÙ„Ù…Ø³Ø© BIIE ÙˆØ§Ø­Ø¯Ø©."],
      [".category-card.feature:not(.feature-secondary) span", "Ø¨ÙˆØªÙˆÙƒØ³"],
      [".category-card.feature:not(.feature-secondary) h3", "Ø§Ù†ØªØ¹Ø§Ø´ Ø¨ÙˆØªÙˆÙƒØ³ ÙˆÙ„Ù…Ø³Ø© Ù…ØµÙ‚ÙˆÙ„Ø©"],
      [".category-card.feature:not(.feature-secondary) p", "Ù…Ø¸Ù‡Ø± Ø£Ù†Ø¹Ù… ÙˆØ£ÙƒØ«Ø± Ø±Ø§Ø­Ø© Ù…Ø¹ Ù„Ù…Ø¹Ø§Ù† Ù†Ø¸ÙŠÙ ÙŠØ¸Ù‡Ø± Ø¬Ù…ÙŠÙ„Ø§ ÙÙŠ Ø¶ÙˆØ¡ Ø§Ù„Ù†Ù‡Ø§Ø± Ø£Ùˆ Ø§Ù„Ù…Ø³Ø§Ø¡."],
      [".feature-secondary span", "Ø´ÙØ§Ù‡"],
      [".feature-secondary h3", "Ù„ÙˆÙ† ÙŠØ­Ù…Ù„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø©"],
      [".feature-secondary p", "Ù†ØªÙŠØ¬Ø© Ø¯Ø§ÙØ¦Ø© ÙˆÙˆØ§Ø¶Ø­Ø© ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø£Ù†Ø§Ù‚Ø© Ø§Ù„ÙŠÙˆÙ…ÙŠØ© ÙˆÙ„Ø­Ø¸Ø§Øª Ø§Ù„Ù…ÙƒÙŠØ§Ø¬ Ø§Ù„Ù…Ø³Ø§Ø¦ÙŠØ©."],
      [".category-card.face span", "ÙˆØ¬Ù‡"],
      [".category-card.face h3", "ÙØ§ÙˆÙ†Ø¯ÙŠØ´Ù† ÙˆØ¨Ø±Ø§ÙŠÙ…Ø±"],
      [".category-card.face p", "Ù…Ù„Ù…Ø³ Ø¨Ø´Ø±Ø© Ù…ØµÙ‚ÙˆÙ„ ÙˆØ¯Ø±Ø¬Ø§Øª ØªÙ†Ø§Ø³Ø¨ Ø±ÙˆØªÙŠÙ† Ø§Ù„Ù…ÙƒÙŠØ§Ø¬ Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬."],
      [".category-card.eyes span", "Ø¹ÙŠÙˆÙ†"],
      [".category-card.eyes h3", "Ù…Ø§Ø³ÙƒØ§Ø±Ø§ ÙˆØªØ­Ø¯ÙŠØ¯"],
      [".category-card.eyes p", "ØµØ¨ØºØ© Ø³ÙˆØ¯Ø§Ø¡ØŒ Ø±Ù…ÙˆØ´ Ù…Ø±ÙÙˆØ¹Ø©ØŒ ÙˆØªØ­Ø¯ÙŠØ¯ Ù†Ø¸ÙŠÙ ÙŠÙ†ØªÙ‚Ù„ Ù…Ù† Ø§Ù„Ù†Ù‡Ø§Ø± Ø¥Ù„Ù‰ Ø§Ù„Ù„ÙŠÙ„."],
      [".category-card.nails span", "Ø£Ø¸Ø§ÙØ±"],
      [".category-card.nails h3", "Ø£Ù„ÙˆØ§Ù† Ø£Ø¸Ø§ÙØ± Color Expert"],
      [".category-card.nails p", "Ø£Ù„ÙˆØ§Ù† Ù„Ø§Ù…Ø¹Ø© ØªÙ…Ù†Ø­ Ø§Ù„ÙŠØ¯ÙŠÙ† Ù„Ù…Ø³Ø© ØªÙƒÙ…Ù„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„."],
      [".bestseller-copy .eyebrow", "ØªØ±ÙƒÙŠØ² Ø¹Ù„Ù‰ Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§"],
      ["#bestseller-title", "Matte Kiss ProofØŒ Ù…Ù†ØªØ¬ Ø§Ù„Ù„ÙˆÙ† Ø§Ù„Ù„Ø§ÙØª."],
      [".bestseller-copy p", "Ù‚ØµØ© Ø§Ù„Ø´ÙØ§Ù‡ Ù„Ø¯Ù‰ BIIE Ù…Ø¨Ø§Ø´Ø±Ø©: Ù„ÙˆÙ† ÙˆØ§Ø¶Ø­ØŒ Ù„Ù…Ø³Ø© Ù†Ø¸ÙŠÙØ©ØŒ ÙˆØ®Ø²Ø§Ù†Ø© Ø¯Ø±Ø¬Ø§Øª ØªÙ†ØªÙ‚Ù„ Ù…Ù† Ø§Ù„ÙˆØ±Ø¯ÙŠ Ø§Ù„ÙŠÙˆÙ…ÙŠ Ø§Ù„Ø¯Ø§ÙØ¦ Ø¥Ù„Ù‰ Ø§Ù„ØªÙˆØªÙŠ Ø§Ù„Ø¹Ù…ÙŠÙ‚ Ù„Ù„Ù…Ø³Ø§Ø¡."],
      [".text-link", "Ø´Ø§Ù‡Ø¯ÙŠ Ù…Ù†ØªØ¬Ø§Øª BIIE Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
      [".gulf-copy .eyebrow", "Ù„Ø±ÙˆØªÙŠÙ† Ø§Ù„Ø¬Ù…Ø§Ù„ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
      ["#gulf-title", "Ù…ØµÙ…Ù…Ø© Ù„ØªÙ…Ù†Ø­Ùƒ Ù…Ø¸Ù‡Ø±Ø§ Ù…ØµÙ‚ÙˆÙ„Ø§ ÙÙŠ Ø§Ù„Ø£ÙŠØ§Ù… Ø§Ù„Ø³Ø§Ø·Ø¹Ø©ØŒ Ø§Ù„Ø¹Ø´Ø§Ø¡Ø§Øª Ø§Ù„Ù…ØªØ£Ø®Ø±Ø©ØŒ ÙˆØ¥Ø¶Ø§Ø¡Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª."],
      [".gulf-copy p", "ØªØªÙˆÙ‚Ø¹ Ø§Ù„Ù…ØªØ³ÙˆÙ‚Ø© Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© Ù…ÙƒÙŠØ§Ø¬Ø§ ÙŠØ¸Ù‡Ø± Ø¬Ù…ÙŠÙ„Ø§ ÙÙŠ Ø§Ù„ØµÙˆØ±ØŒ ÙŠØ­Ù…Ù„ Ø§Ù„Ù„ÙˆÙ† Ø¨ÙˆØ¶ÙˆØ­ØŒ ÙˆÙŠØ¨Ù‚Ù‰ Ø£Ù†ÙŠÙ‚Ø§ Ø¹Ù† Ù‚Ø±Ø¨. ØªÙ…Ù†Ø­ Ù…Ø¬Ù…ÙˆØ¹Ø© BIIE Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø´Ø±ÙŠÙƒ ÙˆØ¹Ø¯Ø§ Ø¨Ø³ÙŠØ·Ø§: Ø§Ø®ØªØ§Ø±ÙŠ Ø§Ù„Ù„Ù…Ø³Ø© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©ØŒ Ø«Ù… Ø§Ø´ØªØ±ÙŠ Ø¹Ø¨Ø± Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ù…Ø­Ù„ÙŠ."],
      [".gulf-points div:nth-child(1) h3", "Ù…Ø³Ø§Ø± Ø´Ø±Ø§Ø¡ Ù…Ø¨Ø§Ø´Ø±"],
      [".gulf-points div:nth-child(1) p", "ÙƒÙ„ Ù‚Ø³Ù… Ø±Ø¦ÙŠØ³ÙŠ ÙŠÙ‚ÙˆØ¯ Ø¥Ù„Ù‰ ØµÙØ­Ø© BIIE Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
      [".gulf-points div:nth-child(2) h3", "ØªÙˆØ§ØµÙ„ Ù…Ø­Ù„ÙŠ"],
      [".gulf-points div:nth-child(2) p", "Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨ ÙˆØ§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ÙˆØ§Ø¶Ø­Ø§Ù† Ø¯ÙˆÙ† Ù…Ù‚Ø§Ø·Ø¹Ø© Ù‚ØµØ© Ø§Ù„Ø¹Ù„Ø§Ù…Ø©."],
      [".gulf-points div:nth-child(3) h3", "Ø¯Ù„ÙŠÙ„ Ø¨ØµØ±ÙŠ Ù…Ù† Ø§Ù„Ù…Ù†ØªØ¬"],
      [".gulf-points div:nth-child(3) p", "ØµÙˆØ± Ø¨Ø·Ø§Ø¨Ø¹ BIIE Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ ØªØ­Ù…Ù„ Ø§Ù„ØµÙØ­Ø© Ø¨Ø¯Ù„Ø§ Ù…Ù† Ø²Ø®Ø§Ø±Ù Ø¬Ù…Ø§Ù„ Ø¹Ø§Ù…Ø©."],
      [".looks .section-heading .eyebrow", "Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø§Øª"],
      ["#looks-title", "Ø§Ø®ØªØ§Ø±ÙŠ Ø§Ù„Ù…Ø²Ø§Ø¬ Ù‚Ø¨Ù„ Ø§Ù„Ø¯Ø±Ø¬Ø©."],
      [".look-card:nth-child(1) span", "Ø³ÙˆÙØª ØºÙ„Ø§Ù…"],
      [".look-card:nth-child(1) p", "Ø´ÙØ§Ù‡ ÙˆØ±Ø¯ÙŠØ©ØŒ Ø±Ù…ÙˆØ´ Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆØ¨Ø´Ø±Ø© Ù…Ø¶ÙŠØ¦Ø©."],
      [".look-card:nth-child(2) span", "ØªÙˆØªÙŠ Ù…Ø³Ø§Ø¦ÙŠ"],
      [".look-card:nth-child(2) p", "Ù„ÙˆÙ† Ø´ÙØ§Ù‡ Ø¹Ù…ÙŠÙ‚ Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© Ø°Ù‡Ø¨ÙŠØ© Ø¯Ø§ÙØ¦Ø©."],
      [".look-card:nth-child(3) span", "Ø§Ø®ØªÙŠØ§Ø± ÙŠÙˆÙ…ÙŠ"],
      [".look-card:nth-child(3) p", "Ø¨Ø´Ø±Ø© Ù…ÙˆØ­Ø¯Ø©ØŒ Ø±Ù…ÙˆØ´ Ù…Ø­Ø¯Ø¯Ø©ØŒ Ù‚Ù„ÙˆØ³ØŒ ÙˆØ·Ù„Ø§Ø¡ Ø£Ø¸Ø§ÙØ±."],
      [".store-panel .eyebrow", "ØªØ³ÙˆÙ‚ÙŠ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"],
      ["#store-title", "Ù…Ù† Ø§ÙƒØªØ´Ø§Ù BIIE Ø¥Ù„Ù‰ Ø§Ù„Ø¯ÙØ¹ Ø¹Ø¨Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
      [".store-panel p", "Ù„ØªÙˆÙØ± Ø§Ù„Ù…Ù†ØªØ¬Ø§ØªØŒ ØªØµÙØ­ Ø§Ù„Ø¯Ø±Ø¬Ø§ØªØŒ ÙˆØ§Ù„Ø´Ø±Ø§Ø¡ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†ØŒ Ø§Ø³ØªØ®Ø¯Ù…ÙŠ ØµÙØ­Ø© BIIE New York Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
      [".store-actions .primary", "Ø§ÙØªØ­ÙŠ Ù…ØªØ¬Ø± BIIE"],
      [".store-actions .secondary", "Ø±Ø§Ø³Ù„ÙŠÙ†Ø§ info@biiesa.com"],
      [".mobile-shop-bar a:nth-child(1)", "ØªØ³ÙˆÙ‚ÙŠ BIIE"],
      [".mobile-shop-bar a:nth-child(2)", "ÙˆØ§ØªØ³Ø§Ø¨"],
      [".site-footer div:first-child p", "Ù„Ø£Ù†Ùƒ ØªÙ‡Ù…ÙŠÙ†Ù†Ø§."],
      [".site-footer div:nth-child(2) a:nth-child(1)", "Ù…ØªØ¬Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
      [".site-footer div:nth-child(2) a:nth-child(2)", "Ù…ÙˆÙ‚Ø¹ BIIE Ø§Ù„Ø£ØµÙ„ÙŠ"],
      [".footer-note", "Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© ØªÙˆØ¬Ù‡ Ø§Ù„Ø´Ø±Ø§Ø¡ Ø¥Ù„Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."]
    ],
    attrs: [
      [".nav-toggle", "aria-label", "ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©"],
      ["[data-site-nav]", "aria-label", "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ"],
      [".hero-note", "aria-label", "ÙˆØ¹Ø¯ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"],
      [".trust-bar", "aria-label", "ØªÙØ§ØµÙŠÙ„ Ø´Ø±ÙŠÙƒ BIIE"],
      [".mobile-shop-bar", "aria-label", "Ø±ÙˆØ§Ø¨Ø· Ø´Ø±Ø§Ø¡ Ø³Ø±ÙŠØ¹Ø©"]
    ]
  }
};

translations.ar = {
  title: "BIIE New York | Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ",
  description: "ØµÙØ­Ø© BIIE New York Ù„Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ. ØªØ³ÙˆÙ‚ÙŠ Ù…ÙƒÙŠØ§Ø¬ BIIE Ù„Ù„Ø´ÙØ§Ù‡ ÙˆØ§Ù„ÙˆØ¬Ù‡ ÙˆØ§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ§Ù„Ø£Ø¸Ø§ÙØ± Ø¹Ø¨Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©.",
  selectors: [
    [".skip-link", "ØªØ®Ø·ÙŠ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø­ØªÙˆÙ‰"],
    [".site-nav a:nth-child(1)", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©"],
    [".site-nav a:nth-child(2)", "Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§"],
    [".site-nav a:nth-child(3)", "Ù„Ù„Ø®Ù„ÙŠØ¬"],
    [".site-nav a:nth-child(4)", "Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø§Øª"],
    [".site-nav a:nth-child(5)", "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§"],
    [".header-cta", "ØªØ³ÙˆÙ‚ÙŠ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§"],
    [".hero-copy .eyebrow", "Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø±Ø³Ù…ÙŠ ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬"],
    [".hero-line", "Ø£Ù„ÙˆØ§Ù† Ù†ÙŠÙˆÙŠÙˆØ±ÙƒØŒ Ø¨Ø«Ø¨Ø§Øª ÙŠÙ†Ø§Ø³Ø¨ Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø®Ù„ÙŠØ¬."],
    [".hero-text", "Ù…ÙƒÙŠØ§Ø¬ BIIE ÙŠÙ…Ù†Ø­Ùƒ Ù„ÙˆÙ†Ø§ ÙˆØ§Ø¶Ø­Ø§ØŒ Ø¨Ø´Ø±Ø© Ù…Ø±ØªØ¨Ø©ØŒ Ø¹ÙŠÙˆÙ†Ø§ Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆÙ„Ù…Ø³Ø© Ø£Ø¸Ø§ÙØ± Ø£Ù†ÙŠÙ‚Ø©. Ù…ØªÙˆÙØ± ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© ÙˆØ§Ù„Ø®Ù„ÙŠØ¬ Ø¹Ø¨Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".hero-actions .primary", "ØªØ³ÙˆÙ‚ÙŠ BIIE Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".hero-actions .secondary", "ØªÙˆØ§ØµÙ„ÙŠ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨"],
    [".hero-note span:first-child", "Ù„Ø£Ù†Ùƒ ØªÙ‡Ù…ÙŠÙ†Ù†Ø§"],
    [".hero-note span:last-child", "ÙˆØ¬Ù‡ · Ø´ÙØ§Ù‡ · Ø¹ÙŠÙˆÙ† · Ø£Ø¸Ø§ÙØ±"],
    [".trust-bar div:nth-child(1) strong", "Ø¯Ø¹Ù… Ø¯Ø§Ø®Ù„ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"],
    [".trust-bar div:nth-child(2) strong", "Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ø±Ø³Ù…ÙŠ"],
    [".trust-bar div:nth-child(2) span", "Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".trust-bar div:nth-child(3) strong", "Ø£ØµÙ„ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"],
    [".trust-bar div:nth-child(4) strong", "Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
    [".intro-kicker", "Ø¬Ù…Ø§Ù„ Ø¹Ø§Ù„Ù…ÙŠ Ø¨Ø·Ø±ÙŠÙ‚ Ø´Ø±Ø§Ø¡ Ù…Ø­Ù„ÙŠ"],
    [".intro-grid h2", "Ù„Ù„Ù…Ø±Ø£Ø© Ø§Ù„ØªÙŠ ØªØ±ÙŠØ¯ Ø¥Ø·Ù„Ø§Ù„Ø© Ø¬Ù…ÙŠÙ„Ø© Ø£ÙˆÙ„Ø§ØŒ Ø«Ù… Ø´Ø±Ø§Ø¡ ÙˆØ§Ø¶Ø­ ÙˆØ³Ù‡Ù„."],
    [".intro-grid p", "Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© ØªØ¹Ø±ÙÙƒ Ø¹Ù„Ù‰ Ù…Ù†ØªØ¬Ø§Øª BIIE Ø¨Ø·Ø±ÙŠÙ‚Ø© Ù…Ø¨Ø§Ø´Ø±Ø©: Ø§Ù„Ù„ÙˆÙ†ØŒ Ø§Ù„Ù„Ù…Ø³Ø©ØŒ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…ØŒ ÙˆÙ…ÙƒØ§Ù† Ø§Ù„Ø´Ø±Ø§Ø¡. Ø§Ø®ØªØ§Ø±ÙŠ Ù…Ø§ ÙŠÙ†Ø§Ø³Ø¨Ùƒ Ø«Ù… Ø§Ù†ØªÙ‚Ù„ÙŠ Ù„Ù„Ù…ØªØ¬Ø± Ø§Ù„Ø±Ø³Ù…ÙŠ Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".collection .section-lead .eyebrow", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©"],
    [".collection .section-lead p:last-child", "Ø§Ø¨Ø¯Ø¦ÙŠ Ù…Ù† Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„ØªÙŠ ØªØ­Ø¨ÙŠÙ†Ù‡Ø§: Ø¨Ø´Ø±Ø© Ù†Ø§Ø¹Ù…Ø©ØŒ Ù„ÙˆÙ† Ø´ÙØ§Ù‡ ÙˆØ§Ø¶Ø­ØŒ Ø¹ÙŠÙˆÙ† Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆØ£Ø¸Ø§ÙØ± Ù„Ø§Ù…Ø¹Ø© ÙÙŠ Ù…Ø¬Ù…ÙˆØ¹Ø© ÙˆØ§Ø­Ø¯Ø© Ù…Ù† BIIE."],
    ["#collection-title", "Ø®Ù…Ø³ Ù„Ù…Ø³Ø§Øª Ø¬Ù…Ø§Ù„ØŒ ÙˆÙ†ØªÙŠØ¬Ø© ÙˆØ§Ø­Ø¯Ø© Ø£Ù†ÙŠÙ‚Ø© Ù…Ù† BIIE."],
    [".category-card.feature:not(.feature-secondary) span", "Ø¨ÙˆØªÙˆÙƒØ³"],
    [".category-card.feature:not(.feature-secondary) h3", "Ù…Ø¸Ù‡Ø± Ù…Ù†ØªØ¹Ø´ ÙˆÙ„Ù…Ø³Ø© Ù…ØµÙ‚ÙˆÙ„Ø©"],
    [".category-card.feature:not(.feature-secondary) p", "Ø¥Ø·Ù„Ø§Ù„Ø© Ø£Ù†Ø¹Ù… ÙˆØ£ÙƒØ«Ø± Ø±Ø§Ø­Ø©ØŒ Ø¨Ù„Ù…Ø¹Ø§Ù† Ø®ÙÙŠÙ ÙŠØ¸Ù‡Ø± Ø¬Ù…ÙŠÙ„Ø§ ÙÙŠ Ø§Ù„Ù†Ù‡Ø§Ø± ÙˆØ§Ù„Ù…Ø³Ø§Ø¡."],
    [".feature-secondary span", "Ø´ÙØ§Ù‡"],
    [".feature-secondary h3", "Ù„ÙˆÙ† ÙŠØ¨Ø±Ø² Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø©"],
    [".feature-secondary p", "Ø¯Ø±Ø¬Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙˆØ¯Ø§ÙØ¦Ø© ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙˆØ§Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª."],
    [".category-card.face span", "ÙˆØ¬Ù‡"],
    [".category-card.face h3", "ÙØ§ÙˆÙ†Ø¯ÙŠØ´Ù† ÙˆØ¨Ø±Ø§ÙŠÙ…Ø±"],
    [".category-card.face p", "ØªØºØ·ÙŠØ© Ù…Ø±ØªØ¨Ø© ÙˆÙ…Ù„Ù…Ø³ Ù†Ø§Ø¹Ù… ÙŠÙ†Ø§Ø³Ø¨ Ø±ÙˆØªÙŠÙ† Ø§Ù„Ù…ÙƒÙŠØ§Ø¬ Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬."],
    [".category-card.eyes span", "Ø¹ÙŠÙˆÙ†"],
    [".category-card.eyes h3", "Ù…Ø§Ø³ÙƒØ§Ø±Ø§ ÙˆØªØ­Ø¯ÙŠØ¯"],
    [".category-card.eyes p", "Ù„ÙˆÙ† Ø£Ø³ÙˆØ¯ ÙˆØ§Ø¶Ø­ØŒ Ø±Ù…ÙˆØ´ Ù…Ø±ÙÙˆØ¹Ø©ØŒ ÙˆØªØ­Ø¯ÙŠØ¯ Ù†Ø¸ÙŠÙ ÙŠÙ†Ø§Ø³Ø¨ Ø§Ù„Ù†Ù‡Ø§Ø± ÙˆØ§Ù„Ù„ÙŠÙ„."],
    [".category-card.nails span", "Ø£Ø¸Ø§ÙØ±"],
    [".category-card.nails h3", "Ø£Ù„ÙˆØ§Ù† Ø£Ø¸Ø§ÙØ± Color Expert"],
    [".category-card.nails p", "Ø£Ù„ÙˆØ§Ù† Ù„Ø§Ù…Ø¹Ø© ØªØ¶ÙŠÙ Ù„Ù…Ø³Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ù…Ø±ØªØ¨Ø© Ù„Ø¥Ø·Ù„Ø§Ù„ØªÙƒ."],
    [".bestseller-copy .eyebrow", "Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§"],
    ["#bestseller-title", "Matte Kiss ProofØŒ Ù„ÙˆÙ† Ø´ÙØ§Ù‡ Ø«Ø§Ø¨Øª ÙˆÙ„Ø§ÙØª."],
    [".bestseller-copy p", "Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø´ÙØ§Ù‡ Ù…Ù† BIIE ØªÙ…Ù†Ø­Ùƒ Ù„ÙˆÙ†Ø§ ÙˆØ§Ø¶Ø­Ø§ ÙˆÙ„Ù…Ø³Ø© Ù†Ø¸ÙŠÙØ©ØŒ Ø¨Ø¯Ø±Ø¬Ø§Øª ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø© Ø§Ù„ÙŠÙˆÙ…ÙŠØ© ÙˆØ§Ù„Ù…Ø³Ø§Ø¡."],
    [".text-link", "Ø´Ø§Ù‡Ø¯ÙŠ Ù…Ù†ØªØ¬Ø§Øª BIIE Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".gulf-copy .eyebrow", "Ù„Ø±ÙˆØªÙŠÙ† Ø§Ù„Ø¬Ù…Ø§Ù„ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
    ["#gulf-title", "Ø¥Ø·Ù„Ø§Ù„Ø© Ù…Ø±ØªØ¨Ø© ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø£ÙŠØ§Ù… Ø§Ù„Ø³Ø§Ø·Ø¹Ø©ØŒ Ø§Ù„Ø¹Ø²Ø§Ø¦Ù…ØŒ ÙˆØ¥Ø¶Ø§Ø¡Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª."],
    [".gulf-copy p", "ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬ Ù†Ø­ØªØ§Ø¬ Ù…ÙƒÙŠØ§Ø¬Ø§ ÙŠØ¸Ù‡Ø± Ø¬Ù…ÙŠÙ„Ø§ ÙÙŠ Ø§Ù„ØµÙˆØ±ØŒ ÙŠØ­Ù…Ù„ Ø§Ù„Ù„ÙˆÙ† Ø¨ÙˆØ¶ÙˆØ­ØŒ ÙˆÙŠØ¨Ù‚Ù‰ Ø£Ù†ÙŠÙ‚Ø§ Ø¹Ù† Ù‚Ø±Ø¨. BIIE ØªØ³Ù‡Ù„ Ø¹Ù„ÙŠÙƒ Ø§Ù„Ø§Ø®ØªÙŠØ§Ø±: Ø­Ø¯Ø¯ÙŠ Ø§Ù„Ù„Ù…Ø³Ø© Ø§Ù„ØªÙŠ ØªØ±ÙŠØ¯ÙŠÙ†Ù‡Ø§ØŒ Ø«Ù… Ø§Ø´ØªØ±ÙŠ Ø¹Ø¨Ø± Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ù…Ø­Ù„ÙŠ."],
    [".gulf-points div:nth-child(1) h3", "Ø´Ø±Ø§Ø¡ ÙˆØ§Ø¶Ø­ ÙˆÙ…Ø¨Ø§Ø´Ø±"],
    [".gulf-points div:nth-child(1) p", "ÙƒÙ„ Ù‚Ø³Ù… Ø±Ø¦ÙŠØ³ÙŠ ÙŠÙˆØµÙ„Ùƒ Ø¥Ù„Ù‰ ØµÙØ­Ø© BIIE Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".gulf-points div:nth-child(2) h3", "ØªÙˆØ§ØµÙ„ Ù…Ø­Ù„ÙŠ"],
    [".gulf-points div:nth-child(2) p", "Ø±Ù‚Ù… Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨ ÙˆØ§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù…ØªØ§Ø­Ø§Ù† Ù„Ù„Ø§Ø³ØªÙØ³Ø§Ø± Ø¨Ø¯ÙˆÙ† ØªØ¹Ù‚ÙŠØ¯."],
    [".gulf-points div:nth-child(3) h3", "Ø§Ù„Ù…Ù†ØªØ¬ Ù‡Ùˆ Ø§Ù„Ø£Ø³Ø§Ø³"],
    [".gulf-points div:nth-child(3) p", "Ø§Ù„ØµÙˆØ± ØªØ±ÙƒØ² Ø¹Ù„Ù‰ Ø£Ù„ÙˆØ§Ù† BIIE ÙˆÙ…Ù„Ù…Ø³Ù‡Ø§ØŒ Ø¨Ø¹ÙŠØ¯Ø§ Ø¹Ù† Ø§Ù„ØµÙˆØ± Ø§Ù„Ø¹Ø§Ù…Ø© ÙˆØ§Ù„Ù…Ø¨Ø§Ù„Øº ÙÙŠÙ‡Ø§."],
    [".looks .section-heading .eyebrow", "Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø§Øª"],
    ["#looks-title", "Ø§Ø®ØªØ§Ø±ÙŠ Ø§Ù„Ø¥Ø­Ø³Ø§Ø³ Ø£ÙˆÙ„Ø§ØŒ Ø«Ù… Ø§Ù„Ø¯Ø±Ø¬Ø©."],
    [".look-card:nth-child(1) span", "Ø¥Ø·Ù„Ø§Ù„Ø© Ù†Ø§Ø¹Ù…Ø©"],
    [".look-card:nth-child(1) p", "Ø´ÙØ§Ù‡ ÙˆØ±Ø¯ÙŠØ©ØŒ Ø±Ù…ÙˆØ´ Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆØ¨Ø´Ø±Ø© Ù…Ø¶ÙŠØ¦Ø©."],
    [".look-card:nth-child(2) span", "ØªÙˆØªÙŠ Ù…Ø³Ø§Ø¦ÙŠ"],
    [".look-card:nth-child(2) p", "Ù„ÙˆÙ† Ø´ÙØ§Ù‡ Ø¹Ù…ÙŠÙ‚ Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© Ø¯Ø§ÙØ¦Ø©."],
    [".look-card:nth-child(3) span", "Ø§Ø®ØªÙŠØ§Ø± ÙŠÙˆÙ…ÙŠ"],
    [".look-card:nth-child(3) p", "Ø¨Ø´Ø±Ø© Ù…ÙˆØ­Ø¯Ø©ØŒ Ø±Ù…ÙˆØ´ Ù…Ø­Ø¯Ø¯Ø©ØŒ Ù‚Ù„ÙˆØ³ØŒ ÙˆØ·Ù„Ø§Ø¡ Ø£Ø¸Ø§ÙØ±."],
    [".store-panel .eyebrow", "ØªØ³ÙˆÙ‚ÙŠ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"],
    ["#store-title", "Ù…Ù† Ø§Ù„ØªØ¹Ø±Ù Ø¹Ù„Ù‰ BIIE Ø¥Ù„Ù‰ Ø§Ù„Ø´Ø±Ø§Ø¡ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".store-panel p", "Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØªÙˆÙØ± Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØªØµÙØ­ Ø§Ù„Ø¯Ø±Ø¬Ø§Øª ÙˆØ§Ù„Ø´Ø±Ø§Ø¡ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†ØŒ Ø§Ø³ØªØ®Ø¯Ù…ÙŠ ØµÙØ­Ø© BIIE New York Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".store-actions .primary", "Ø§ÙØªØ­ÙŠ Ù…ØªØ¬Ø± BIIE"],
    [".store-actions .secondary", "Ø±Ø§Ø³Ù„ÙŠÙ†Ø§ info@biiesa.com"],
    [".mobile-shop-bar a:nth-child(1)", "ØªØ³ÙˆÙ‚ÙŠ BIIE"],
    [".mobile-shop-bar a:nth-child(2)", "ÙˆØ§ØªØ³Ø§Ø¨"],
    [".site-footer div:first-child p", "Ù„Ø£Ù†Ùƒ ØªÙ‡Ù…ÙŠÙ†Ù†Ø§."],
    [".site-footer div:nth-child(2) a:nth-child(1)", "Ù…ØªØ¬Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".site-footer div:nth-child(2) a:nth-child(2)", "Ù…ÙˆÙ‚Ø¹ BIIE Ø§Ù„Ø£ØµÙ„ÙŠ"],
    [".footer-note", "Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© ØªÙˆØ¬Ù‡Ùƒ Ù„Ù„Ø´Ø±Ø§Ø¡ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."]
  ],
  attrs: [
    [".nav-toggle", "aria-label", "ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©"],
    ["[data-site-nav]", "aria-label", "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ"],
    [".hero-note", "aria-label", "ÙˆØ¹Ø¯ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"],
    [".trust-bar", "aria-label", "ØªÙØ§ØµÙŠÙ„ Ø´Ø±ÙŠÙƒ BIIE"],
    [".mobile-shop-bar", "aria-label", "Ø±ÙˆØ§Ø¨Ø· Ø´Ø±Ø§Ø¡ Ø³Ø±ÙŠØ¹Ø©"]
  ]
};

translations.ar = {
  title: "BIIE New York | Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ",
  description: "ØµÙØ­Ø© BIIE New York Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ. Ø§ÙƒØªØ´ÙÙŠ Ù…Ù†ØªØ¬Ø§Øª BIIE Ù„Ù„Ø´ÙØ§Ù‡ ÙˆØ§Ù„ÙˆØ¬Ù‡ ÙˆØ§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ§Ù„Ø£Ø¸Ø§ÙØ±ØŒ ÙˆØªØ³ÙˆÙ‚ÙŠÙ‡Ø§ Ø¹Ø¨Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©.",
  selectors: [
    [".skip-link", "ØªØ®Ø·ÙŠ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø­ØªÙˆÙ‰"],
    [".site-nav a:nth-child(1)", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©"],
    [".site-nav a:nth-child(2)", "Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§"],
    [".site-nav a:nth-child(3)", "Ù„Ù„Ø®Ù„ÙŠØ¬"],
    [".site-nav a:nth-child(4)", "Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø§Øª"],
    [".site-nav a:nth-child(5)", "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§"],
    [".header-cta", "ØªØ³ÙˆÙ‚ÙŠ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§"],
    [".hero-copy .eyebrow", "Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø±Ø³Ù…ÙŠ ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬"],
    [".hero-line", "Ø£Ù„ÙˆØ§Ù† Ù†ÙŠÙˆÙŠÙˆØ±Ùƒ Ø¨Ø«Ø¨Ø§Øª ÙŠÙ†Ø§Ø³Ø¨ Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø®Ù„ÙŠØ¬."],
    [".hero-text", "Ø§ÙƒØªØ´ÙÙŠ Ù…Ù†ØªØ¬Ø§Øª BIIE Ù„Ù„Ø´ÙØ§Ù‡ ÙˆØ§Ù„ÙˆØ¬Ù‡ ÙˆØ§Ù„Ø¹ÙŠÙˆÙ† ÙˆØ§Ù„Ø£Ø¸Ø§ÙØ±: Ø£Ù„ÙˆØ§Ù† ÙˆØ§Ø¶Ø­Ø©ØŒ ØªØºØ·ÙŠØ© Ù†Ø§Ø¹Ù…Ø©ØŒ ØªØ­Ø¯ÙŠØ¯ Ù…Ø±ØªØ¨ØŒ ÙˆÙ„Ù…Ø³Ø§Øª Ù†Ù‡Ø§Ø¦ÙŠØ© ØªÙ†Ø§Ø³Ø¨ ÙŠÙˆÙ…Ùƒ ÙˆÙ…Ù†Ø§Ø³Ø¨Ø§ØªÙƒ."],
    [".hero-actions .primary", "ØªØ³ÙˆÙ‚ÙŠ BIIE Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".hero-actions .secondary", "ØªÙˆØ§ØµÙ„ÙŠ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨"],
    [".hero-note span:first-child", "Ù„Ø£Ù†Ùƒ ØªÙ‡Ù…ÙŠÙ†Ù†Ø§"],
    [".hero-note span:last-child", "ÙˆØ¬Ù‡ · Ø´ÙØ§Ù‡ · Ø¹ÙŠÙˆÙ† · Ø£Ø¸Ø§ÙØ±"],
    [".trust-bar div:nth-child(1) strong", "Ø¯Ø¹Ù… Ø¯Ø§Ø®Ù„ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"],
    [".trust-bar div:nth-child(2) strong", "Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ø±Ø³Ù…ÙŠ"],
    [".trust-bar div:nth-child(2) span", "Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".trust-bar div:nth-child(3) strong", "Ø£ØµÙ„ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"],
    [".trust-bar div:nth-child(4) strong", "Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
    [".intro-kicker", "Ø¬Ù…Ø§Ù„ Ø¹Ø§Ù„Ù…ÙŠ Ø¨Ø·Ø±ÙŠÙ‚ Ø´Ø±Ø§Ø¡ Ù…Ø­Ù„ÙŠ"],
    [".intro-grid h2", "Ù„Ù…Ù† ØªØ¨Ø­Ø« Ø¹Ù† Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø© Ø£ÙˆÙ„Ø§ØŒ Ø«Ù… Ø´Ø±Ø§Ø¡ ÙˆØ§Ø¶Ø­ ÙˆØ³Ù‡Ù„."],
    [".intro-grid p", "Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© ØªØ¹Ø±ÙÙƒ Ø¹Ù„Ù‰ Ù…Ù†ØªØ¬Ø§Øª BIIE Ø¨Ø·Ø±ÙŠÙ‚Ø© Ù…Ø¨Ø§Ø´Ø±Ø©: Ø§Ù„Ø¯Ø±Ø¬Ø§ØªØŒ Ø§Ù„ØªØºØ·ÙŠØ©ØŒ Ø§Ù„Ù„Ù…Ø³Ø© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©ØŒ ÙˆÙ…ÙƒØ§Ù† Ø§Ù„Ø´Ø±Ø§Ø¡. Ø§Ø®ØªØ§Ø±ÙŠ Ù…Ø§ ÙŠÙ†Ø§Ø³Ø¨ Ø¥Ø·Ù„Ø§Ù„ØªÙƒØŒ Ø«Ù… Ø§Ù†ØªÙ‚Ù„ÙŠ Ø¥Ù„Ù‰ Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ø±Ø³Ù…ÙŠ Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".collection .section-lead .eyebrow", "Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø©"],
    [".collection .section-lead p:last-child", "Ø§Ø¨Ø¯Ø¦ÙŠ Ù…Ù† Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„ØªÙŠ ØªØ­Ø¨ÙŠÙ†Ù‡Ø§: Ø¨Ø´Ø±Ø© Ù…ÙˆØ­Ø¯Ø©ØŒ Ù„ÙˆÙ† Ø´ÙØ§Ù‡ ÙˆØ§Ø¶Ø­ØŒ Ø¹ÙŠÙˆÙ† Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆØ£Ø¸Ø§ÙØ± Ù„Ø§Ù…Ø¹Ø© Ø¶Ù…Ù† Ù…Ø¬Ù…ÙˆØ¹Ø© ÙˆØ§Ø­Ø¯Ø© Ù…Ù† BIIE."],
    ["#collection-title", "Ø®Ù…Ø³ Ù„Ù…Ø³Ø§Øª Ù…ÙƒÙŠØ§Ø¬ØŒ ÙˆÙ†ØªÙŠØ¬Ø© Ø£Ù†ÙŠÙ‚Ø© Ù…Ù† BIIE."],
    [".category-card.feature:not(.feature-secondary) span", "Ø¨ÙˆØªÙˆÙƒØ³"],
    [".category-card.feature:not(.feature-secondary) h3", "Ù…Ø¸Ù‡Ø± Ù…Ù†ØªØ¹Ø´ ÙˆÙ„Ù…Ø³Ø© Ù…ØµÙ‚ÙˆÙ„Ø©"],
    [".category-card.feature:not(.feature-secondary) p", "Ø¥Ø·Ù„Ø§Ù„Ø© Ù†Ø§Ø¹Ù…Ø© ÙˆÙ…Ø±ØªØ¨Ø©ØŒ Ù…Ø¹ Ù„Ù…Ø³Ø© ØµØ­ÙŠØ© ØªØ¸Ù‡Ø± Ø¬Ù…ÙŠÙ„Ø© ÙÙŠ Ø§Ù„Ù†Ù‡Ø§Ø± ÙˆØ§Ù„Ù…Ø³Ø§Ø¡."],
    [".feature-secondary span", "Ø´ÙØ§Ù‡"],
    [".feature-secondary h3", "Ø£Ø­Ù…Ø± Ø´ÙØ§Ù‡ ÙŠØ¨Ø±Ø² Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø©"],
    [".feature-secondary p", "Ø¯Ø±Ø¬Ø§Øª ÙˆØ§Ø¶Ø­Ø© ÙˆØ¯Ø§ÙØ¦Ø©ØŒ Ø¨Ù„Ù…Ø³Ø© Ù…Ø±ÙŠØ­Ø© ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙˆØ§Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª."],
    [".category-card.face span", "ÙˆØ¬Ù‡"],
    [".category-card.face h3", "ÙØ§ÙˆÙ†Ø¯ÙŠØ´Ù† ÙˆØ¨Ø±Ø§ÙŠÙ…Ø±"],
    [".category-card.face p", "ÙƒØ±ÙŠÙ… Ø£Ø³Ø§Ø³ ÙˆØ¨ÙˆØ¯Ø±Ø© ÙˆØ¨Ø±Ø§ÙŠÙ…Ø± Ù„Ù…Ù„Ù…Ø³ Ù†Ø§Ø¹Ù… ÙˆØªØºØ·ÙŠØ© Ù…Ø±ØªØ¨Ø© ØªÙ†Ø§Ø³Ø¨ Ù…ÙƒÙŠØ§Ø¬Ùƒ Ø§Ù„ÙŠÙˆÙ…ÙŠ ÙÙŠ Ø£Ø¬ÙˆØ§Ø¡ Ø§Ù„Ø®Ù„ÙŠØ¬."],
    [".category-card.eyes span", "Ø¹ÙŠÙˆÙ†"],
    [".category-card.eyes h3", "Ù…Ø§Ø³ÙƒØ§Ø±Ø§ ÙˆØªØ­Ø¯ÙŠØ¯"],
    [".category-card.eyes p", "Ù„ÙˆÙ† Ø£Ø³ÙˆØ¯ ÙˆØ§Ø¶Ø­ØŒ Ø±Ù…ÙˆØ´ Ù…Ø±ÙÙˆØ¹Ø©ØŒ ÙˆØªØ­Ø¯ÙŠØ¯ Ù†Ø¸ÙŠÙ ÙŠÙ†Ø§Ø³Ø¨ Ø§Ù„Ù†Ù‡Ø§Ø± ÙˆØ§Ù„Ù…Ø³Ø§Ø¡."],
    [".category-card.nails span", "Ø£Ø¸Ø§ÙØ±"],
    [".category-card.nails h3", "Ø·Ù„Ø§Ø¡ Ø£Ø¸Ø§ÙØ± Color Expert"],
    [".category-card.nails p", "Ø¯Ø±Ø¬Ø§Øª Ù„Ø§Ù…Ø¹Ø© ØªØ¶ÙŠÙ Ù„Ù…Ø³Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ù…Ø±ØªØ¨Ø© Ù„Ø¥Ø·Ù„Ø§Ù„ØªÙƒ."],
    [".bestseller-copy .eyebrow", "Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§"],
    ["#bestseller-title", "Matte Kiss ProofØŒ Ø£Ø­Ù…Ø± Ø´ÙØ§Ù‡ Ø«Ø§Ø¨Øª ÙˆÙ„Ø§ÙØª."],
    [".bestseller-copy p", "Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ø´ÙØ§Ù‡ Ù…Ù† BIIE ØªÙ…Ù†Ø­Ùƒ Ù„ÙˆÙ†Ø§ ÙˆØ§Ø¶Ø­Ø§ ÙˆÙ„Ù…Ø³Ø© Ù†Ù‡Ø§Ø¦ÙŠØ© Ø£Ù†ÙŠÙ‚Ø©ØŒ Ø¨Ø¯Ø±Ø¬Ø§Øª ØªÙ†Ø§Ø³Ø¨ Ø¥Ø·Ù„Ø§Ù„Ø§Øª Ø§Ù„Ù†Ù‡Ø§Ø± ÙˆØ§Ù„Ù…Ø³Ø§Ø¡."],
    [".text-link", "Ø´Ø§Ù‡Ø¯ÙŠ Ù…Ù†ØªØ¬Ø§Øª BIIE Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".gulf-copy .eyebrow", "Ù„Ø±ÙˆØªÙŠÙ† Ø§Ù„Ø¬Ù…Ø§Ù„ Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠ"],
    ["#gulf-title", "Ø¥Ø·Ù„Ø§Ù„Ø© Ù…Ø±ØªØ¨Ø© ØªÙ†Ø§Ø³Ø¨ Ø§Ù„Ø£ÙŠØ§Ù… Ø§Ù„Ø³Ø§Ø·Ø¹Ø©ØŒ Ø§Ù„Ø¹Ø²Ø§Ø¦Ù…ØŒ ÙˆØ¥Ø¶Ø§Ø¡Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª."],
    [".gulf-copy p", "ÙÙŠ Ø§Ù„Ø®Ù„ÙŠØ¬ Ù†Ø­ØªØ§Ø¬ Ù…ÙƒÙŠØ§Ø¬Ø§ ÙŠØ¸Ù‡Ø± Ø¬Ù…ÙŠÙ„Ø§ ÙÙŠ Ø§Ù„ØµÙˆØ±ØŒ ÙŠØ«Ø¨Øª Ù„ÙˆÙ†Ù‡ Ø¨ÙˆØ¶ÙˆØ­ØŒ ÙˆÙŠØ¨Ù‚Ù‰ Ø£Ù†ÙŠÙ‚Ø§ Ø¹Ù† Ù‚Ø±Ø¨. Ù…Ø¹ BIIE Ø§Ø®ØªØ§Ø±ÙŠ Ø§Ù„Ù„Ù…Ø³Ø© Ø§Ù„ØªÙŠ ØªØ±ÙŠØ¯ÙŠÙ†Ù‡Ø§ØŒ Ø«Ù… Ø§Ø´ØªØ±ÙŠ Ø¨Ø³Ù‡ÙˆÙ„Ø© Ø¹Ø¨Ø± Ø§Ù„Ù…ØªØ¬Ø± Ø§Ù„Ù…Ø­Ù„ÙŠ."],
    [".gulf-points div:nth-child(1) h3", "Ø´Ø±Ø§Ø¡ ÙˆØ§Ø¶Ø­ ÙˆÙ…Ø¨Ø§Ø´Ø±"],
    [".gulf-points div:nth-child(1) p", "ÙƒÙ„ Ù‚Ø³Ù… Ø±Ø¦ÙŠØ³ÙŠ ÙŠÙˆØµÙ„Ùƒ Ø¥Ù„Ù‰ ØµÙØ­Ø© BIIE Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".gulf-points div:nth-child(2) h3", "ØªÙˆØ§ØµÙ„ Ù…Ø­Ù„ÙŠ"],
    [".gulf-points div:nth-child(2) p", "Ø±Ù‚Ù… Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨ ÙˆØ§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù…ØªØ§Ø­Ø§Ù† Ù„Ù„Ø§Ø³ØªÙØ³Ø§Ø± Ø¨Ø³Ù‡ÙˆÙ„Ø©."],
    [".gulf-points div:nth-child(3) h3", "Ø§Ù„Ù…Ù†ØªØ¬ ÙÙŠ Ø§Ù„ÙˆØ§Ø¬Ù‡Ø©"],
    [".gulf-points div:nth-child(3) p", "Ø§Ù„ØµÙˆØ± ØªØ±ÙƒØ² Ø¹Ù„Ù‰ Ø£Ù„ÙˆØ§Ù† BIIE ÙˆÙ…Ù„Ù…Ø³Ù‡Ø§ØŒ Ø¨Ø¹ÙŠØ¯Ø§ Ø¹Ù† Ø§Ù„ØµÙˆØ± Ø§Ù„Ø¹Ø§Ù…Ø© ÙˆØ§Ù„Ù…Ø¨Ø§Ù„Øº ÙÙŠÙ‡Ø§."],
    [".looks .section-heading .eyebrow", "Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø¥Ø·Ù„Ø§Ù„Ø§Øª"],
    ["#looks-title", "Ø§Ø®ØªØ§Ø±ÙŠ Ø§Ù„Ø¥Ø­Ø³Ø§Ø³ Ø£ÙˆÙ„Ø§ØŒ Ø«Ù… Ø§Ù„Ø¯Ø±Ø¬Ø©."],
    [".look-card:nth-child(1) span", "Ø¥Ø·Ù„Ø§Ù„Ø© Ù†Ø§Ø¹Ù…Ø©"],
    [".look-card:nth-child(1) p", "Ø´ÙØ§Ù‡ ÙˆØ±Ø¯ÙŠØ©ØŒ Ø±Ù…ÙˆØ´ Ù…Ø­Ø¯Ø¯Ø©ØŒ ÙˆØ¨Ø´Ø±Ø© Ù…Ø¶ÙŠØ¦Ø©."],
    [".look-card:nth-child(2) span", "ØªÙˆØªÙŠ Ù…Ø³Ø§Ø¦ÙŠ"],
    [".look-card:nth-child(2) p", "Ù„ÙˆÙ† Ø´ÙØ§Ù‡ Ø¹Ù…ÙŠÙ‚ Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© Ø¯Ø§ÙØ¦Ø©."],
    [".look-card:nth-child(3) span", "Ø§Ø®ØªÙŠØ§Ø± ÙŠÙˆÙ…ÙŠ"],
    [".look-card:nth-child(3) p", "Ø¨Ø´Ø±Ø© Ù…ÙˆØ­Ø¯Ø©ØŒ Ø±Ù…ÙˆØ´ Ù…Ø­Ø¯Ø¯Ø©ØŒ Ù‚Ù„ÙˆØ³ØŒ ÙˆØ·Ù„Ø§Ø¡ Ø£Ø¸Ø§ÙØ±."],
    [".store-panel .eyebrow", "ØªØ³ÙˆÙ‚ÙŠ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"],
    ["#store-title", "Ù…Ù† Ø§Ù„ØªØ¹Ø±Ù Ø¹Ù„Ù‰ BIIE Ø¥Ù„Ù‰ Ø§Ù„Ø´Ø±Ø§Ø¡ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".store-panel p", "Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØªÙˆÙØ± Ø§Ù„Ù…Ù†ØªØ¬Ø§ØªØŒ ÙˆØªØµÙØ­ Ø§Ù„Ø¯Ø±Ø¬Ø§ØªØŒ ÙˆØ§Ù„Ø´Ø±Ø§Ø¡ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†ØŒ Ø§Ø³ØªØ®Ø¯Ù…ÙŠ ØµÙØ­Ø© BIIE New York Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù„Ø¯Ù‰ Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."],
    [".store-actions .primary", "Ø§ÙØªØ­ÙŠ Ù…ØªØ¬Ø± BIIE"],
    [".store-actions .secondary", "Ø±Ø§Ø³Ù„ÙŠÙ†Ø§ info@biiesa.com"],
    [".mobile-shop-bar a:nth-child(1)", "ØªØ³ÙˆÙ‚ÙŠ BIIE"],
    [".mobile-shop-bar a:nth-child(2)", "ÙˆØ§ØªØ³Ø§Ø¨"],
    [".site-footer div:first-child p", "Ù„Ø£Ù†Ùƒ ØªÙ‡Ù…ÙŠÙ†Ù†Ø§."],
    [".site-footer div:nth-child(2) a:nth-child(1)", "Ù…ØªØ¬Ø± Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ"],
    [".site-footer div:nth-child(2) a:nth-child(2)", "Ù…ÙˆÙ‚Ø¹ BIIE Ø§Ù„Ø£ØµÙ„ÙŠ"],
    [".footer-note", "Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø®Ù„ÙŠØ¬ÙŠØ© ØªÙˆØ¬Ù‡Ùƒ Ù„Ù„Ø´Ø±Ø§Ø¡ Ù…Ù† Ø°Ø§ Ø£ÙˆØ±Ø§ Ø¨ÙŠÙˆØªÙŠ."]
  ],
  attrs: [
    [".nav-toggle", "aria-label", "ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©"],
    ["[data-site-nav]", "aria-label", "Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ"],
    [".hero-note", "aria-label", "ÙˆØ¹Ø¯ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©"],
    [".trust-bar", "aria-label", "ØªÙØ§ØµÙŠÙ„ Ø´Ø±ÙŠÙƒ BIIE"],
    [".mobile-shop-bar", "aria-label", "Ø±ÙˆØ§Ø¨Ø· Ø´Ø±Ø§Ø¡ Ø³Ø±ÙŠØ¹Ø©"]
  ]
};

const englishSnapshot = {
  title: document.title,
  description: document.querySelector("meta[name='description']")?.getAttribute("content") ?? "",
  selectors: translations.ar.selectors.map(([selector]) => [selector, document.querySelector(selector)?.textContent ?? ""]),
  attrs: translations.ar.attrs.map(([selector, attribute]) => [
    selector,
    attribute,
    document.querySelector(selector)?.getAttribute(attribute) ?? ""
  ])
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const setLanguage = (lang) => {
  const isArabic = lang === "ar";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  localStorage.setItem("biie-lang", isArabic ? "ar" : "en");

  if (!isArabic) {
    document.title = englishSnapshot.title;
    document.querySelector("meta[name='description']")?.setAttribute("content", englishSnapshot.description);
    englishSnapshot.selectors.forEach(([selector, value]) => setText(selector, value));
    englishSnapshot.attrs.forEach(([selector, attribute, value]) => {
      document.querySelector(selector)?.setAttribute(attribute, value);
    });
    langToggle.textContent = "AR";
    langToggle.setAttribute("aria-label", "Switch language");
    return;
  }

  document.title = translations.ar.title;
  document.querySelector("meta[name='description']")?.setAttribute("content", translations.ar.description);
  translations.ar.selectors.forEach(([selector, value]) => setText(selector, value));
  translations.ar.attrs.forEach(([selector, attribute, value]) => {
    document.querySelector(selector)?.setAttribute(attribute, value);
  });
  langToggle.textContent = "EN";
  langToggle.setAttribute("aria-label", "Switch to English");
};

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  const isArabic = document.documentElement.lang === "ar";
  navToggle.setAttribute("aria-label", isOpen ? (isArabic ? "Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©" : "Close navigation") : (isArabic ? "ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©" : "Open navigation"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", document.documentElement.lang === "ar" ? "ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©" : "Open navigation");
  }
});

langToggle?.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  if (!element.closest(".hero")) {
    observer.observe(element);
  }
});

const params = new URLSearchParams(window.location.search);
setLanguage(params.get("lang") === "ar" || localStorage.getItem("biie-lang") === "ar" ? "ar" : "en");


