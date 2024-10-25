import * as React from "react";
import Header_image from "../../Public/img/LOGO.png";

const ColoredLine = ({ color, height }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: height
    }}
  />
);

function Home() {
  return (
    <div>
      <div className="jumbotron text-center rounded">
        <h1>T-DASH HOME</h1>
        <p>Automated testing tool</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="card-header">
                Featured
              </div>
              <div className="bg-white">
                <img src={Header_image} height="70" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-primary">Read more</a>
              </div>
            </div>
            <ColoredLine color="blue" height={3} />
          </div>
          <div className="col-sm-8">
            <h2>TITLE HEADING</h2>
            <h5>Title description</h5>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <ColoredLine color="blue" height={3} />
            <h2>TITLE HEADING</h2>
            <h5>Title description</h5>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
