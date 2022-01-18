var SkipToConfig = {
  settings: {
    skipTo: {
      landmarks:
        'main, [role="main"], header, [role="banner"], [role="search"], nav,[role="navigation"], footer, [role="contentinfo"]',
      displayOption: "popup",
      headerLabel: "Header",
      footerLabel: "Footer",
      asideLabel: "Aside",
      customClass: "skip-to--custom",
      positionLeft: "0",
      buttonBackgroundColor: "#e0e4e7",
    },
  },
};

// only hide default skip link if JS version loads

let skipto_button = document.getElementsByClassName("skip-to--custom");
let skip_link = document.querySelector(".skip-link");

if (skipto_button) skip_link.classList.add("hidden");
