import { FC } from "react";
import { Printer, Mail, CreditCard, Plus } from "react-feather";
import { Heading, Text, Button } from "@doar/components";
import { StyledWrap, StyledBtnWrap } from "./style";

const PageHeader: FC = () => {
  return (
    <StyledWrap>
      <div>
        <Heading as="h4" mb="5px">
          Percentage Token
        </Heading>
      </div>
      <StyledBtnWrap>
        <Button iconSize="sm" ml="10px">
          <Plus /> Add
        </Button>
      </StyledBtnWrap>
    </StyledWrap>
  );
};

export default PageHeader;
