import React from "react";
import { Card, CardContent, StylesProvider, Typography } from '@material-ui/core';
// import { QueryRenderer } from "@cubejs-client/react";
import styles from '../styles/infobox.module.css';



const Data = ({ title }) => (
  <Card className={styles.infobox}>
      <CardContent>
          <p className={styles.infotitle}>
              {title}
          </p>
          <h2>120</h2>
      </CardContent>
  </Card>
);

export default Data;