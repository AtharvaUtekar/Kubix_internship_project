import React from "react";

import classNames from "classnames";
import { Col } from "shards-react";



class MainSidebar extends React.Component {

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      "open"
    );

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
       
      </Col>
    );
  }
}

export default MainSidebar;
