import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  overflowY: "auto",
  maxHeight: "100%",
};

const StyledModal = styled(Modal)`
  max-height: calc(100vh - 64px);
  margin-top: 16px;
`;

const DetailsModal = (props) => {
  const { paragraphs, open, handleClose } = props;

  return (
    <div>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            fontWeight="bold"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Details
          </Typography>
          {paragraphs?.map((paragraph, index) => (
            <Typography mb={2} key={index}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </StyledModal>
    </div>
  );
};

export default DetailsModal;
