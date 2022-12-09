//css
import styles from "../global-styles/style.module.css";
//components
import Csr from "./csr";
//cards
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Landing = () => {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <div className={styles.nav_heading}>
          <h1>TurboRepo 112 111</h1>
        </div>
        <ul className={styles.nav_ulist}>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.mainContent}>
        <h2>Lorem Ipsum</h2>
        <p className={styles.para}>
          Libraries can prevent waterfalls by offering a more centralized way to
          do data fetching. For example, Relay solves this problem by moving the
          information about the data a component needs to statically analyzable
          fragments, which later get composed into a single query. On this page,
          we don’t assume knowledge of Relay, so we won’t be using it for this
          example. Instead, we’ll write something similar manually by combining
          our data fetching methods are:
        </p>
        <br />
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <br />
        <Csr />
      </div>
    </>
  );
};

export default Landing;
