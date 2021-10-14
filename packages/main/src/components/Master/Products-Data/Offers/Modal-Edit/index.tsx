import { FC } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  Avatar,
  AvatarInitial,
  Heading,
  Input,
  Textarea,
  Button,
} from "@doar/components";
import ContactEditPhoto from "../../../../apps/contacts/edit-photo-button";
import {
  StyledClose,
  StyledTitle,
  StyledDesc,
  StyledWrap,
  StyledLeft,
  StyledRight,
  StyledAvatar,
  StyledGroup,
} from "./style";

interface IProps {
  show: boolean;
  onClose: () => void;
}

const ModalEdit: FC<IProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalBody p={["20px", "30px"]}>
        <StyledClose onClose={onClose}>×</StyledClose>
        <StyledTitle>Edit Offer</StyledTitle>
        <StyledWrap>
          <StyledRight>
            <StyledGroup>
              <Input
                name="edit-name"
                id="edit-fname"
                placeholder="Name"
                value="Abigal"
              />
            </StyledGroup>
            <StyledGroup>
              <Input
                name="edit-lname"
                id="edit-lname"
                placeholder="Last Name"
                value="Johnson"
              />
            </StyledGroup>
            <StyledGroup>
              <Input
                name="edit-lname"
                id="edit-lname"
                placeholder="Last Name"
                value="Johnson"
              />
            </StyledGroup>
          </StyledRight>
        </StyledWrap>
      </ModalBody>
      <ModalFooter>
        <Button mb={["5px", 0]}>Save Changes</Button>
        <Button ml="5px" color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalEdit;
