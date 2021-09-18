import React from 'react';
import { Card, Col, Row, Container, Button, Form } from 'react-bootstrap/';
import '../index.css';
import './Cards_Component.css'

import Navbar from '../Navbar';
import comp_logo from './company_logo.png'
import { BiSearchAlt } from "react-icons/bi";

import { Link } from 'react-router-dom';

{/*
    The required components are fetched from react-bootstrap library above. 
    This components is responsible for rendering a page that more details of the internship to the candidate.
    The Candidate can fill in the required infoemnation in the form and submit their application for the internship.
*/}


const CardComponent = () => {
    return (
        <>
        {/*
        The Navbar component is rendered here and that is the first component to show up on the main site.
*/}
        <Navbar></Navbar>

        <div className="cards">            
            <br/>
            <Container fluid>
            <Row>

            {/*
            The first Row component acts as a filter for search where there are different field related to internships. 
            *The filters are not functional as of now as this is just a front-end project.*
            
            The considered fields are: 
            > Category
            > Location
            > Start Date
            > Duration
            > An option to save preferences 
            > Keyword search

            This is followed by a search button which again is not fuctional as of now.
*/}

            <Card border="info" xs={1} md={2} className="filtercard ">
                  <Card.Body>
                    
                    <Row>
                    
                    <Col md="auto" className="searchfield">
                          <h6>Category</h6>
                          <Form.Control placeholder="eg. Web development" />
                    </Col>
                    <Col md="auto" className="searchfield">
                          <h6>Location</h6>
                          <Form.Control placeholder="eg. Mumbai" />
                    </Col>
                    <Col md="auto" className="searchfield">
                          <h6>Choose start date</h6>
                          <Form.Control type="date" name='date_of_birth' />
                    </Col>
                    <Col md="auto" className="searchfield">
                        <Form.Group as={Col} controlId="formGridState">
                          <h6>Choose duration</h6>
                              <Form.Select>
                                <option>1 month</option>
                                <option>2 months</option>
                                <option>3 months</option>
                                <option>4 months</option>
                                <option>6 months</option>
                                <option>12 months or higher</option>
                              </Form.Select>
                        </Form.Group>


                    </Col>
                    <Col md="auto" className="searchfield">
                    <Form.Check 
                          type="switch"
                          id="custom-switch"
                          label="Work from home"
                    />
                    <Form.Check 
                          type="switch"
                          id="custom-switch"
                          label="Part-time"
                    />
                    </Col>
                    <Col md="auto" className="searchfield">
                    <Form.Group className="mb-3 searchbar" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Show internship" /> <em>as per my preferences</em>
                    </Form.Group>
                    </Col>
                     
                    <Col md="auto" className="searchfield">
                    <br />
                    <h6>OR</h6>
                    </Col>
                    <Col md="auto" className="searchfield">
                    <br/>
                    <h6>Search by keyword</h6>
                    <Form.Control placeholder="eg. Web development" /> 
                    </Col>
                    <Col md="auto" className="searchfield">
                    <br />
                      <Button variant="outline-primary" className="searchiconbar">
                      Search
                      <BiSearchAlt className="searchicon"></BiSearchAlt>
                      </Button>
                    </Col>
                  </Row>                   
                  </Card.Body>
                                
                </Card> 
            </Row>
          {/*
            The second Row component helps us to dispay the adequate information regarding the internship.
            If the candidate is interested he/she can click on Apply Now button and proceed to the next page 
            that is the MyApplication component.
            *
            The internship titles, internship company name, company logo and internship short description are
            hard  coded for this project but that can be easily changed using an array and mapping over as done below. 
            The cards are not functional as of now as this is just a front-end project.*
    
*/}
            <Row >
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col md="auto" >
                    <Card className="cards internship_cards">
                        <Card.Body>
                          <Card.Title>Internship Title  
                          <img className="company_logos" src={comp_logo}></img>                                                    
                          <h5 classname="Company_name">
                            Internship company name
                          </h5>     
                          </Card.Title>                                                            
                          <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Donec vel mi ac velit consequat lacinia nec et tellus. Aliquam suscipit sem ut eros pulvinar auctor. 
                          </Card.Text>
                          
                          <Link to="/application">
                          <button class="apply_button"><span>Apply Now </span></button>
                          </Link>
                          
                        </Card.Body>
                      </Card>
                  </Col>
                  ))}
            </Row>        
          </Container>
            
        </div>
      </>
    );
};

export default CardComponent;

