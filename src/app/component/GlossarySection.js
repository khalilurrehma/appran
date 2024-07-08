"use client";

import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

const GlossarySection = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLetter, setActiveLetter] = useState('A');
  const [accordionContent, setAccordionContent] = useState({});

  const handleScroll = () => {
    const pageGlossaryContentNav = document.querySelector('.page-glossary_content--nav');
    if (pageGlossaryContentNav) {
      const rect = pageGlossaryContentNav.getBoundingClientRect();
      setIsFixed(rect.top <= 0);
    }
  };

  const scrollToLetter = (letter, event) => {
    event.preventDefault();
    setActiveLetter(letter);
    const element = document.getElementById(letter);
    const glossaryItems = document.querySelector('.glossaryItems');
    if (element && glossaryItems) {
      if (isFixed) {
        glossaryItems.scrollTop = element.offsetTop - glossaryItems.offsetTop;
      } else {
        const pageGlossaryContentNav = document.querySelector('.page-glossary_content--nav');
        if (pageGlossaryContentNav) {
          pageGlossaryContentNav.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            glossaryItems.scrollTop = element.offsetTop - glossaryItems.offsetTop;
          }, 300);
        }
      }
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.reduce((acc, item) => {
          const firstLetter = item.title.charAt(0).toUpperCase();
          if (!acc[firstLetter]) {
            acc[firstLetter] = [];
          }
          acc[firstLetter].push(item);
          return acc;
        }, {});

        const alphabet = Array.from(Array(26)).map((_, index) => String.fromCharCode(65 + index));
        const completeAccordionContent = Object.assign({}, formattedData);
        alphabet.forEach(letter => {
          if (!completeAccordionContent[letter]) {
            completeAccordionContent[letter] = [];
          }
        });

        const sortedKeys = Object.keys(completeAccordionContent).sort();
        const sortedAccordionContent = {};
        sortedKeys.forEach(key => {
          sortedAccordionContent[key] = completeAccordionContent[key];
        });

        setAccordionContent(sortedAccordionContent);
      })
      .catch(error => console.error('Error fetching data:', error));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='glossaryCont'>
      <div className={`page-glossary_content--nav sticky-position ${isFixed ? 'fixed' : ''}`}>
        <div className="">
          <div className="engLet">
            {Array.from(Array(26)).map((_, index) => {
              const letter = String.fromCharCode(65 + index); 
              return (
                <a key={index} href="#" data-letter={letter} title={letter} onClick={(event) => scrollToLetter(letter, event)} className={activeLetter === letter ? 'active' : ''}>
                  {letter}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className='glossaryItems'>
        {Object.keys(accordionContent).map((key, index) => {
          const items = accordionContent[key];
          return (
            <div key={index} id={key} style={{ paddingTop: '15px' }}>
              <h4 className='text-white fs-3 fw-bold'>{key}</h4>
              <div>
                <Accordion defaultActiveKey="0" className='accordion-container'>
                  {items.map((item, i) => (
                    <Accordion.Item key={i} eventKey={i.toString()} className='accordion-item headerCont'>
                      <Accordion.Header className='header'>{item.title}</Accordion.Header>
                      <Accordion.Body className='accordion-item-body'>
                        {item.body}
                        <div className='clearfix'></div>
                        <Link
                          href={{
                            pathname: `/glossary-details/${item.id}`, 
                            state: { itemData: item }, 
                          }}
                          className='mt-3 d-flex'
                        >
                          Read more
                        </Link>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlossarySection;
