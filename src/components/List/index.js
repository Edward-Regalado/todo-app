import '../../assets/styles/list.css';
import React, { useState } from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { Container, ButtonDelete, ButtonComplete, ButtonFalse } from './ListElements';
import ReactPaginate from 'react-paginate';

function List(props) {

  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = props.list
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => {
      return (
        <Card className='list-card' key={item.id} aria-label="list-item" style={{ width: '40em', marginBottom: '1em' }}>
              <Card.Body>
                  <Card.Title className='card-title'>
                  {item.complete === false ? (
                    <ButtonFalse onClick={() => props.toggleComplete(item.id)}>{item.complete.toString()}</ButtonFalse>
                  ) : <ButtonComplete>Complete</ButtonComplete>}
                    <span style={{paddingLeft: '10px'}}>{item.assignee}</span>
                  </Card.Title>
                <ListGroup>
                  <ListGroup.Item
                  className='list-item' 
                  variant='dark' 
                  as='li' 
                  // className='d-flex justify-content-between align-items-start'
                  >
                    <h4>{item.text}</h4>
                    <h4>Difficulty: {item.difficulty}</h4>
                  </ListGroup.Item>
                </ListGroup>
                  {/* <Button onClick={() => props.deleteItem(item.id)}></Button> */}
                  <ButtonDelete onClick={() => props.deleteItem(item.id)}>Delete</ButtonDelete>
              </Card.Body>
        </Card>
      );
    });

    const pageCount = Math.ceil(props.list.length / itemsPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return (
    <Container>
      {props.list.length > 0 ?
      <>
        {displayItems}
        <ReactPaginate 
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
        />
      </> 
      : null}
    </Container>
  );
}

export default List;