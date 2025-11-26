export const saveFont = (fontData) => {
  const saveFontBtn = document.querySelectorAll('.save-font');

  let savedList = [];
  saveFontBtn.forEach((elem, idx) => {
    elem.addEventListener('click', () => {
      const currentFontData = {
        fontData: fontData[idx],
        isSaved: true
      };
      savedList.push(currentFontData);
      localStorage.setItem('saved', JSON.stringify(savedList));
      const fontSavedItems = JSON.parse(localStorage.getItem('saved'));
      console.log(fontSavedItems);
    });
  });
}