import { useState, useEffect, useRef } from "react";

const useScrollFade = (threshold = 0.2, once = true) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setVisible(false); // reset if element scrolls out of view
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
}

export default useScrollFade;