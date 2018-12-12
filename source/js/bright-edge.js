/**
 @file
 * Implements BrightEdge Link Equity Manager.
 *
 * Access to and use of BrightEdge Link Equity Manager is governed by the
 * Infrastructure Product Terms located at:
 * www.brightedge.com/infrastructure-product-terms.
 * Customer acknowledges and agrees it has read, understands and agrees to
 * be bound by the Infrastructure Product Terms.
 * IXF: Deploy these scripts as the first item in the <head>.
 * Because this content is SEO-related, it needs to be loaded into the DOM
 * as early as possible to ensure that Google will include it in the page
 * snapshot.
 * By default, all URL parameters are ignored. If you have URL parameters
 * that add value to page content.  Add them to this config value, separated
 * by the pipe character (|).
 */

var be_sdk_options = {'api.endpoint': 'https://ixf2-api.bc0a.com',
  'sdk.account': 'f00000000121153',
  'requestparameters.caseinsensitive': true,
  'whitelist.parameter.list': 'ixf'
  };
  BEJSSDK.construct(be_sdk_options);
