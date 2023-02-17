import { useEffect, useState } from "react";
const useStaticAssets = (path) => {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(new URL(path, window.location.origin).href);
    }, [path]);

    return url;
};

export default useStaticAssets;
