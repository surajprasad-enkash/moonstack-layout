import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion'

const StickyCursor = ({ stickyElements }: { stickyElements: React.RefObject<HTMLElement>[] }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
    const cursorSize = isHovered ? 60 : 10

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const smoothOptions = {
        damping: 20,
        stiffness: 300,
        mass: 0.5
    }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        if (isHovered && hoveredElement) {
            const { left, top, width, height } = hoveredElement.getBoundingClientRect();
            const center = {
                x: left + width / 2,
                y: top + height / 2
            };

            mouse.x.set(center.x - cursorSize / 2);
            mouse.y.set(center.y - cursorSize / 2);
        } else {
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
    };

    const manageMouseOver = (el: HTMLElement) => () => {
        setHoveredElement(el);
        setIsHovered(true);
    };

    const manageMouseLeave = () => {
        setHoveredElement(null);
        setIsHovered(false);
    };


    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);

        const elements = stickyElements.map(ref => ref.current).filter(Boolean) as HTMLElement[];
        elements.forEach((el) => {
            el.addEventListener('mouseover', manageMouseOver(el));
            el.addEventListener('mouseleave', manageMouseLeave);
        });
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
            elements.forEach((el) => {
                el.removeEventListener('mouseover', manageMouseOver(el));
                el.removeEventListener('mouseleave', manageMouseLeave);
            });
        }
    }, [stickyElements])

    return (
        <>
            <motion.div className={`sticky-cursor ${isHovered && '-translate-5'}`} style={{ left: smoothMouse.x, top: smoothMouse.y }}
                animate={{ width: cursorSize, height: cursorSize }}>

            </motion.div>
        </>
    )
}

export default StickyCursor;