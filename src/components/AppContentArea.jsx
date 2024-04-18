import Box from "@mui/material/Box";
//import React, { useState } from "react";
import SideList from "./SideList";
import TabList from "./TabList";
import CardList from "./CardList";
import { fetchFromApi } from "../utils/api";
import React, { useState, useEffect } from "react";
import { appContentWrapper, flexColumnGrow } from "@styles/styles";
import Loader from "./Loader";

const AppContentArea = ({ isOpen }) => {
  const [youtubeData, setYoutubeData] = useState([]);
  //this is for categories
  const [searchText, setSearchText] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFromApi("/search?part=snippet", searchText).then((response) => {
      setYoutubeData(response.data.items);
      setLoading(false);
    });
  }, [searchText]);

  const onTabChange = (searchValue) => {
    setSearchText(searchValue);
    setLoading(!loading);
  };
  // if (!youtubeData.length) {
  //   return;
  // }

  const sideBarWidth = isOpen ? "70px" : "250px";
  return (
    <Box component="main" sx={appContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: "auto",
        }}
      >
        <SideList />
      </Box>
      <Box component="div" sx={flexColumnGrow}>
        <Box
          component="div"
          sx={{
            display:"block",
            p:2,
            minHeight:"100px",
            mb:4,
            overflow:"hidden",
            overflowY:"hidden",
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList onTabChange={onTabChange}/>
          <Loader open={loading}/>
          <CardList items={youtubeData} />
        </Box>
      </Box>
    </Box>

  );
};

export default AppContentArea;