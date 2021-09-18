import React from 'react';
import { Card, Col, Row, Container, FormControl, Button, Form, InputGroup, FloatingLabel} from 'react-bootstrap';
import comp_logo from '../Cards/company_logo.png';
import './MyApplication.css';
import { Link } from 'react-router-dom';

{/*
    The required components are fetchd from react-bootstrap library above. 
    This components is responsible for rendering a page that more details of the internship to the candidate.
    The Candidate can fill in the required infoemnation in the form and submit their application for the internship.
*/}



function MyApplication() {
  return (
    <>
        
        <Container>

        
        <Form>
{/*   
    The first Row component contains the content of the first block of the page which gives the 
    detailed information about the internship to the candidate.
    Points covered:

    > Internship/Job Profile Title    
    > Internship company name
    > About the company 
    > About the job/internship
    > Eligibility and Skills required
    > Preks
    > Number of openings 
     
    After that a button is provided which links back to the main internship catalouge page.

*/}
        <Row className="FirstBlock">

            <Card border="info" xs={1} md={2} className="FirstCard">
                  
                    <Card.Title>Internship details</Card.Title>
                    <hr/>
                    <Row>
                    <Card.Body>
                          <Card.Title>Internship/Job Profile Title  
                          <img className="company_logos" src={comp_logo}></img>                                                    
                          <h4 classname="Company_name">
                            Internship company name
                          </h4>     
                          </Card.Title>  

                          <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Donec vel mi ac velit consequat lacinia nec et tellus.
                           Aliquam suscipit sem ut eros pulvinar auctor. 
                          </Card.Text>
                          <br/>
                          


                          <h5>About the company </h5>
                          <Card.Text>
                          Duis quis nisi dapibus, blandit nunc eu, tempus quam. 
                          Proin sit amet nibh venenatis, placerat velit sed, rutrum mi. 
                          Aenean sagittis a leo quis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                          Mauris ut diam non mi mattis ultricies. Morbi vel sollicitudin turpis. 
                          </Card.Text>
                          
                          <h5>About the job/internship </h5>
                          <Card.Text>
                            <ul>
                                <li>Mauris ut diam non mi mattis ultricies. Morbi vel sollicitudin turpis. </li>
                                <li>Duis quis nisi dapibus, blandit nunc eu, tempus quam. </li>
                                <li>Proin sit amet nibh venenatis, placerat velit sed, rutrum mi.</li>                                
                            </ul>                      
                          </Card.Text>

                          <h5>Eligibility and Skills required</h5>
                          <Card.Text>
                          <ol>
                                <li>Mauris ut diam non mi mattis ultricies. Morbi vel sollicitudin turpis. </li>
                                <li>Proin id finibus risus. Quisque non pretium lorem</li>
                                <li>Suspendisse potenti. </li>
                                <li>Mauris non feugiat arcu.</li>
                                                             
                            </ol>   
                          </Card.Text>
                        
                          <h5> Perks </h5>  
                          <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Donec vel mi ac velit consequat lacinia nec et tellus.
                           Aliquam suscipit sem ut eros pulvinar auctor. 
                          </Card.Text>
                          <br/>

                          <h5> Number of openings </h5>  
                          <Card.Text>
                          5
                          </Card.Text>
                          <br/>


                          <Link to="/">
                          <button class="apply_button"><span>Back </span></button>
                          </Link>
                          
                    </Card.Body>
                </Row>
            </Card> 
        </Row>


        <Row>

{/*   
    The second Row component contains the form which has important field for the candidate to apply for the internship.

    Input Fields:

    > Full Name 
    > Email Id
    > 3 questions that can be asked by the internship providing company
    > LinkedIn profile URL
    > Github profile url:
    > Additional URLs of your previous work
    > The candidate can upload their own resume as a file
     
    After that a submit which enables the candidate to submit their application
    The button links back to the main internship catalouge page.


*/}
        
            
            <Card border="info" xs={1} md={2} className="filtercard">
                <Card.Body>
                  <Card.Title>My Application</Card.Title>
                    <Row className="SecondCard">
                        <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3 "                                
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                                controlId="floatingInput"
                                label="Full Name"
                                className="mb-3"
                        >
                            <Form.Control placeholder="Amit Thakur" />
                        </FloatingLabel>
                        
                        <br/>
                        <Col>
                        <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
                        <br />
                        </Col>
                        
                        <br/>

                        <h6>Question 1 : Ut id nibh bibendum, fermentum turpis eu, tristique augue ? </h6>
                        <FloatingLabel className="mb-3" controlId="floatingTextarea1" label="Your answer">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            
                            />
                        </FloatingLabel>
                        <br />

                        <h6>Question 2: Integer at sem malesuada, finibus dui eget, vestibulum lacus.? </h6>
                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Your answer">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                           
                            />
                        </FloatingLabel>
                        <br />
                        <h6>Question 3: Ut fringilla elit erat, non dictum ante bibendum id ? </h6>
                        <FloatingLabel className="mb-3" controlId="floatingTextarea3" label="Your answer">
                            <Form.Control
                            as="textarea"                            
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>LinkedIn profile url: *</Form.Label>
                            <Form.Control type="" placeholder="Enter URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Github profile url:</Form.Label>
                            <Form.Control type="" placeholder="Enter URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Additional URLs of your previous work:</Form.Label>
                            <Form.Control type="" placeholder="Enter URL" />
                        </Form.Group>

                        
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label><p> Upload your resume here</p></Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                    </Row> 
                    
                    <br/>  
                    <div className="submit_button">
                        <Link to="/">
                            <button class="apply_button"><span> Submit </span></button>
                        </Link>
                    </div> 
                    

                </Card.Body>                                
            </Card> 
        </Row>
      </Form>
    
    </Container>
    </>
  );
}


export default MyApplication
