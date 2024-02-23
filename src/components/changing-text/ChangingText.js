import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


export default function ChangingText({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <SwitchTransition>
        <CSSTransition
          key={currentIndex}
          classNames="fade"
          timeout={300}
        >
            <span className="changing-text__item">
                <>
                </>
                {texts[currentIndex]}
            </span>
        </CSSTransition>
    </SwitchTransition>
  );
}
