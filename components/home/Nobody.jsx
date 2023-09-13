import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Nobody = () => {
  const txtRef = useRef(null);
  const wheelRef = useRef(null);

  const select = (e) => document.querySelector(e);

  const fontSize = gsap.getProperty(':root', '--fontSize');
  const numLines = 20;
  const radius = (fontSize / 2) / Math.sin((180 / numLines) * (Math.PI / 180));
  const angle = 360 / numLines;
  const origin = `50% 50% -${radius}px`;

  useEffect(() => {
    const mySplitText = new SplitText(txtRef.current, {
      type: 'chars',
      charsClass: 'char',
      position: 'absolute',
    });

    function cloneTxt() {
      for (let i = 0; i < numLines - 1; i++) {
        const clone = txtRef.current.cloneNode(true);
        wheelRef.current.appendChild(clone);
      }
    }

    function positionTxt() {
      gsap.set('.txt', {
        rotationX: function (index) {
          return angle * index;
        },
        z: radius,
        transformOrigin: origin,
      });
    }

    cloneTxt();
    positionTxt();

    gsap.set('.container', { autoAlpha: 1 });

    const charEase = 'power4.inOut';
    const gtl = gsap.timeline({
      defaults: {
        ease: 'power2.inOut',
        duration: 3,
      },
      repeat: -1,
    });

    gtl.to(wheelRef.current, {
      rotationX: -(360 / (numLines / 5)),
      transformOrigin: '50% 50%',
    })
      .to('.char:nth-of-type(even)', {
        rotationX: (360 / numLines),
        transformOrigin: origin,
        duration: 2,
      }, '-=1')
      // Add other animations here...

    gtl.timeScale(3);

    // Cleanup function
    return () => {
      // Cancel any animations or clean up resources if needed
    };
  }, [radius, angle, origin, numLines]);

  return (
    <div>
      {/* Your JSX here */}
      <div className="txt" ref={txtRef}>
        {/* Your text content */}
      </div>
      <div className="wheel" ref={wheelRef}></div>
    </div>
  );
};

export default Nobody;
