import React from "react";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/Customer-Relations/Whatsapp/WhatsappReport/page-header";
import RowTwo from "../../../containers/Customer-Relations/Whatsapp/WhatsappReport/row-two";
import SEO from "../../../components/seo";

const WhatsAppReport: React.FC = () => {
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

export default WhatsAppReport;
