import {
  Box,
  Breadcrumbs,
  Button,
  InputBase,
  Menu,
  MenuItem,
  MenuProps,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

const SearchEntity = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <i className="fa-solid fa-house"></i>
          <span className="text-[14px] font-normal">Entity Finder</span>
          <span className="text-[14px] font-normal">Search Entity</span>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          margin: "28px 0",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <span className="text-[24px] font-normal">
          Search Entities
        </span>
        <span className="text-[16px] font-normal">
          Browse entities in the Dealstitch global universe to view profiles and
          link them to your entity master.
        </span>
        <Box className="flex justify-between items-center">
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 400,
              boxShadow: "none",
              border: "1px solid #D1D5DB",
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
            <Box
              className="bg-[#F2F4F6]"
              sx={{ borderLeft: "1px solid #D1D5DB" }}
            >
              <Box className="py-[7px] px-[18px] ">
                <i className="fa fa-search text-black text-[12px]"></i>
              </Box>
            </Box>
          </Paper>
          <Box className='flex gap-[7px]'>
            <Box>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.73656 5.51959C3.92409 5.33212 4.1784 5.22681 4.44356 5.22681C4.70873 5.22681 4.96303 5.33212 5.15056 5.51959L8.44356 8.81259L11.7366 5.51959C11.9252 5.33744 12.1778 5.23664 12.44 5.23892C12.7022 5.2412 12.953 5.34637 13.1384 5.53177C13.3238 5.71718 13.429 5.968 13.4312 6.23019C13.4335 6.49239 13.3327 6.74499 13.1506 6.93359L9.15056 10.9336C8.96303 11.1211 8.70873 11.2264 8.44356 11.2264C8.1784 11.2264 7.92409 11.1211 7.73656 10.9336L3.73656 6.93359C3.54909 6.74607 3.44378 6.49176 3.44378 6.22659C3.44378 5.96143 3.54909 5.70712 3.73656 5.51959Z"
                      fill="white"
                    />
                  </svg>
                }
                sx={{
                  backgroundColor: "#2D3F5B",
                  "&:hover": { backgroundColor: "#2D3F5B" },
                }}
              >
                Filter By
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem disableRipple>My Linked Entities</MenuItem>
                <MenuItem disableRipple>Global Universe</MenuItem>
              </StyledMenu>
            </Box>
            <Box >
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                    p:'11px 0',
                  backgroundColor: "#2D3F5B",
                  "&:hover": { backgroundColor: "#2D3F5B" },
                }}
              >
                  <i className="fa-solid fa-download"></i> 
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem disableRipple>Current Page</MenuItem>
                <MenuItem disableRipple>All Page</MenuItem>
              </StyledMenu>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchEntity;
{
}
