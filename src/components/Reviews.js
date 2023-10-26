import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviews}) {
  return (
    <div>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='text-danger fs-5'>Reviews</span></Accordion.Header>
        <Accordion.Body>
          {
            reviews?reviews.map(i=>(

              <div className='border'>
                <i>name : {i.name}</i>
                <br />
                <i>date : {i.date}</i>
                <br />
                <i>rating : {i.rating}</i>
                <br />
                <i>comments : {i.comments}</i>

              </div>

            )
            ):
            <h1>no data</h1>
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
  )
}

export default Reviews