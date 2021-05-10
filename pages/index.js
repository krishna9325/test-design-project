import React from 'react';
import { Container, Row, Col } from "reactstrap";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import SimCardIcon from '@material-ui/icons/SimCard';
import NavBar from '../components/Navbar';
import Data from '../components/Data';
import Chart from '../components/Chart';

export default function Home() {
  // const classes = useStyles();
  const [selectedDimension, setSelectedDimension] = React.useState(0);
  const [selectedMatrix, setSelectedMatrix] = React.useState(0);
  const [titleForChart, setTitleForChart] = React.useState("Average bitrate");

  const handleListItemClick = (event, index) => {
    setSelectedDimension(index);
  };

  const handleMatrixClick = (event, index, titleChart) => {
    setSelectedMatrix(index);
    setTitleForChart(titleChart);
    
  };

  return (
    <div className={styles.container}>

      <NavBar />

      <div className={styles.left_container}>

        <p>Last Updated: 9May'2021, 11:35</p>

        <div className={styles.dimension}>
          <h3>Dimensions</h3>
          {/* <div className={styles.dimensionlist}> */}
          <List style={{ maxHeight: '100%', overflow: 'auto' }}>
            <ListItem
              button
              autoFocus={true}
              selected={selectedDimension === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <SimCardIcon />
              </ListItemIcon>
              <ListItemText primary="ISP's" />
            </ListItem>
            <ListItem
              button
              selected={selectedDimension === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Country" />
            </ListItem>


          </List>
          {/* </div> */}

        </div>


        <div className={styles.metrix}>
          <h3>Metrix</h3>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItem
              button
              selected={selectedMatrix === 0}
              onClick={(event) => handleMatrixClick(event, 0, "Average bitrate")}
            >
              <ListItemText primary="Average bitrate" />
            </ListItem>

            <ListItem
              button
              selected={selectedMatrix === 1}
              onClick={(event) => handleMatrixClick(event, 1, "Engagement time")}
            >
              <ListItemText primary="Engagement time" />
            </ListItem>

            <ListItem
              button
              selected={selectedMatrix === 2}
              onClick={(event) => handleMatrixClick(event, 2, "Playback failure rate")}
            >
              <ListItemText primary="Playback failure rate" />
            </ListItem>

            <ListItem
              button
              selected={selectedMatrix === 3}
              onClick={(event) => handleMatrixClick(event, 3, "Average startup time")}
            >
              <ListItemText primary="Average startup time" />
            </ListItem>

          </List>
        </div>

      </div>

      <div className={styles.right_container}>
        <div className={styles.data_display}>

        <Data
          // cubejsApi={cubejsApi}
          title="Average rebuffer"
        />

        <Data
          title="Total Fovea Video Plays"
        />

        <Data
          title="Total Non-Fovea Video Plays"
        />

        <Data
          title="Total Crashes"
        />

        <Data
          title="Average startup time"
        />

        </div>

        <div className={styles.chartColumn}>
          <Chart title = {titleForChart}/>
          <Chart title="PlaybackFaliure rates -ISP wise worst 5 states" />
        </div>

      </div>


    </div>
  )
}
