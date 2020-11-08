import { useEffect, useState } from 'react'

function useScrollPosition() {
    const height = window.document.body.offsetHeight
    const [position, setPosition] = useState();

    useEffect(() => {
        function handleScroll() {
            if (window.document.body.offsetHeight < height) {
                setPosition(window.pageYOffset);
            }
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return position;
}

export default useScrollPosition
