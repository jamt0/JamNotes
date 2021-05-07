import React from "react";
import HomeView from "pages/Home/HomeView";
import { useSettingsUser } from "context/settingsUser";

const Home: React.FC = () => {
  const { texts } = useSettingsUser()!;
  return <HomeView texts={texts}/>;
};

export default Home;
