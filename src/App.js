import "./App.css";
import logo from "./images/logo.png";
import f from "./images/f.png";
import t from "./images/Vector.png";
import v from "./images/Vector.svg";
import m from "./images/path14.svg";
import restangle from "./images/hero image.svg";
import third1 from "./images/third1.svg";
import third2 from "./images/third2.svg";
import third3 from "./images/third3.svg";
import third4 from "./images/third4.svg";
import third5 from "./images/third5.svg";
import ilustra from "./images/illustration.svg";
import future from "./images/features.png";
// 5
import c from "./images/c(2).png";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4.png";
// 6
import six1 from "./images/six1.png";
import six2 from "./images/six2.png";
// 7
import seven from "./images/illustrations.png";
import circle from "./images/circles.png";
// 8
import elips from "./images/Ellipse 2.1.png";
import group from "./images/Group.png";
// 10
import constructor from "./images/content.png";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        {/* Navigator  */}
        <div className="link">
          <img src={logo} alt=""></img>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Documentation</a>
        </div>
        {/* Icons */}
        <div className="icon">
          <img src={f} alt=""></img>
          <img src={t} alt=""></img>
          <img src={v} alt=""></img>
          <img src={m} alt=""></img>
          <button>Get started</button>
        </div>
      </div>
      {/* second */}
      <div className="second">
        <img src={restangle} alt=""></img>
      </div>
      {/* third */}
      <div className="third">
        <img alt="" src={third1}></img>
        <img alt="" src={third2}></img>
        <img alt="" src={third3}></img>
        <img alt="" src={third4}></img>
        <img alt="" src={third5}></img>
      </div>

      {/* four */}
      <div className="four">
        <div className="four-one">
          <span>DESKTOP AND MOBILE APP</span>
          <h3>Plan and manage</h3>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>
          <div>
            <button className="btn">View video ▶️ </button>
            <button className="btn-1">See features</button>
          </div>
        </div>

        {/* ilustrasia */}

        <div className=" four-two">
          <img alt="" src={ilustra}></img>
        </div>
      </div>
      {/* five */}
      <div className="five" style={{ backgroundImage: `url(${future})` }}>
        <div className="five-header">
          <p>ABOUT US</p>
          <span>Read about our app</span>
        </div>
        {/* read about  */}
        <div className="five-component">
          {/* comp1 */}
          <div className="comp1">
            <img alt="" src={c}></img>
            <h4>Overview</h4>
            <p>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
            </p>
          </div>
          {/* comp2 */}
          <div className="comp2">
            <img alt="" src={c2}></img>
            <h4>Files</h4>
            <p>
              No vim nulla vitae intellegat. Ei enim error ius, solet atomorum
              conceptam ex has.
            </p>
          </div>
          {/* comp3 */}
          <div className="comp3">
            <img alt="" src={c3}></img>
            <h4>Meeting chats</h4>
            <p>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
          </div>
          {/* comp4 */}
          <div className="comp4">
            <img alt="" src={c4}></img>
            <h4>Save events</h4>
            <p>Nisl idque mel ea, nominati voluptatum.</p>
          </div>
        </div>
        <div className="btns">
          <button className="btns1">Read more</button>➖ OR ➖
          <button className="btns2">Get started</button>
        </div>
      </div>
      {/* six */}
      <div className="six">
        <div className="six-1">
          <img alt="" src={six1}></img>
          <p>89%</p>
          <div className="six-1-text">
            Customers who have <br></br>increased their productivity
          </div>
        </div>
        <div className="six-2">
          <img alt="" src={six2}></img>
          <h3>3123</h3>
          <div className="six-2-text2">
            Users who have used our<br></br> application
          </div>
        </div>
      </div>
      {/* seven */}
      <div className="seven">
        <div className="seven-title">OUR RESOURCES</div>
        <h3>Start reading our blog</h3>
        {/* seven-body */}
        <div className="s-body-title">
          <i className="arrow">←</i>
          {/* -------- */}
          <div className="seven-body">
            <div className="seven-inside">
              <img alt="" src={seven}></img>
            </div>
            {/* ----------- */}
            <div className="seven-neben">
              <h2>How to start planning</h2>
              <span>
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti. Natum petentium principes mei ea. Tota everti
                periculis vis ei, quas tibique pro at, eos ut decore ...
              </span>
              <div className="sev-btn">
                <button>Read now</button>
                <b>Add to your bookmarks</b>
              </div>
            </div>
            {/* ------------- */}
          </div>
          <i className="arrow1">→</i>
        </div>
        <div className="circle">
          <img alt="" src={circle}></img>
        </div>
      </div>
      {/* eight */}
      <div className="eight">
        {/* 8-1 */}
        <div className="acht-1">
          <div className="acht-title">TESTIMONIALS</div>
          <h3>Customers's quotes</h3>
          <div className="acht-1-text">
            Brute laoreet efficiendi id his, ea illum nonumes <br></br>luptatum
            pro. Usu atqui laudem an.
          </div>
        </div>
        {/* 8-2 */}
        <div className="acht-2">
          <div className="acht-2-text">
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius an, in mel diceret<br></br>{" "}
            persecuti.
          </div>
          <img alt="" className="acht-2-img" src={elips}></img>
          <img alt="" className="acht-2-img2" src={group}></img>
        </div>
        {/* 8-3 */}
        <div className="acht-3">
          <div className="acht-3-text">
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius an, in mel diceret <br></br>
            persecuti.
          </div>
        </div>
      </div>
      {/* nine */}
      <div className="nine">
        <p>Customer help</p>
        <h3>Frequently asked questions</h3>
        <div className="nine-body">
          {/* 1 */}
          <div className="n-first">
            <b style={{ marginRight: "24px" }}>˅</b> Reque insolens in vel?
          </div>
          {/* 2 */}
          <div className="n-second">
            <b style={{ marginRight: "24px" }}>˅</b>Vis rebum error graecis ea,
            id sit postea accusamus?
          </div>
          {/* 3 */}
          <div className="n-third">
            <b style={{ marginRight: "24px" }}>˄</b>
            Lorem repudiandae ne nec?
            <div className="n-third-one">
              <div className="n-child">
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti.
              </div>
              <button>Go to documentation</button>
            </div>
          </div>
          {/* 4 */}
          <div className="n-four">
            <b style={{ marginRight: "24px" }}>˅</b>
            Ad dicit numquam vel. Et eos iudico feugait percipitur?
          </div>
          {/* 5 */}
          <div className="n-five">
            <b style={{ marginRight: "24px" }}>˅</b>
            Sea no dico percipitur. Fierent constituam definitiones id eum?
          </div>
        </div>
      </div>
      {/* ten */}
      <div className="ten" style={{ backgroundImage: `url(${constructor})` }}>
        <span>PLAN YOUR LIFE</span>
        <h3>Get started now</h3>
        <div className="ten-text">
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens <br></br>gubergren similique est cu. Et vel
          modus congue vituperata.
        </div>
        <div className="ten-btns">
          <button className="ten-btn">View pricing</button>
          <button className="ten-btn2">Read documentation</button>
        </div>
      </div>
      {/* footer */}
      <div className="footer">
        <div className="footer-body">
          <div className="footer-text">
            <h3>Sign up for newsletter</h3>
            <div className="footer-text-inside">
              Cu qui soleat partiendo urbanitas. Eum aperiri <br></br>indoctum
              eu, homero alterum.
            </div>
          </div>
          <div className="footer-btns">
            <button className="footer-btn1">Email address</button>
            <button className="footer-btn2">Save me</button>
          </div>
        </div>
      </div>
      <div className="foter">
        <div className="foter-header">
          {/* Navigator  */}
          <div className="link-foter">
            <img src={logo} alt=""></img>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
          </div>
          {/* Icons */}
          <div className="icon-foter">
            <img src={f} alt=""></img>
            <img src={t} alt=""></img>
            <img src={v} alt=""></img>
            <img src={m} alt=""></img>
            <button>Get started</button>
          </div>
        </div>
        <div className="copyRight">Copyright © 2018 by Random site</div>
      </div>
    </div>
  );
}

export default App;
