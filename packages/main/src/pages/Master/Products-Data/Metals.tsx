/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useQuery } from "react-query";
import { fetchMetals } from "../../../services/api";
import Layout from "../../../layouts";
import Content from "../../../layouts/content";
import PageHeader from "../../../containers/Master/Products-Data/Metals/page-header";
import RowTwo from "../../../containers/Master/Products-Data/Metals/row-two";
import SEO from "../../../components/seo";

const Metals: React.FC = () => {
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

export default Metals;
