import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/Master/Security/MasterUserRights/page-header";
import RowTwo from "../../../containers/Master/Security/MasterUserRights/row-two";
import SEO from "../../../components/seo";

const MasterUserRights: React.FC = () => {
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

export default MasterUserRights;
