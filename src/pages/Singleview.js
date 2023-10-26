import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operating from '../components/Operating';
import Reviews from '../components/Reviews';




function Singleview() {

  const [restaurants, setRestaurants] = useState([])

  //object creted for useparams hook
  const param = useParams()
  // var id=param.id    
  var { id } = param      //called destructuring.

  //function for api
  const getAllrest = async () => {
    const result = await axios.get('/restaurants.json')
    setRestaurants(result.data.restaurants);
  }

  //when we gwt the param?-copnent opens or starts
  useEffect(() => {
    getAllrest()
  }, [])

  console.log(id);
  console.log(restaurants);

  //find single restrnt
  const singlerest = restaurants.find(i => i.id == id)
  console.log(singlerest);




  return (
    <div>
      {
        singlerest ?
          <Row>

            <Col lg={6} sm={6} xs={12} md={12} className='p-5 mt-3 ms-5 mb-3'>
              <img style={{ height: '500px', width: '60%' }}
                src={singlerest.photograph} alt="" />
            </Col>
            <Col className='text-start'>

              <h1 className='text-center text-danger'>{singlerest.name}</h1>
              <Container>

                <ListGroup className='me-5 pe-5'>

                  <ListGroup.Item className='mt-4 '>

                    <span className='text-danger me-5'>Address </span>{singlerest.address}
                  </ListGroup.Item>
                  <ListGroup.Item className='mt-4'>
                    <span className='text-danger me-5'>Cuisine type </span>{singlerest.cuisine_type}

                  </ListGroup.Item>
                  <ListGroup.Item className='mt-4'>
                    <span className='text-danger me-5'>Neighborhood </span>{singlerest.neighborhood}
                  </ListGroup.Item>

                  <ListGroup.Item className='mt-4'>
                    <Operating operatingData={singlerest.operating_hours}></Operating>
                  </ListGroup.Item>

                  <ListGroup.Item className='mt-4'>
                    <Reviews reviews={singlerest.reviews}></Reviews>

                  </ListGroup.Item>

                </ListGroup>
              </Container>




            </Col>


          </Row>
          :
          <Row>
            <h1>no data</h1>
          </Row>


      }

    </div>
  )
}

export default Singleview