import { FC } from "react";
import { Printer, Mail, CreditCard } from "react-feather";
import { Heading, Text, Button } from "@doar/components";
import { StyledWrap, StyledBtnWrap } from "./style";

const PageHeader: FC = () => {
  return (
    <StyledWrap>
      <div>
        <Heading as="h4" mb="5px">
          Email Report
        </Heading>
        <Text color="text3">Due on April 21, 2019</Text>
      </div>
    </StyledWrap>
  );
};

export default PageHeader;
