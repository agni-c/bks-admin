import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/verify-account/Transactions/Financial/GoldAdjustments/page-header";
import RowTwo from "../../../containers/verify-account/Transactions/Financial/GoldAdjustments/row-two";
import SEO from "../../../components/seo";

const GoldAdjustments: React.FC = () => {
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

export default GoldAdjustments;
