import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static async getInitialProps({ req, renderPage }) {
    // Req includes localeDataScript, availableLocales, locale
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    const script = `window.ENV = '${process.env.ENV || "development"}';`;

    return (
      <html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: script }} />

          <title>Instagram Clone</title>
          <style jsx global>{`
            @import 'https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 700, 800';

            html {
              height: 100%;
              box-sizing: border-box;
            }

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }

            a {
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }

            body {
              position: relative;
              min-height: 100%;
              margin: 0;
              padding-bottom: 6rem;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
                "Helvetica Neue", "Open Sans", sans-serif;
              text-rendering: optimizeLegibility;
            }

            html,
            body {
              background-color: #fafafa;
              color: #000;
            }
          `}</style>

          {this.props.head}
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
