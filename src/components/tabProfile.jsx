import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Repositories from "./repositories";
import Followers from "./followers";

const TabProfile = ({
  repos,
  followersNumber,
  following,
  repositories,
  followers
}) => {
  return (
    <React.Fragment>
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
          <Repositories repositories={repositories} />
        </TabPanel>
        <TabPanel>
          <Followers followers={followers} />
        </TabPanel>
        <TabPanel>
          <h2>Following</h2>
        </TabPanel>
      </Tabs>
    </React.Fragment>
  );
};

export default TabProfile;
