import React, { useEffect, useState } from 'react';
import './homeproductbanner.css';
import { useSpring, animated } from '@react-spring/web';

export default function Homeproductbanner() {

    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollTop = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            if (currentScrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else if (currentScrollTop < lastScrollTop) {
                setScrollDirection('up');
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`container ${scrollDirection}`}>
                <div className="masked-text">Scroll to Animate Me</div>
            </div>
        </>
    )
}
