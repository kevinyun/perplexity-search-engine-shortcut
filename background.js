chrome.omnibox.onInputEntered.addListener((text) => {
  const customURL = 'https://perplexity.ai/search?q=' + decodeURIComponent(text);
  chrome.tabs.update({ url: customURL });
});

chrome.omnibox.onInputStarted.addListener(async () => {
  const defaultSuggestion = {
    description: 'Search with Perplexity AI'
  };
  try {
    await chrome.omnibox.setDefaultSuggestion(defaultSuggestion);
  } catch (error) {
    console.error('Error setting default suggestion:', error);
  }
});