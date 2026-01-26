<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:fw="http://technolutions.com/framework" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xhtml">
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <template path="/shared/base.xslt" xmlns="http://technolutions.com/framework" />
      <head>
        <link href="/shared/build.css" rel="stylesheet" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" class="cr" />
        <xsl:apply-templates select="xhtml:html/xhtml:head/node()" />
      </head>
      <body>
        <xsl:copy-of select="xhtml:html/xhtml:body/@*" />
        <div id="page">
          <header id="c_header-span" class="c_main_header cr">
            <a href="#main-content" class="skip-link">
              <span class="skip-link-text">Skip to Content </span>
            </a>
            <wwu-header sitename="Slate Test">
            </wwu-header>
          </header>
          <main id="main-content" class="page-content">
            <!-- Body content section -->
            <div class="region-wrapper">
              <div id="global" />
              <div id="content">
              </div>
              <xsl:apply-templates select="xhtml:html/xhtml:body/node()" />
            </div>
          </main>
          <footer>
            <wwu-footer>
            </wwu-footer>
          </footer>
          <script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/logo.js">
          </script>
          <script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/wwu-header.js">
          </script>
          <script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/search.js">
          </script>
          <script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/display-settings.js">
          </script>
          <script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/social-media-icons.js">
          </script>
          <script src="https://ashlar.blob.core.windows.net/ashlar-theme-files/js/wwu-footer.js">
          </script>
        </div>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>