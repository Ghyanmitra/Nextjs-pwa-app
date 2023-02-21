import React from "react";
import Head from "next/head";

function TitleComponent({ title }) {
  return (
    <Head>
      <title>{title ? title : "Create Next App"}</title>
    </Head>
  );
}

export default TitleComponent;
