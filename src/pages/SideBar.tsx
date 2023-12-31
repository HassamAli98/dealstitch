import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {Link} from "react-router-dom"
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoImage from "../assets/ds_applogo.svg.png";

interface SideBarProps {
  open: boolean;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: "#2D3F5B",
  color: "#F2F4F6",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: "#2D3F5B",
  color: "#F2F4F6",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar: React.FC<SideBarProps> = ({ open }) => {
  const [dropdownOpen, setDropDownOpen] = React.useState(false);
  const handleDropdownToggle = () => {
    setDropDownOpen(!dropdownOpen);
  };
  return (
    <Box>
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            padding: "24px 12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {open && <img src={LogoImage} alt="Logo" />}
        </Box>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M0.4375 8.62061C0.4375 6.49887 1.28035 4.46404 2.78065 2.96375C4.28094 1.46346 6.31577 0.620605 8.4375 0.620605V8.62061H16.4375C16.4375 10.7423 15.5946 12.7772 14.0944 14.2775C12.5941 15.7778 10.5592 16.6206 8.4375 16.6206C6.31577 16.6206 4.28094 15.7778 2.78065 14.2775C1.28035 12.7772 0.4375 10.7423 0.4375 8.62061Z"
                  fill="#9CA3AF"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleDropdownToggle}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.4375 6.92065C13.4375 8.35503 12.9719 9.68003 12.1875 10.755L16.1438 14.7144C16.5344 15.105 16.5344 15.7394 16.1438 16.13C15.7531 16.5207 15.1188 16.5207 14.7281 16.13L10.7719 12.1707C9.69688 12.9582 8.37188 13.4207 6.9375 13.4207C3.34688 13.4207 0.4375 10.5113 0.4375 6.92065C0.4375 3.33003 3.34688 0.420654 6.9375 0.420654C10.5281 0.420654 13.4375 3.33003 13.4375 6.92065ZM6.9375 11.4207C7.52845 11.4207 8.11361 11.3043 8.65958 11.0781C9.20554 10.852 9.70162 10.5205 10.1195 10.1026C10.5373 9.68477 10.8688 9.18869 11.095 8.64273C11.3211 8.09676 11.4375 7.5116 11.4375 6.92065C11.4375 6.32971 11.3211 5.74454 11.095 5.19858C10.8688 4.65261 10.5373 4.15654 10.1195 3.73867C9.70162 3.32081 9.20554 2.98934 8.65958 2.7632C8.11361 2.53705 7.52845 2.42065 6.9375 2.42065C6.34655 2.42065 5.76139 2.53705 5.21543 2.7632C4.66946 2.98934 4.17338 3.32081 3.75552 3.73867C3.33766 4.15654 3.00619 4.65261 2.78004 5.19858C2.5539 5.74454 2.4375 6.32971 2.4375 6.92065C2.4375 7.5116 2.5539 8.09676 2.78004 8.64273C3.00619 9.18869 3.33766 9.68477 3.75552 10.1026C4.17338 10.5205 4.66946 10.852 5.21543 11.0781C5.76139 11.3043 6.34655 11.4207 6.9375 11.4207Z"
                  fill="#9CA3AF"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Entity Finder" />
            {dropdownOpen ? (
              <Box>
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
              </Box>
            ) : (
              <Box sx={{ transform: "rotate(-90deg)" }}>
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
              </Box>
            )}
          </ListItemButton>
          {dropdownOpen && (
            <Box sx={{ paddingLeft: "60px" }}>
              <ListItemButton>
                <Link to="/entity_finder/search_entity" >
                    <ListItemText primary="Search Entities"  />
                </Link>
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Create New" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Bulk Import" />
              </ListItemButton>
            </Box>
          )}

          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M8.04517 0.700284L1.04599 3.69993C0.608545 3.88741 0.364824 4.3561 0.461687 4.81855C0.558551 5.281 0.964753 5.61846 1.4397 5.61846V5.86843C1.4397 6.284 1.77403 6.61834 2.18961 6.61834H14.6881C15.1037 6.61834 15.4381 6.284 15.4381 5.86843V5.61846C15.913 5.61846 16.3223 5.28412 16.4161 4.81855C16.5098 4.35298 16.2661 3.88428 15.8318 3.69993L8.83258 0.700284C8.58261 0.594046 8.29514 0.594046 8.04517 0.700284ZM4.43934 7.61822H2.43958V13.7519C2.42083 13.7613 2.40208 13.7737 2.38334 13.7862L0.883513 14.7861C0.517931 15.0299 0.352325 15.486 0.480435 15.9079C0.608545 16.3297 0.999124 16.6172 1.4397 16.6172H15.4381C15.8786 16.6172 16.2661 16.3297 16.3942 15.9079C16.5223 15.486 16.3598 15.0299 15.9911 14.7861L14.4913 13.7862C14.4725 13.7737 14.4538 13.7644 14.435 13.7519V7.61822H12.4384V13.6175H11.1886V7.61822H9.18879V13.6175H7.68896V7.61822H5.6892V13.6175H4.43934V7.61822ZM8.43888 2.61881C8.70406 2.61881 8.95839 2.72415 9.1459 2.91167C9.33341 3.09918 9.43876 3.35351 9.43876 3.61869C9.43876 3.88388 9.33341 4.1382 9.1459 4.32571C8.95839 4.51323 8.70406 4.61857 8.43888 4.61857C8.17369 4.61857 7.91937 4.51323 7.73185 4.32571C7.54434 4.1382 7.43899 3.88388 7.43899 3.61869C7.43899 3.35351 7.54434 3.09918 7.73185 2.91167C7.91937 2.72415 8.17369 2.61881 8.43888 2.61881Z"
                  fill="#9CA3AF"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Entity Master" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.4375 2.42065C2.64185 2.42065 1.87879 2.73672 1.31618 3.29933C0.753571 3.86194 0.4375 4.625 0.4375 5.42065V11.4207C0.4375 12.2163 0.753571 12.9794 1.31618 13.542C1.87879 14.1046 2.64185 14.4207 3.4375 14.4207H13.4375C14.2331 14.4207 14.9962 14.1046 15.5588 13.542C16.1214 12.9794 16.4375 12.2163 16.4375 11.4207V5.42065C16.4375 4.625 16.1214 3.86194 15.5588 3.29933C14.9962 2.73672 14.2331 2.42065 13.4375 2.42065H3.4375ZM2.4375 11.4207V10.4207H7.4375V12.4207H3.4375C3.17228 12.4207 2.91793 12.3153 2.73039 12.1278C2.54286 11.9402 2.4375 11.6859 2.4375 11.4207ZM9.4375 12.4207H13.4375C13.7027 12.4207 13.9571 12.3153 14.1446 12.1278C14.3321 11.9402 14.4375 11.6859 14.4375 11.4207V10.4207H9.4375V12.4207ZM9.4375 8.42065H14.4375V6.42065H9.4375V8.42065ZM7.4375 6.42065H2.4375V8.42065H7.4375V6.42065Z"
                  fill="#9CA3AF"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Data Master" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M3.4375 1.2207C2.90707 1.2207 2.39836 1.43142 2.02329 1.80649C1.64821 2.18156 1.4375 2.69027 1.4375 3.2207V5.2207C1.4375 5.75114 1.64821 6.25984 2.02329 6.63492C2.39836 7.00999 2.90707 7.2207 3.4375 7.2207H5.4375C5.96793 7.2207 6.47664 7.00999 6.85171 6.63492C7.22679 6.25984 7.4375 5.75114 7.4375 5.2207V3.2207C7.4375 2.69027 7.22679 2.18156 6.85171 1.80649C6.47664 1.43142 5.96793 1.2207 5.4375 1.2207H3.4375ZM3.4375 9.2207C2.90707 9.2207 2.39836 9.43142 2.02329 9.80649C1.64821 10.1816 1.4375 10.6903 1.4375 11.2207V13.2207C1.4375 13.7511 1.64821 14.2598 2.02329 14.6349C2.39836 15.01 2.90707 15.2207 3.4375 15.2207H5.4375C5.96793 15.2207 6.47664 15.01 6.85171 14.6349C7.22679 14.2598 7.4375 13.7511 7.4375 13.2207V11.2207C7.4375 10.6903 7.22679 10.1816 6.85171 9.80649C6.47664 9.43142 5.96793 9.2207 5.4375 9.2207H3.4375ZM9.4375 3.2207C9.4375 2.69027 9.64821 2.18156 10.0233 1.80649C10.3984 1.43142 10.9071 1.2207 11.4375 1.2207H13.4375C13.9679 1.2207 14.4766 1.43142 14.8517 1.80649C15.2268 2.18156 15.4375 2.69027 15.4375 3.2207V5.2207C15.4375 5.75114 15.2268 6.25984 14.8517 6.63492C14.4766 7.00999 13.9679 7.2207 13.4375 7.2207H11.4375C10.9071 7.2207 10.3984 7.00999 10.0233 6.63492C9.64821 6.25984 9.4375 5.75114 9.4375 5.2207V3.2207ZM9.4375 11.2207C9.4375 10.6903 9.64821 10.1816 10.0233 9.80649C10.3984 9.43142 10.9071 9.2207 11.4375 9.2207H13.4375C13.9679 9.2207 14.4766 9.43142 14.8517 9.80649C15.2268 10.1816 15.4375 10.6903 15.4375 11.2207V13.2207C15.4375 13.7511 15.2268 14.2598 14.8517 14.6349C14.4766 15.01 13.9679 15.2207 13.4375 15.2207H11.4375C10.9071 15.2207 10.3984 15.01 10.0233 14.6349C9.64821 14.2598 9.4375 13.7511 9.4375 13.2207V11.2207Z"
                  fill="#9CA3AF"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Systems" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.92774 1.19051C9.54774 -0.369492 7.32774 -0.369492 6.94774 1.19051C6.89101 1.42492 6.77973 1.64263 6.62296 1.82592C6.46619 2.0092 6.26837 2.15289 6.04558 2.24528C5.8228 2.33767 5.58134 2.37615 5.34088 2.3576C5.10041 2.33904 4.86772 2.26398 4.66174 2.13851C3.28974 1.30251 1.71974 2.87251 2.55574 4.24451C3.09574 5.13051 2.61674 6.28651 1.60874 6.53151C0.0477383 6.91051 0.0477383 9.13151 1.60874 9.50951C1.84322 9.56631 2.06096 9.67769 2.24425 9.83458C2.42754 9.99147 2.57118 10.1894 2.66348 10.4123C2.75578 10.6352 2.79413 10.8768 2.77541 11.1173C2.75669 11.3579 2.68142 11.5906 2.55574 11.7965C1.71974 13.1685 3.28974 14.7385 4.66174 13.9025C4.86768 13.7768 5.10039 13.7016 5.34092 13.6828C5.58146 13.6641 5.82301 13.7025 6.04592 13.7948C6.26882 13.8871 6.46678 14.0307 6.62367 14.214C6.78055 14.3973 6.89193 14.615 6.94874 14.8495C7.32774 16.4105 9.54874 16.4105 9.92674 14.8495C9.98374 14.6152 10.0952 14.3976 10.2521 14.2144C10.4091 14.0312 10.607 13.8877 10.8298 13.7954C11.0527 13.7031 11.2941 13.6647 11.5346 13.6834C11.7751 13.702 12.0077 13.777 12.2137 13.9025C13.5857 14.7385 15.1557 13.1685 14.3197 11.7965C14.1943 11.5905 14.1192 11.3578 14.1006 11.1174C14.082 10.8769 14.1204 10.6354 14.2126 10.4126C14.3049 10.1898 14.4485 9.99183 14.6316 9.83491C14.8148 9.67799 15.0324 9.56651 15.2667 9.50951C16.8277 9.13051 16.8277 6.90951 15.2667 6.53151C15.0323 6.4747 14.8145 6.36332 14.6312 6.20644C14.4479 6.04955 14.3043 5.85159 14.212 5.62869C14.1197 5.40578 14.0813 5.16423 14.1001 4.92369C14.1188 4.68316 14.1941 4.45045 14.3197 4.24451C15.1557 2.87251 13.5857 1.30251 12.2137 2.13851C12.0078 2.26419 11.7751 2.33945 11.5346 2.35818C11.294 2.3769 11.0525 2.33855 10.8296 2.24625C10.6067 2.15395 10.4087 2.0103 10.2518 1.82702C10.0949 1.64373 9.98354 1.42599 9.92674 1.19151L9.92774 1.19051ZM8.43774 11.0205C9.23339 11.0205 9.99645 10.7044 10.5591 10.1418C11.1217 9.57922 11.4377 8.81616 11.4377 8.02051C11.4377 7.22486 11.1217 6.4618 10.5591 5.89919C9.99645 5.33658 9.23339 5.02051 8.43774 5.02051C7.64209 5.02051 6.87903 5.33658 6.31642 5.89919C5.75381 6.4618 5.43774 7.22486 5.43774 8.02051C5.43774 8.81616 5.75381 9.57922 6.31642 10.1418C6.87903 10.7044 7.64209 11.0205 8.43774 11.0205Z"
                  fill="#9CA3AF"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
