import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageGlossary = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to sort posts alphabetically by title
  const sortPostsAlphabetically = (filteredPosts) => {
    return filteredPosts.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  };

  // Function to get unique letters from post titles
  const getUniqueLetters = () => {
    const letters = new Set();
    posts.forEach(post => {
      const firstLetter = post.title.charAt(0).toUpperCase();
      letters.add(firstLetter);
    });
    return [...letters].sort();
  };

  return (
    <>
      <div className='dashBoardNav p-3'>
        <div className='addedGlossaryCont p-4'>
          <div className='items'>
            {getUniqueLetters().map(letter => {
              const filteredPosts = posts.filter(post => post.title.charAt(0).toUpperCase() === letter);
              if (filteredPosts.length > 0) {
                return (
                  <React.Fragment key={letter}>
                    <h4 className='fs-2 fw-bold text-white'>{letter}</h4>
                    <Table className='table table-full-width' size="xl" striped bordered hover>
                      <thead>
                        <tr>
                          <th>Glossary Title</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortPostsAlphabetically(filteredPosts).map(post => (
                          <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                              <button className='delbg border-0' onClick={handleDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </React.Fragment>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header className='listBg d-block pt-5'>
          <Modal.Title className=' text-center text-white'>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body className='listBg text-center text-white'>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer className='listBg  d-flex justify-content-center pb-5'>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleCloseModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ManageGlossary;
