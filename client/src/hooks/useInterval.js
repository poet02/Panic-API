import { useEffect, useRef } from "react";

//Source:
//https://levelup.gitconnected.com/how-to-implement-data-polling-with-react-redux-and-thunk-33cd1e47f89c
const UseInterval = ( callback, delay ) => {
    const savedCallback = useRef();

    //Remember latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    //set interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [callback, delay]
    )
  
}

export default UseInterval;