import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.innerHTML = JSON.stringify({
      feedMode: 'market',
      market: 'stock',
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'regular',
      width: 480,
      height: 830,
      locale: 'in',
    });

    script.onerror = () => {
      console.error('Error loading TradingView widget script');
    };

    script.onload = () => {
    };

    script.addEventListener('error', (event) => {
      console.error('Script load error:', event);
    });

    script.addEventListener('load', () => {
      console.log('Script loaded successfully');
    });

    document.getElementById('tradingview-widget-container').appendChild(script);

    return () => {
      try {
        const container = document.getElementById('tradingview-widget-container');
        container.removeChild(script);
      } catch (error) {
        console.error('Error removing TradingView widget script:', error);
      }
    };
  }, []);

  return (
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
