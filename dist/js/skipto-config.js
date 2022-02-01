var SkipToConfig = {
  settings: {
    skipTo: {
      landmarks:
        'main, [role="main"], header, [role="banner"], [role="search"], nav,[role="navigation"], footer, [role="contentinfo"]',
      displayOption: "static",
      attachElement: "wwu-pre-header",
      headerLabel: "Header",
      footerLabel: "Footer",
      asideLabel: "Aside",
      positionLeft: "0",
      buttonBackgroundColor: "transparent",
      buttonLabel: "Skip to Content",
    },
  },
};

/*------------------------------------------------------------------------------
Remove extra skip link
---------------------------------------------------------------------------*/
const observer = new MutationObserver((mutations, obs) => {
  const wwu_skip_link = document.querySelector(".skip-link");
  if (wwu_skip_link) {
    wwu_skip_link.remove();
    obs.disconnect();
    return;
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
