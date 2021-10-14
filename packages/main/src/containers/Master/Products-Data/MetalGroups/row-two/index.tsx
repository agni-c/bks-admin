/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-underscore-dangle */
import { FC, useState, useEffect } from "react";
import { Table, Button, Text } from "@doar/components";
import { Edit2, Trash } from "react-feather";
import axios from "axios";
import { StyledTH, StyledTD, StyledBtnWrap } from "./style";
import ModalEdit from "../../../../../components/Master/Products-Data/MetalGroups/Modal-Edit/index";
import ModalDelete from "../../../../../components/Master/Products-Data/MetalGroups/Modal-Delete/index";

const RowTwo: FC = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <Table mt="40px" borderBottomWidth={1}>
      <thead>
        <tr>
          <StyledTH width="20%">Id</StyledTH>
          <StyledTH width="40%" display={["none", "table-cell"]}>
            Metal Group Name
          </StyledTH>
          <StyledTH textAlign="center">Karatage</StyledTH>
          <StyledTH textAlign="right">Fineness</StyledTH>
          <StyledTH textAlign="right">Reference Id</StyledTH>
          <StyledTH textAlign="right">Action</StyledTH>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* {data.map((item) => ( */}
          <div>
            {/* <StyledTD>{item._id}</StyledTD> */}
            <StyledTD textAlign="right">Metal group name</StyledTD>
            <StyledTD color="text3" display={["none", "table-cell"]}>
              {/* {item.karatage} */}
            </StyledTD>
            {/* <StyledTD textAlign="center">{item.fineness}</StyledTD> */}
            {/* <StyledTD textAlign="right">{item.referenceId}</StyledTD> */}
            <StyledTD textAlign="right">
              <StyledBtnWrap>
                <Button
                  size="sm"
                  color="white"
                  mr="5px"
                  hasIcon
                  iconSpace="5px"
                  // onClick={handleEditModal}
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
                  // onClick={handleDeleteModal}
                >
                  <Trash />
                  <Text as="span" display={["none", "inline"]}>
                    Delete
                  </Text>
                </Button>
              </StyledBtnWrap>
            </StyledTD>
          </div>
          {/* ))} */}
        </tr>
      </tbody>
    </Table>
  );
};

export default RowTwo;
