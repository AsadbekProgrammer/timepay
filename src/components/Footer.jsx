import React from 'react';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
   <footer class="main-footer">
  <div class="download-section">
    <h3 class="section-title">Ilovani yuklab oling</h3>
    
    <div class="store-buttons">
      <a href="https://apps.apple.com/uz/app/timepay-xodimlar-nazorati/id6755515954" class="store-btn">
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        <div class="btn-text">
          <span>YUKLAB OLISH</span>
          <strong>App Store</strong>
        </div>
      </a>

      <a href="https://play.google.com/store/apps/details?id=uz.timepay.app&hl=uz" class="store-btn">
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.05C19.15,16.29 19.52,16.82 19.52,17.43C19.52,18.04 19.15,18.57 18.66,18.81L4.89,25.7C4.69,25.8 4.48,25.85 4.27,25.85C3.88,25.85 3.53,25.68 3.28,25.41L13.69,15L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.51 20.75,12C20.75,12.49 20.5,12.91 20.16,13.19L17.89,14.5L14.39,11L17.89,7.5L20.16,10.81M3.28,1.59C3.53,1.32 3.88,1.15 4.27,1.15C4.48,1.15 4.69,1.2 4.89,1.3L18.66,8.19C19.15,8.43 19.52,8.96 19.52,9.57C19.52,10.18 19.15,10.71 18.66,10.95L16.81,11.88L13.69,9L3.28,1.59Z"/></svg>
        <div class="btn-text">
          <span>YUKLAB OLISH</span>
          <strong>Google Play</strong>
        </div>
      </a>
    </div>
  </div>

  <div class="bottom-footer">
    <div class="footer-info">
      <div class="footer-logo">TimePay</div>
      <p class="address">Toshkent shahri, Yunusobod tumani, Yangi Shahar ko'chasi</p>
    </div>
    <div class="copyright">
      © 2026 TimePay Workforce Ecosystem. Barcha huquqlar himoyalangan.
    </div>
  </div>
</footer>
  );
};

export default Footer;

















