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
    '#title' => t('Display Western Alerts'),
    '#default_value' => theme_get_setting('alert_display'),
  );

  $form['theme_settings']['show_manual_login'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Manual Login Form'),
    '#default_value' => theme_get_setting('show_manual_login'),
  );
}
