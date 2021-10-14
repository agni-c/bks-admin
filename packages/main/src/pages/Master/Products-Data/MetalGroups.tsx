import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/Master/Products-Data/MetalGroups/page-header";
import RowTwo from "../../../containers/Master/Products-Data/MetalGroups/row-two";
import SEO from "../../../components/seo";

const MetalGroups: React.FC = () => {
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

export default MetalGroups;
