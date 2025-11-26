import { asideToggle } from "./src/components/asideToggle.js";
import { fontData } from "./data/fontData.js";
import { fontCard } from "./src/components/fontCard.js";
import { cardEvents } from "./src/utils/cardEvents.js";

const burgerBtn = document.getElementById("burger");

burgerBtn.addEventListener("click", asideToggle);

fontCard(fontData);

cardEvents(fontData);
