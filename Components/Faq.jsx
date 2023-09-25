"use client"
import React from 'react';
import { useState, useCallback } from 'react';
import Image from 'next/image';

function Faq() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);

  const handleToggleAnswer1 = useCallback(() => {
    setShowAnswer1(!showAnswer1);
  }, [showAnswer1]);

  const handleToggleAnswer2 = useCallback(() => {
    setShowAnswer2(!showAnswer2);
  }, [showAnswer2]);

  const handleToggleAnswer3 = useCallback(() => {
    setShowAnswer3(!showAnswer3);
  }, [showAnswer3]);

  const handleToggleAnswer4 = useCallback(() => {
    setShowAnswer4(!showAnswer4);
  }, [showAnswer4]);

  const handleToggleAnswer5 = useCallback(() => {
    setShowAnswer5(!showAnswer5);
  }, [showAnswer5]);

  const handleToggleAnswer6 = useCallback(() => {
    setShowAnswer6(!showAnswer6);
  }, [showAnswer6]);

  return (
    <div className="my-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8 text-third">Frequently Asked Questions</h2>
      <div className="w-full h-full pl-20 sm:pl-10">
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer1}>
            {showAnswer1 ? '-' : '+'}
          </button>
          <h3 className="text-lg font-medium">What type of content can I find on TechTrove?</h3>
        </div>
        {showAnswer1 && (
          <p className="text-gray-600 mb-4">
            TechTrove is a technology blog and resources website where you can find articles, tutorials, and reviews on
            various topics such as programming, web development, cybersecurity, artificial intelligence, and more.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer2}>
            {showAnswer2 ? '-' : '+'}
          </button>
          <h3 className="text-lg font-medium">Are all of the resources and articles on TechTrove free to access?</h3>
        </div>
        {showAnswer2 && (
          <p className="text-gray-600 mb-4">
            Yes, all of our resources and articles are completely free to access and use. We believe that knowledge should
            be accessible to everyone.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer3}>
            {showAnswer3 ? '-' : '+'}
          </button>
          <h3 className="text-lg font-medium">How often do you publish new articles?</h3>
        </div>
        {showAnswer3 && (
          <p className="text-gray-600 mb-4">
            We publish new articles on a regular basis, typically a few times a week. Check back frequently for new
            content
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer4}>
            {showAnswer4 ? '-' : '+'}
          </button>
          <h3 className="text-lg font-medium">Can I suggest a topic for an article or tutorial?</h3>
        </div>
        {showAnswer4 && (
          <p className="text-gray-600 mb-4">
            Yes, we welcome suggestions for new topics and articles. Please contact us with your ideas, and we ll do our
            best to cover them.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer5}>
            {showAnswer5 ? '-' : '+'}
          </button>
          <h3 className="text-lg font-medium">How can I submit feedback or report a problem with the website?</h3>
        </div>
        {showAnswer5 && (
          <p className="text-gray-600 mb-4">
            You can use our contact page to submit feedback or report any problems you encounter on our website. We value
            your feedback and will do our best to address any issues you may have.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer6}>
            {showAnswer6 ? '-' : '+'}
          </button>
          <h3 className="text-lg font-medium">How can I support TechTrove?</h3>
        </div>
        {showAnswer6 && (
          <p className="text-gray-600 mb-4">
            The best way to support us is to share our content on social media and with your friends and colleagues. You
            can also sign up for our newsletter and follow us on social media to stay up-to-date with our latest content.
          </p>
        )}
      </div>
     
    </div>
  );
}

export default React.memo(Faq);
