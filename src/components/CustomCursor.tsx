'use client'; 
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x:0, y:0 }); 

    useEffect(() => {
        const move = (e:MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY})
        };
        window.addEventListener('mousemove',move);
        return()=> window.removeEventListener('mousemove', move)
    },[])
    return(
        <div
        className="pointer-events-none fixed rounded-sm-full top-0 left-0 z-50 h-50 w-50 bg-background-400/20 dark:bg-accent-400/20 blur-xl mix-blend-difference shadow-[0_0_30px_rgba(255,165,0,0.15)] transition-transform duration-75 ease-out will-change-transform"
        style={{transform: `translate3d(${pos.x -40}px, ${pos.y -40}px, 0)`,}}/>
    )
}


// useState - like a notepad where you store and update things 
// useEffect - run a side task after the page loads, like setting up a camera 
// export default is creating a component called xyz, re-usable 
// line 4 is making a little box called pos that stores two numbers (axis)
// setPos is the position the pen to write in the box e.g 
// [] means only run once when the component mounts, not every update 
// const move is a listener functon, runs everytime the mouse moves 
// e.clientX etc is the real time position of the mouse on screen 
// window.addEventListener(mousemove,move); is a watcher to the browser, and listens for movements and calls the move function 
// return()+> window.removeEventListener('mousemove etc) cleans up the lisener when the component goes way, no memory leaks 
