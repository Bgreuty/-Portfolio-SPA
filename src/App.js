//import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './Footer'
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import Button from 'react-bootstrap/Button'



function Jumbo() {
  return (
    <div>


      <Container className="frontend">
        <Row>
          <Col sm={4} lg={2} >
            <figure>
        <img src="./images/BenGreutman.jpg" alt='Me Untuckit' className='beng' />
        <figcaption className="BenG"> Benjamin Greutman   </figcaption>  
        <figcaption className="BenG">Front End Developer </figcaption>
        </figure>
        </Col>
        <Col sm={8}lg={9} className='Welcome'>
        Welcome to my website! My name is Benjamin Greutman and I am a front end web developer. I am experienced in HTML5, CSS3 and JavaScript including modern libraries such as React . Additional languages I am familiar with include SQL and Ruby on Rails.Moreover, I am a graduate from the ScCodes Front End Development Learning Pathway and I am graduate of the University of South Columbia with a major in Business Management and a minor in Applied Computing.
</Col>
       </Row> 
       
      </Container>
    </div>

  );
}



function App() {
  return (
    <div className="App">
      <Jumbo/>
      <Container>
        <Row>
          <Col xs={6}> </Col>
          <Col>

          </Col>
        </Row>
      </Container>


      <h1 className="skillset">

        My Skillsets




</h1>

<p className="bgskill">
  
  Below I explain my approach to web app design, functionality, and maintenance.
  
  </p>

      <Container className='Java'>
        <Row>
          <Col xs={{ order: 'last' }}> < a href='https://www.w3schools.com/sql/default.asp'> <h4>SQL  <AiOutlineConsoleSql></AiOutlineConsoleSql></h4> </a>
          </Col>
          <Col xs={{ order: 'last' }}> <a href='https://www.w3schools.com/css/default.asp'> <h4>CSS  <DiCss3></DiCss3></h4></a>
          </Col>
          <Col xs><a href='https://www.w3schools.com/js/DEFAULT.asp'> <h4>Javascipt<DiJsBadge></DiJsBadge> </h4> </a>
          </Col>
          <Col xs={{ order: 'first' }}><a href="https://reactjs.org/"><h4>React <DiReact></DiReact></h4></a> 
          </Col>
        </Row>
        <Row className='CodingSkills'>
          <Col xs={{ order: 'last' }}>
            I can currently use the database management language
            SQL. SQL stands for sequential query language and is used primarily in relational databases such as Oracle.
 </Col>
          <Col xs={{ order: 'last' }}>I use CSS to style and customize layouts, color schemes, fonts, and overall design.
</Col>
          <Col >

            JavaScript is my base programming language.
            This adds functionality to my websites and apps.
            I have been able to learn React  with this language.
</Col>
          <Col xs={{ order: 'first' }}> The ReactJS library provides a component based development model,
 and simplifies state management with its use of a virtual DOM.</Col>
        </Row>
      </Container>

      <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=greutman123@gmail.com">
    <Button variant="primary" size="lg" className="Button" >
        Contact Me

    </Button>
    </a>


      <h1 className="projects">
        Example Project
</h1>

      <h3 className='camping'> Camping Adventure</h3>
      <p className='multipage'> A multi-page e-commerce website.</p>
      <a href="https://github.com/Bgreuty/Camping-Adventure">

      <img src='images/Campingadventure.jpg' alt='camping adventure' className='Tent'/> </a>



      <Footer > </Footer>
    </div>



  );
}







export default App;
