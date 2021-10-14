/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Layout from "@doar/main/src/layouts";
import Content from "@doar/main/src/layouts/content";
import PageHeader from "@doar/main/src/containers/Master/Plans/DefineCyclePeriod/page-header";
import RowTwo from "@doar/main/src/containers/Master/Plans/DefineCyclePeriod/row-two";
import SEO from "@doar/main/src/components/seo";

const DefineCyclePeriod: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Content borderBottomWidth="1px">
        <PageHeader />
      </Content>
      <Content mt={[null, null, null, "0px"]}>
        <RowTwo />
      </Content>
    </Layout>
  );
};

export default DefineCyclePeriod;
