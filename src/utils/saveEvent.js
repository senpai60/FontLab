export const saveFont = (fontData) => {
  const saveFontBtn = document.querySelectorAll('.save-font');

  saveFontBtn.forEach((elem, idx) => {
    elem.addEventListener('click', () => {
      // --- SAFE PARSE from localStorage ---
      const raw = localStorage.getItem('saved');
      let savedList = [];

      if (raw) {
        try {
          savedList = JSON.parse(raw);

          // sanity: if parsed value is not an array, reset it
          if (!Array.isArray(savedList)) {
            console.warn('Saved value is not an array — resetting saved list.');
            savedList = [];
          }
        } catch (err) {
          console.error('Failed to parse saved from localStorage:', err);

          // common broken value pattern: "[object Object]" or similar
          if (typeof raw === 'string' && raw.includes('[object Object]')) {
            console.warn("Detected legacy/broken 'saved' format containing [object Object]. Clearing it.");
            localStorage.removeItem('saved'); // clear corrupted data
            savedList = [];
          } else {
            // unknown parse error -> clear to avoid repeated exceptions
            console.warn("Clearing 'saved' due to parse errors.");
            localStorage.removeItem('saved');
            savedList = [];
          }
        }
      }

      // --- prepare the item to save ---
      const currentFontData = {
        fontData: fontData[idx],
        isSaved: true,
        savedAt: Date.now(),
      };

      // --- optional: avoid duplicates by id (recommended) ---
      const already = savedList.some(
        (it) => it.fontData && it.fontData.id === currentFontData.fontData.id
      );
      if (already) {
        console.log('This font is already saved — skipping duplicate.');
        return;
      }

      savedList.push(currentFontData);

      // --- save SAFE JSON string ---
      try {
        localStorage.setItem('saved', JSON.stringify(savedList));
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
        // possible quota exceeded, handle accordingly
      }

      console.log('Saved:', savedList);
    });
  });
};
