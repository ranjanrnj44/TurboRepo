import React from "react";
import styles from "../global-styles/style.module.css"; //css
import { Card, Button, CardBody, CardTitle, CardText } from "reactstrap"; //reactStrap
import { nanoid } from "nanoid"; //nanoid
//shared library components
import { Buttons } from "ui";
import CounterButton from "ui/CounterButton";
import { add, subtract } from "helperfunction/src";
import _ from "lodash"; //lodash

const Landing = () => {
  let iD: string = nanoid();
  console.log(iD);
  // lodash calc
  var arr1: number[] = [1, 2, 3, 4];
  var arr2: number[] = [1, 2, 3, 4];

  console.log(`The Values are Equal : ${_.isEqual(arr1, arr2)}`);

  return (
    <>
      <div className={styles.nav_wrapper}>
        <div className={styles.nav_heading}>
          <h1>Monorepos</h1>
        </div>
        <ul className={styles.nav_ulist}>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        <h2>LoremIpsum data</h2>
        <p className={styles.para}>
          Libraries can xsprevent waterfalls by offering a more centralized way
          to do data fetching. For example, Relay solves this problem by moving
          the information about the data a component needs to statically
          analyzable fragments, which later get composed into a single query. On
          this page, we don’t assume knowledge of Relay, so we won’t be using it
          for this example. Instead, we’ll write something similar manually by
          combining our data fetching methods:
        </p>
        <Buttons />
        <CounterButton />
        <br />
        <br />
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle className="h2">Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </CardText>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <br />
        <h2>
          Add:{add(1, 2)}, Subtract:{subtract(9, 3)}
        </h2>
      </div>
    </>
  );
};

export default Landing;
