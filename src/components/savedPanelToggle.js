const savedPanel = document.querySelector(".saved-panel");
const openSavedBtn = document.getElementById("open-saved");
const closeSavedBtn = document.getElementById("close-saved");

let isSavedPanelOpen = false;

export const openSavedPanel = () => {
  savedPanel.style.top = "0%";
  isSavedPanelOpen = true;
};
export const closeSavedPanel = () => {
  savedPanel.style.top = "-100%";
  isSavedPanelOpen = false;
};

export const savedPanelToggle = () => {
  if (isSavedPanelOpen) {
    closeSavedPanel();
  } else {
    openSavedPanel();
  }
};

export const savedPanelInteractions = () => {
  openSavedBtn.addEventListener("click", openSavedPanel);
  closeSavedBtn.addEventListener("click", closeSavedPanel);
};
