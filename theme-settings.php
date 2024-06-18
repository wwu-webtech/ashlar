<?php

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Theme\ThemeSettings;
use Drupal\System\Form\ThemeSettingsForm;
use Drupal\Core\Form;

function ashlar_form_system_theme_settings_alter(&$form, FormStateInterface &$form_state) {
  $form['tracking'] = array(
    '#type' => 'details',
    '#title' => t('Tracking'),
    '#open' => TRUE,
  );

  $form['tracking']['siteimprove_tracking'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable SiteImprove tracking'),
    '#default_value' => theme_get_setting('siteimprove_tracking'),
  );

  $form['tracking']['vimeo_tracking'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Vimeo tracking'),
    '#default_value' => theme_get_setting('vimeo_tracking'),
  );

  $form['theme_settings']['alert_display'] = array(
    '#type' => 'checkbox',
    '#title' => t('Display Western alerts'),
    '#default_value' => theme_get_setting('alert_display'),
  );

  $form['theme_settings']['show_manual_login'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show manual login form'),
    '#default_value' => theme_get_setting('show_manual_login'),
  );

  $form['theme_settings']['enable_acalog_widget'] = array(
    '#type' => 'checkbox',
    '#title' => t('Load Javascript for dynamic catalog links'),
    '#default_value' => theme_get_setting('enable_acalog_widget'),
  );

  $form['theme_settings']['disable_google_tag_manager'] = array(
    '#type' => 'checkbox',
    '#title' => t('Disable Google tag manager'),
    '#default_value' => theme_get_setting('disable_google_tag_manager'),
  );
}
