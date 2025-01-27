import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Import Ionicon icons & Google Fonts our Bootstrap theme relies on */}
        <link
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,70 0|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=optional"
          rel="stylesheet"
          type="text/css"
        />
        {/* Import the custom Bootstrap 4 theme from our hosted CDN */}
        <link
          rel="stylesheet"
          href="https://demo.productionready.io/main.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
