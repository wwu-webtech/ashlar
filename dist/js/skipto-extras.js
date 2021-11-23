var SkipToConfig = {
  settings: {
    skipTo: {
      landmarks:
        'main, [role="main"], [role="search"], nav,[role="navigation"], footer, [role="contentinfo"]',
      headings: "main h1, main h2, main h3",
      displayOption: "popup",
      customClass: "skip-to--custom",
      positionLeft: "0",
      buttonBackgroundColor: "#e0e4e7",
    },
  },
};

// only hide default skip link if skip-to library loads correctly

let skipto_button = document.getElementsByClassName("skip-to--custom");
let skip_link = document.querySelector(".skip-link");

if (skipto_button) skip_link.classList.add("hidden");
