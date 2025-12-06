'use client';

import { useEffect, useRef } from 'react';

export default function TripAdvisorRatingWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return;

    // Create the widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'TA_cdsratingsonlywide189';
    widgetDiv.className = 'TA_cdsratingsonlywide';
    widgetDiv.innerHTML = `
      <ul id="7mLammCCH6" class="TA_links idW1MLUCRQ">
        <li id="gqcAMyOjN" class="u3TlvKLxRn">
          <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g150807-d12135503-Reviews-Vuelatour-Cancun_Yucatan_Peninsula.html">
            <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor"/>
          </a>
        </li>
      </ul>
    `;

    containerRef.current.appendChild(widgetDiv);

    // Load the TripAdvisor script
    const script = document.createElement('script');
    script.src = 'https://www.jscache.com/wejs?wtype=cdsratingsonlywide&uniq=189&locationId=12135503&lang=en_US&border=true&display_version=2';
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
      className="tripadvisor-rating-widget flex justify-center"
    />
  );
}
