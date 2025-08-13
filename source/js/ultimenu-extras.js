(function ($, Drupal, once) {
  'use strict';

  // Use native DOM methods for compatibility
  function closest(element, selector) {
    return element.closest(selector);
  }

  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  function addClass(element, className) {
    element.classList.add(className);
  }

  function removeClass(element, className) {
    element.classList.remove(className);
  }

  function isHidden(el) {
    if (!el) return true;
    if (el.offsetParent === null || el.clientHeight === 0) {
      return true;
    }
    var style = window.getComputedStyle(el);
    return style.display === 'none' || style.visibility === 'hidden';
  }

  function slideToggle(el, className, hidden) {
    if (el) {
      if (hidden) {
        addClass(el, className);
      } else {
        removeClass(el, className);
      }
    }
  }

  function closeFlyout(base) {
    base = base || document;
    
    var expands = base.querySelectorAll('.is-uitem-expanded');
    expands.forEach(function(el) { removeClass(el, 'is-uitem-expanded'); });

    var actives = base.querySelectorAll('.is-ulink-active');
    actives.forEach(function(el) { removeClass(el, 'is-ulink-active'); });

    var flyouts = base.querySelectorAll('.is-flyout-expanded');
    flyouts.forEach(function(el) { removeClass(el, 'is-flyout-expanded'); });
  }

  // Enhanced caret click handler with aria-expanded support
  function handleCaretClick(e) {
    var $caret = e.target;
    
    e.preventDefault();
    e.stopPropagation();

    var $link = closest($caret, '.ultimenu__link');
    var $li = closest($link, 'li');
    var $flyout = $link ? $link.nextElementSibling : null;
    var $container = closest($li, '.ultimenusub');
    var $submenu = $container ? closest($li, '.menu') : null;

    if (!$flyout || !$link || !$li) {
      return false;
    }

    var hidden = isHidden($flyout);

    // Handle flyout closure logic
    if ($submenu) {
      if (hidden) {
        closeFlyout($submenu);
      }
    } else {
      closeFlyout();
    }

    // Set aria-expanded BEFORE visual changes
    $link.setAttribute('aria-expanded', hidden ? 'true' : 'false');

    // Toggle the current flyout with visual classes
    var isFlyout = hasClass($flyout, 'ultimenu__flyout');
    var isMenu = hasClass($flyout, 'menu') || $flyout.tagName.toLowerCase() === 'ul';
    
    if (isFlyout || isMenu) {
      if (hidden) {
        addClass($li, 'is-uitem-expanded');
        addClass($link, 'is-ulink-active');
      } else {
        removeClass($li, 'is-uitem-expanded');
        removeClass($link, 'is-ulink-active');
      }
      
      slideToggle($flyout, 'is-flyout-expanded', hidden);
    }
  }

  // Setup event delegation (simpler approach)
  function setupEventDelegation() {
    // Remove any existing handlers
    $(document).off('click.ultimenuExtrasMain', '.ultimenu__caret');
    
    // Add our handler with higher priority (capture phase)
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('ultimenu__caret') || 
          e.target.closest('.ultimenu__caret')) {
        
        var $caret = e.target.classList.contains('ultimenu__caret') ? 
                     e.target : 
                     e.target.closest('.ultimenu__caret');
        
        // Stop the event from reaching other handlers
        e.stopImmediatePropagation();
        e.preventDefault();
        
        // Create a synthetic event for our handler
        var syntheticEvent = {
          target: $caret,
          preventDefault: function() {},
          stopPropagation: function() {}
        };
        
        handleCaretClick(syntheticEvent);
      }
    }, true); // Use capture phase to intercept before other handlers
  }

  // Try to override the method as well (backup)
  function overrideClickCaret() {
    if (Drupal.ultimenu && typeof Drupal.ultimenu.onClickCaret === 'function') {
      // Store original
      var originalMethod = Drupal.ultimenu.onClickCaret;
      
      Drupal.ultimenu.onClickCaret = function(e) {
        handleCaretClick(e);
      };
      
      return true;
    }
    return false;
  }

  var setupComplete = false;

  function setupUltimenuExtras() {
    if (setupComplete) {
      return;
    }
    
    // Primary method: Event delegation with capture
    setupEventDelegation();
    
    // Backup method: Override the original method  
    var methodOverridden = overrideClickCaret();
    
    setupComplete = true;
  }

  var attempts = 0;
  var maxAttempts = 10;
  
  function trySetup() {
    attempts++;
    
    // Don't wait for carets, just set up the delegation
    setupUltimenuExtras();
  }

  Drupal.behaviors.ultimenuExtras = {
    attach: function (context, settings) {
      // Immediate setup
      setTimeout(function() {
        trySetup();
      }, 100);
    }
  };

  // Also try on window load
  $(window).on('load', function() {
    if (!setupComplete) {
      setTimeout(function() {
        setupUltimenuExtras();
      }, 100);
    }
  });

})(jQuery, Drupal, once);