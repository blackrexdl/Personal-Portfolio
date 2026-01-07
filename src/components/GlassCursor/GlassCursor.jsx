import { useEffect, useRef } from "react";
import "./GlassCursor.css";

const GlassCursor = () => {
  const cursorRef = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    let trail1X = 0;
    let trail1Y = 0;

    let trail2X = 0;
    let trail2Y = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const follow = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;

      trail1X += (cursorX - trail1X) * 0.08;
      trail1Y += (cursorY - trail1Y) * 0.08;

      trail2X += (trail1X - trail2X) * 0.08;
      trail2Y += (trail1Y - trail2Y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      if (trail1Ref.current) {
        trail1Ref.current.style.transform = `translate3d(${trail1X}px, ${trail1Y}px, 0)`;
      }
      if (trail2Ref.current) {
        trail2Ref.current.style.transform = `translate3d(${trail2X}px, ${trail2Y}px, 0)`;
      }

      requestAnimationFrame(follow);
    };

    const addHover = () => cursorRef.current?.classList.add("active");
    const removeHover = () => cursorRef.current?.classList.remove("active");

    document.querySelectorAll("a, button, .card, .magnetic").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);
    follow();

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .card, .magnetic").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="glass-cursor" />
      <div ref={trail1Ref} className="glass-trail t1" />
      <div ref={trail2Ref} className="glass-trail t2" />
    </>
  );
};

export default GlassCursor;