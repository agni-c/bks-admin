import { FC, useState } from "react";
import { Table, Button, Text } from "@doar/components";
import { Edit2, Trash } from "react-feather";
import { StyledTH, StyledTD, StyledBtnWrap } from "./style";

const RowTwo: FC = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleEditModal = () => {
    setShowEdit((prev) => !prev);
  };
  const handleDeleteModal = () => {
    setShowDelete((prev) => !prev);
  };
  return (
    <Table mt="40px" borderBottomWidth={1}>
      <thead>
        <tr>
          <StyledTH width="20%">Id</StyledTH>
          <StyledTH width="40%" display={["none", "table-cell"]}>
            Diamond Shapes
          </StyledTH>
          <StyledTH textAlign="center">GemStones</StyledTH>
          <StyledTH textAlign="right">Diamond Clarity</StyledTH>
          <StyledTH textAlign="right">Diamond Color</StyledTH>
          <StyledTH textAlign="right">Diamond Cut</StyledTH>
          <StyledTH textAlign="right">Certifying Authority</StyledTH>
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
          <StyledTD textAlign="right">$150.00</StyledTD>
          <StyledTD textAlign="right">$150.00</StyledTD>
          <StyledTD textAlign="right">$150.00</StyledTD>
          <StyledTD textAlign="right">$150.00</StyledTD>
          <StyledTD textAlign="right">
            <StyledBtnWrap>
              <Button
                size="sm"
                color="white"
                mr="5px"
                hasIcon
                iconSpace="5px"
                onClick={handleEditModal}
              >
                <Edit2 />
                <Text as="span" display={["none", "inline"]}>
                  Edit
                </Text>
              </Button>
              <Button
                size="sm"
                color="white"
                hasIcon
                iconSpace="5px"
                onClick={handleDeleteModal}
              >
                <Trash />
                <Text as="span" display={["none", "inline"]}>
                  Delete
                </Text>
              </Button>
            </StyledBtnWrap>
          </StyledTD>
        </tr>
      </tbody>
    </Table>
  );
};

export default RowTwo;
