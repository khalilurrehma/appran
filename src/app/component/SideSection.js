"use client";
import React, { useState, useEffect } from 'react';

const SideSection = () => {
  const [featuredTerms, setFeaturedTerms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const randomItems = selectRandomItems(data, 4);
        setFeaturedTerms(randomItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const selectRandomItems = (array, count) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  };

  return (
    <>
      <h6 className='text-white fs-4 fw-bold mt-xl-5 mt-lg-5 mt-md-3'>Featured Terms</h6>
      <div className="sideBg">
        {featuredTerms.map((term) => (
          <div key={term.id} className='itemsBorder'>
            <h6 className='textGradient fs-5 fw-bold mb-2'>{term.title}</h6>
            <p className='fs-6 fw-regular text-white'>{term.body}</p>
            <a className='textGradient fs-6 fw-semibold text-decoration-none' href={`/detailsPage/${term.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideSection;
