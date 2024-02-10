const slider = document.querySelector("[data-slider]");

const cards = slider.querySelector("[data-slider-cards]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

if (cards) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");

    cards.scrollTo({
      left: cards.scrollLeft - cards.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");

    cards.scrollTo({
      left: cards.scrollLeft + cards.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  cards.addEventListener("scroll", () => {
    const cardsScrollWidth = cards.scrollWidth;
    const cardsOuterWidth = cards.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (cards.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (cards.scrollLeft === cardsScrollWidth - cardsOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}