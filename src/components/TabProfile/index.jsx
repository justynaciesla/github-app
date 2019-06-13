import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Repositories from "../Repositories";
import Followers from "../Followers";
import "./style.css";

const TabProfile = ({
  repos,
  followersNumber,
  following,
  repositories,
  followers,
  username
}) => {
  return (
    <Tabs>
      <TabList>
        <Tab style={{ fontSize: "20px", marginRight: "20px" }}>
          Repositories
          <div className="numberCircle">
            <span>{repos}</span>
          </div>
        </Tab>
        <Tab style={{ fontSize: "20px", marginRight: "20px" }}>
          Followers{" "}
          <div className="numberCircle">
            <span>{followersNumber}</span>
          </div>
        </Tab>
        <Tab style={{ fontSize: "20px", marginRight: "20px" }}>
          Following
          <div className="numberCircle">
            <span>{following}</span>
          </div>
        </Tab>
      </TabList>

      <TabPanel>
        <Repositories username={username} />
      </TabPanel>
      <TabPanel>
        <Followers followers={followers} />
      </TabPanel>
      <TabPanel>
        <h2>Following</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TabProfile;
