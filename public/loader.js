(async () => {
  try {
    const src = chrome.runtime.getURL('assets/content.js');
    await import(src);
    console.log('⚓ Page Anchor Pro: Content module loaded via dynamic import');
  } catch (err) {
    console.error('❌ Page Anchor Pro: Critical load error:', err);
    // Fallback: sometimes the file system is slow, though import() handles that
  }
})();
