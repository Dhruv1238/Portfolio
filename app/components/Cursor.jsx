import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    const { theme } = useTheme();

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('h1');
        const buttons = document.querySelectorAll('button');
        const cursorText = document.querySelector('.cursor-text');

        const onMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            gsap.to(cursor, {
                x,
                y,
                duration: 0.1
            });
        }

        const onMouseEnterLink = (e) => {
            const link = e.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, { scale: 4 });
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor, { scale: 4 });
                cursorText.style.display = 'none';
            }
        }

        const onMouseLeaveLink = (e) => {
            gsap.to(cursor, { scale: 1 });
            cursorText.style.display = 'none';
        }

        document.addEventListener('mousemove', onMouseMove);
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });
        buttons.forEach(button => {
            button.addEventListener('mouseenter', onMouseEnterLink);
            button.addEventListener('mouseleave', onMouseLeaveLink);
        });
    })


    return (
        <>
            <div id='custom-cursor' className="custom-cursor lg:flex">
                <span className='cursor-text '></span>
            </div>
        </>
    )
}

export default Cursor;