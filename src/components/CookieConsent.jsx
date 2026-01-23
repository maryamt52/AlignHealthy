import React, { useState, useEffect } from 'react';
import './CookieConsent.css'; // We'll create a simple CSS file for this

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // No choice made yet, show banner
            setIsVisible(true);
        } else if (consent === 'granted') {
            // Already granted, ensure scripts are loaded
            loadTrackingScripts();
        }
    }, []);

    const loadTrackingScripts = () => {
        // --- Google Analytics (G-09SMQ2XFK9) ---
        if (!document.getElementById('ga-script')) {
            const script1 = document.createElement('script');
            script1.id = 'ga-script';
            script1.async = true;
            script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-09SMQ2XFK9';
            document.head.appendChild(script1);

            const script2 = document.createElement('script');
            script2.id = 'ga-config';
            script2.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-09SMQ2XFK9');
            `;
            document.head.appendChild(script2);
        }

        // --- Microsoft Clarity (v5mul3929b) ---
        if (!document.getElementById('clarity-script')) {
            const script3 = document.createElement('script');
            script3.id = 'clarity-script';
            script3.innerHTML = `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "v5mul3929b");
            `;
            document.head.appendChild(script3);
        }
    };

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'granted');
        setIsVisible(false);
        loadTrackingScripts();
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'denied');
        setIsVisible(false);
        // Do nothing, scripts won't load
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-banner">
            <div className="cookie-content">
                <p>
                    We use cookies to improve your experience and analyze site usage.
                    By clicking "Accept All", you consent to our use of tracking cookies.
                </p>
            </div>
            <div className="cookie-actions">
                <button onClick={handleDecline} className="btn-cookie-decline">
                    Decline
                </button>
                <button onClick={handleAccept} className="btn-cookie-accept">
                    Accept All
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
