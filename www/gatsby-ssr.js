const React = require('react');

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="solid"
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/solid.css"
      integrity="sha384-wnAC7ln+XN0UKdcPvJvtqIH3jOjs9pnKnq9qX68ImXvOGz2JuFoEiCjT8jyZQX2z"
      crossOrigin="anonymous"
    />,
    <link
      key="brands"
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/brands.css"
      integrity="sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE"
      crossOrigin="anonymous"
    />,
    <link
      key="fa"
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css"
      integrity="sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6"
      crossOrigin="anonymous"
    />,
    <link
      key="eeee"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
    />,
  ]);

  setPostBodyComponents([
    <script
      key="asfasfasfas"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
    />,
  ]);
};
