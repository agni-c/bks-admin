import { FC, useState } from "react";
import { Table, Button, Text } from "@doar/components";
import { Edit2, Trash } from "react-feather";
import { useQuery } from "react-query";
import * as dotenv from "dotenv";
import axios from "axios";
import { fetchMetals } from "../../../../../services/api";
import { StyledTH, StyledTD, StyledBtnWrap } from "./style";

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RowTwo: FC = () => {
  // console.log({ envUrl: process.env.REACT_APP_API_URL });
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleEditModal = () => {
    setShowEdit((prev) => !prev);
  };
  const handleDeleteModal = () => {
    setShowDelete((prev) => !prev);
  };
  const { data, isLoading } = useQuery("metals", fetchMetals);
  // console.log({ data });

  return (
    <Table mt="40px" borderBottomWidth={1}>
      <thead>
        <tr>
          <StyledTH width="20%">ID</StyledTH>
          <StyledTH width="40%" display={["none", "table-cell"]}>
            Metal Name
          </StyledTH>
          <StyledTH textAlign="center">Action</StyledTH>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StyledTD>Website Design</StyledTD>
          <StyledTD textAlign="center">Sample</StyledTD>
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
