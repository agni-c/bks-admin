import { FC } from "react";
import { Button, Table } from "@doar/components";
import { StyledTH, StyledTD } from "./style";

const RowTwo: FC = () => {
  return (
    <Table mt="40px" borderBottomWidth={1}>
      <thead>
        <tr>
          <StyledTH width="20%">Id</StyledTH>
          <StyledTH width="40%" display={["none", "table-cell"]}>
            Title
          </StyledTH>
          <StyledTH textAlign="center">Content</StyledTH>
          <StyledTH textAlign="right">Action</StyledTH>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StyledTD>Website Design</StyledTD>
          <StyledTD color="text3" display={["none", "table-cell"]}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam...
          </StyledTD>
          <StyledTD textAlign="center">2</StyledTD>
          <StyledTD textAlign="right">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </StyledTD>
        </tr>
      </tbody>
    </Table>
  );
};

export default RowTwo;
