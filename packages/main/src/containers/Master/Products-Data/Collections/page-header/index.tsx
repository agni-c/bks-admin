import { FC } from "react";
import { Printer, Mail, CreditCard, Plus } from "react-feather";
import { Heading, Text, Button } from "@doar/components";
import Collections from "src/pages/Master/Products-Data/Collections";
import { StyledWrap, StyledBtnWrap } from "./style";

const PageHeader: FC = () => {
  return (
    <StyledWrap>
      <div>
        <Heading as="h4" mb="5px">
          Collections
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
