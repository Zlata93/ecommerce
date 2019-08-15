import { useEffect } from 'react';
import { handleNoHover } from '../utils/helpers';

const useNoHover = (selector) => {

    useEffect(() => {
        (function() {
            handleNoHover(selector);
        })()
    }, [selector]);
};

export default useNoHover;
