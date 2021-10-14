import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/verify-account/Transactions/Order/OrderShipping/page-header";
import RowTwo from "../../../containers/verify-account/Transactions/Order/OrderShipping/row-two";
import SEO from "../../../components/seo";

const OrderShipping: React.FC = () => {
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

export default OrderShipping;
