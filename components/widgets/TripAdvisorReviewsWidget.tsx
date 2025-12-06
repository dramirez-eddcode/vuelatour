'use client';

import { useEffect, useRef } from 'react';

export default function TripAdvisorReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return;

    // Create the widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'TA_cdsscrollingravewide319';
    widgetDiv.className = 'TA_cdsscrollingravewide';
    widgetDiv.innerHTML = `
      <ul id="PP8hLtNCUcE" class="TA_links EtpadVtMLP">
        <li id="GdiLpk" class="QOgFqY">
          <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g150807-d12135503-Reviews-Vuelatour-Cancun_Yucatan_Peninsula.html">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg" alt="TripAdvisor" class="widEXCIMG" id="CDSWIDEXCLOGO"/>
          </a>
        </li>
      </ul>
    `;

    containerRef.current.appendChild(widgetDiv);

    // Load the TripAdvisor script
    const script = document.createElement('script');
    script.src = 'https://www.jscache.com/wejs?wtype=cdsscrollingravewide&uniq=319&locationId=12135503&lang=en_US&border=true&shadow=false&display_version=2';
    script.async = true;
    script.setAttribute('data-loadtrk', '');
    script.onload = () => {
      (script as any).loadtrk = true;
    };
    document.body.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      script.remove();
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="tripadvisor-reviews-widget flex justify-center w-full"
    />
  );
}
