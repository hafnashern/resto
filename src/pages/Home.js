import { prettyFormat } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'  //import axios
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Home() {
  //for storing data,create a state
  const [restaurants, setRestaurants] = useState([])


  // fuction forapi call whwre we want
  const getAllRestaurant = async () => {
    const result = await axios.get('/restaurants.json')  //const result=variable
    setRestaurants(result.data.restaurants);  //this data we need in html page,so it can be stored by creating a state.
  }

  useEffect(() => {
    getAllRestaurant()
  }, [])

  console.log(restaurants);


  return (

    <div>
      <Row>
        <Col lg={4} xs={12} md={6} sm={6} className='p-5 '>
      <Container>
          <h1 className='m-3 text-danger'>WelcomeHome<span className='text-white'>!</span></h1>
          <p className='m-3 fs-4 w-100'>Here,ancient customs and future trends coexist, and the intricacies of African culture blend seamlessly together over an Ethiopian-brewed coffee, or a bowl of Senegalese black-eyed pea stew and a side of spicy Ghanaian plantains. </p>
       </Container>
        </Col>

      </Row>
      <hr />
      <Container>
        <Row>
          {
            restaurants.length > 0 ? restaurants.map(i =>
              <Col xs={12} lg={4} md={6} sm={6}>
                <Container>
                <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '80%', height: '500px' }} className=' container mt-5 mb-3 bg-black  '>
                  <Card.Img className='mt-2'
                    style={{ height: '400px' }}
                    variant="top" src={i.photograph} />
                  <Card.Body>
                    <Card.Title className='text-center '>{i.name}</Card.Title>
                    <Card.Text className='text-danger'>Address :{i.address}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
                </Container>
              </Col>
            ) : <h1>No Data Present</h1>
          }
        </Row>
      </Container>
    </div>
  )
}

export default Home