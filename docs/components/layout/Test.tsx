import { ContentContainer, Layout } from "@navikt/ds-react";
import React from "react";

const Test = () => {
  return (
    <ContentContainer>
      <Layout>
        <Layout.Section>
          <div>CONTENT</div>
        </Layout.Section>
        <Layout.Section right sticky>
          <span>CONTENT2</span>
        </Layout.Section>
      </Layout>
    </ContentContainer>
  );
};

export default Test;
