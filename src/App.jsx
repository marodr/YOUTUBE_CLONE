import { Box } from "@mui/material";
import { appWrapper } from "@styles/styles";
import AppNavMenu from "@navigation/AppNavMenu";
import AppContentArea from "@components/AppContentArea";
import { useState } from "react";
import { fetchFromApi } from "./utils/api";


const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [youtubeData, setYoutubeData] = useState([]);
  const [searchText, setSearchText] = useState("All");


  useEffect(() => {
    fetchFromApi("/search?part=snippet", searchText).then((response) => {
      setYoutubeData(response.data.items);
    });
    console.log("print1")
  }, [searchText]);
  if (!youtubeData.length) {
    return;
  }



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Box sx={appWrapper}>
      <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
      <AppContentArea isOpen={mobileOpen} />
    </Box>
    
  );
};


export default App;
