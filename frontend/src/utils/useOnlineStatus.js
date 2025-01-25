import { useState, useEffect } from 'react';

function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Initialize with the current status

    useEffect(() => {
        const handleOnline = () => setOnlineStatus(true);
        const handleOffline = () => setOnlineStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup event listeners
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []); // Empty dependency array ensures this runs only once

    return onlineStatus;
}
export default useOnlineStatus;