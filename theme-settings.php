<?php

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Theme\ThemeSettings;
use Drupal\System\Form\ThemeSettingsForm;
use Drupal\Core\Form;

function ashlar_form_system_theme_settings_alter(&$form, FormStateInterface &$form_state) {  
  // New Categories
    $form['load_scripts'] = [
    '#type' => 'details',
    '#title' => t('Load Scripts'),
    '#open' => TRUE, 
    '#weight' => -2, 
  ];

  $form['ashlar_options'] = [
    '#type' => 'details',
    '#title' => t('Theme Customization'),
    '#open' => TRUE, 
    '#weight' => -1, 
  ];

  // Special Script Loading
  $form['load_scripts']['alert_display'] = array(
    '#type' => 'checkbox',
    '#title' => t('Display Western alerts'),
    '#default_value' => theme_get_setting('alert_display'),
  );
  $form['load_scripts']['enable_acalog_widget'] = array(
    '#type' => 'checkbox',
    '#title' => t('Load Javascript for dynamic catalog links'),
    '#default_value' => theme_get_setting('enable_acalog_widget'),
  );

  // Ashlar Custom Options
  $form['ashlar_options']['navigation_option'] = array(
    '#type' => 'checkbox',
    '#title' => t('Always use menu toggle'),
    '#default_value' => theme_get_setting('navigation_option'),
  );
  $form['ashlar_options']['show_manual_login'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show manual login form'),
    '#default_value' => theme_get_setting('show_manual_login'),
  );
  $form['ashlar_options']['hide_quick_links'] = array(
    '#type' => 'checkbox',
    '#title' => t('Hide quick links'),
    '#default_value' => theme_get_setting('hide_quick_links'),
  );
  $form['ashlar_options']['hide_footer'] = array(
    '#type' => 'checkbox',
    '#title' => t('Hide Western footer'),
    '#default_value' => theme_get_setting('hide_footer'),
  );


  // Tracking
  $form['tracking'] = array(
    '#type' => 'details',
    '#title' => t('Tracking'),
    '#open' => TRUE,
  );
  $form['tracking']['vimeo_tracking'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Vimeo tracking'),
    '#default_value' => theme_get_setting('vimeo_tracking'),
  );
}
