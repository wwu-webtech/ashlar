var SkipToConfig = {
  settings: {
    skipTo: {
      landmarks:
        'main, [role="main"], [role="search"], nav,[role="navigation"], footer, [role="contentinfo"]',
      headings: "main h1, main h2, main h3",
      customClass: "skip-to--custom",
    },
  },
};

const skipto_button = document.getElementsByClassName("skipto--custom");
const skip_link = document.querySelector(".skip-link");

if (skipto_button) skip_link.classList.add("hidden");
