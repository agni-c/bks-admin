import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/verify-account/Transactions/Status-Updates/AllotAppointments/page-header";
import RowTwo from "../../../containers/verify-account/Transactions/Status-Updates/AllotAppointments/row-two";
import SEO from "../../../components/seo";

const AllotAppointments: React.FC = () => {
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

export default AllotAppointments;
