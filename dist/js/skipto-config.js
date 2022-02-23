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
      buttonTooltipAccesskey: "Skip menu access key: $key",
    },
  },
};

/*------------------------------------------------------------------------------
Remove extra skip link
---------------------------------------------------------------------------*/
const skiplink_observer = new MutationObserver((mutations, obs) => {
  const wwu_skip_link = document.querySelector(".skip-link");
  if (wwu_skip_link) {
    wwu_skip_link.remove();
    obs.disconnect();
    return;
  }
});

skiplink_observer.observe(document, {
  childList: true,
  subtree: true,
});

/*------------------------------------------------------------------------------
Add icon to SkipTo button
---------------------------------------------------------------------------*/
const skipto_observer = new MutationObserver((mutations, obs) => {
  const wwu_skipto_button = document.querySelector(".skip-to button");
  const material_expand = "<span class='material-icons' aria-hidden='true'>expand_more</span>";

  if (wwu_skipto_button) {
    wwu_skipto_button.innerHTML += material_expand;
    obs.disconnect();
    return;
  }
});

skipto_observer.observe(document, {
  childList: true,
  subtree: true,
});