import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-[#173539] h-screen ">
      <Head />
      <body
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
        className="min-h-screen"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
