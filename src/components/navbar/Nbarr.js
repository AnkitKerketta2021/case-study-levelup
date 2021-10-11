import logo from '../navbar/logo.jpg'
import React, { useState } from 'react'
import '../navbar/Nbrr.css'
import { Nav, Navbar, Container, InputGroup, FormControl, Form, Button, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'


function NavBar(props) {

  const NavigateToHomePage = () => {
    props.history.push('/')

  }
  const NavigateToSearchPage = () => {
    props.history.push('/search')

  }

  const [searchQuestionError, setsearchQuestionError] = useState('')

  const [question, setquestion] = useState('')
  const getTheQuestion = (event) => {
    setquestion(event.target.value)

  }

  const validateTheSearchQuestion = () => {
    if (question) {
      setsearchQuestionError('')
      return NavigateToSearchPage();
    } else {
      setsearchQuestionError('Please enter a question!');
    }
    return false;
  }


  return (
    <div id="navBar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container id='main-div' fluid>


          <Navbar.Brand className="logo" >
            <img src={logo}
              onClick={() => { NavigateToHomePage() }}
              className="image" height='45px' width='180px' alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="g-4">

              <Nav className="me-auto">
                <Row className='' id="roww">
                  <Col md={2}>

                    <div className='mt-2'  >
                      <Form.Select aria-label="Default select"
                        variant="" className="technology"   >
                        <option>Technology</option>
                        <option value="Reactjs">React js</option>
                        <option value="Angular">Angular</option>
                        <option value="Python">Python</option>
                        <option value="Vuejs">Vue js</option>
                        <option value="Javascript">JavaScript</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className='Linktech mt-2'>
                      <Form.Select aria-label="Default select"
                        variant=""
                        className="linksize" >
                        <option>Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                      </Form.Select>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="formdate mt-2">
                      <Form.Control type="text" name="date-of-birth" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "From Date"} placeholder="From Date" />

                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="todate mt-2">
                      <Form.Control type="text" name="date-of-birth" onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "From Date"} placeholder="To Date" />

                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="mt-2">
                      <InputGroup>

                        <FormControl type="text" placeholder="Search..." aria-label='Search' className='search'
                          onChange={(event) => { getTheQuestion(event) }}
                          value={question}
                        />
                      </InputGroup>
                    </div>
                    <small>{searchQuestionError}</small>
                  </Col>

                  <Col md={1} >
                    <div className="searchBtn mt-2" >

                      <Button onClick={()=>{validateTheSearchQuestion()}} style={{ color: "#fff", width: "100%" }} className="btn btn-warning">
                        Search</Button>
                    </div>
                  </Col>

                </Row>
              </Nav>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default withRouter(NavBar)


