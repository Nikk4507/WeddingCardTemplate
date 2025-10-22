import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ɵɵdefineDirective, ɵɵdirectiveInject, ɵɵNgOnChangesFeature } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ],
  template: `
<div class="invitation-container">
      <div class="stars"></div>

      <div class="landing-page" *ngIf="!showEnvelope" [@fadeInOut]>
        <div class="landing-content">
          <div class="landing-image-wrapper">
            <img src="Img.jpeg" alt="Wedding invitation" class="landing-image">
            <div class="image-overlay"></div>
          </div>
          <div class="landing-text">
            <h1 class="landing-title">Wedding Invitation</h1>
            <p class="landing-subtitle">Asmriti & Sumit</p>
            <p class="landing-date">November 23, 2025</p>
            <button class="open-invitation-button" (click)="showEnvelopePage()">
              <span>Open Invitation</span>
              <span class="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

    <div class="invitation-container">
      <div class="stars"></div>

      <button class="exit-button" *ngIf="isRevealed" (click)="exitPage()">
        <span class="exit-icon">×</span>
      </button>
      
      <div class="invitation-card" [class.revealed]="isRevealed" *ngIf="!showVisitingCard">
        <div class="envelope-section">
        <h1 class="envelope-title">Invitation of Wedding</h1>
        <div class="envelope-wrapper" *ngIf="!isRevealed">
          <div class="envelope" (click)="openInvitation()">
            
            <button>
              <div class="flap"></div>
              <div class="body"></div>
              <div class="seal">
                <span>Open</span>
              </div>
            </button>
            </div>

        </div>
        </div>

        <div class="card-content" *ngIf="isRevealed">
          <div class="decorative-corner top-left"></div>
          <div class="decorative-corner top-right"></div>
          <div class="decorative-corner bottom-left"></div>
          <div class="decorative-corner bottom-right"></div>

          <div class="ornament-top">
            <div class="floral-divider"></div>
          </div>

          <div class="header-section">
            <h1 class="wedding-title">You're Invited to the Wedding of</h1>
            <div class="title-underline"></div>
          </div>

          <div class="couple-section">
            <div class="couple-names">
              <span class="bride-name">Asmriti<span style="font-size:15px;" >(Bride)</span></span>
              <span class="ampersand">&</span>
              <span class="groom-name">Sumit<span style="font-size:15px;" >(Groom)</span></span>
            </div>
          </div>

          <div class="hearts-animation">
            <div class="heart" *ngFor="let heart of hearts" [style.left]="heart.left" [style.animation-delay]="heart.delay"></div>
          </div>

          <div class="details-section">
            <div class="detail-item date-item">
              <div class="detail-icon">🗓️</div>
              <div class="detail-text">
                <p class="detail-label">Save the Date</p>
                <p class="detail-value">November 23, 2025</p>
              </div>
            </div>

            <div class="detail-item time-item">
              <div class="detail-icon">🕐</div>
              <div class="detail-text">
                <p class="detail-label">Time</p>
                <p class="detail-value">04:00 PM</p>
              </div>
            </div>

            <div class="detail-item location-item">
              <div class="detail-icon">📍</div>
              <div class="detail-text">
                <p class="detail-label">Venue</p>
                <p class="detail-value">Samargarh Resorts & Hotels</p>
              </div>
            </div>
          </div>

          <div class="quote-section">
            <p class="quote">"Love is composed of a single soul inhabiting two bodies"</p>
            <p class="quote-author">- Aristotle</p>
          </div>

          <div class="ornament-bottom">
            <div class="floral-divider"></div>
          </div>

          <div class="bottom-actions">
            <button class="view-card-button" (click)="toggleView()">
              <span class="button-icon">🎴</span>
              <span>View Visiting Card</span>
            </button>
          </div>
        </div>
      </div>

      <div class="visiting-card-wrapper" *ngIf="showVisitingCard && isRevealed">
        <div class="visiting-card">
          <div class="card-header-image">
            <img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Wedding couple">
            <div class="header-overlay">
              <h2 class="card-couple-names">Asmriti & Sumit</h2>
            </div>
          </div>

          <div class="card-body">
            <div class="photo-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding rings">
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding venue">
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Wedding flowers">
              </div>
            </div>

            <div class="card-info-section">
              <div class="info-card">
                <div class="info-icon">👰</div>
                <h3>The Bride</h3>
                <p class="name">Asmriti</p>
                <p class="details">Daughter of Mr. Sanjay Kumar & Mrs. Bindu</p>
              </div>

              <div class="info-card">
                <div class="info-icon">🤵</div>
                <h3>The Groom</h3>
                <p class="name">Sumit</p>
                <p class="details">Son of Mr. Lalan Kumar & Mrs. Asha</p>
              </div>
            </div>

            <div class="event-timeline">
              <h3 class="timeline-title">Event Schedule</h3>
              <div class="timeline-item">
                <div class="timeline-icon">☕</div>
                <div class="timeline-content">
                  <h4>Guest Arrival & Refreshments</h4>
                  <p>04:00 PM - Garden</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">💃</div>
                <div class="timeline-content">
                  <h4>Dance Party</h4>
                  <p>6:00 PM - Dance Floor</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">🍽️</div>
                <div class="timeline-content">
                  <h4>Dinner</h4>
                  <p>8:30 PM - Grand Ballroom</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">👰🤵</div>
                <div class="timeline-content">
                  <h4>Bride & Groom Arrival</h4>
                  <p>09:00 PM - Main Hall</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-icon">💒</div>
                <div class="timeline-content">
                  <h4>Wedding Ceremony</h4>
                  <p>09:15 PM - Main Hall</p>
                </div>
              </div>
            </div>

            <div class="location-section">
              <div class="location-card">
                <div class="location-icon">📍</div>
                <h3>Venue Location</h3>
                <p class="venue-name">Samargarh Resorts & Hotels</p>
                <p class="venue-address">Samargarh, Ranchi, India</p>
                <button class="map-button" (click)="openMap()">View Map</button>
              </div>
            </div>

            <div class="contact-section">
              <h3>Contact Us</h3>
              <div class="contact-grid">
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <a href="tel:+919934020536">+91 99340 20536</a>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">✉️</span>
                  <a href="mailto:ivnikhilverma377@gmail.com">ivnikhilverma377@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="decorative-footer">
              <img src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Wedding decoration" class="footer-image">
              <div class="footer-text">
                <p>We can't wait to celebrate with you!</p>
              </div>
            </div>

            <div class="bottom-actions">
              <button class="back-button" (click)="toggleView()">
                <span class="button-icon">←</span>
                <span>Back to Invitation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }

    .envelope-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px; /* space below envelope if needed */
}

.envelope-title {
  margin-bottom: 24px;
  color: #5a4a42; /* or your chosen color */
  font-size: 2em;
  align-items: center;
}


    .invitation-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #d4912bff 0%, #a24b4bff 100%);
      padding: 20px;
      position: relative;
      overflow: hidden;
    }

    .stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.stars::before,
.stars::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow:
    /* Left section */
    40px 50px white, 80px 120px white, 120px 220px white, 160px 300px white,
    200px 150px white, 240px 340px white, 280px 50px white, 320px 250px white,
    360px 130px white, 400px 300px white, 440px 200px white, 480px 350px white,

    /* Middle section */
    520px 60px white, 560px 180px white, 600px 280px white, 640px 100px white,
    680px 200px white, 720px 50px white, 760px 300px white, 800px 250px white,
    840px 120px white, 880px 350px white, 920px 150px white, 960px 250px white,

    /* Right section */
    1000px 80px white, 1040px 200px white, 1080px 300px white, 1120px 150px white,
    1160px 320px white, 1200px 250px white, 1240px 90px white, 1280px 200px white,
    1320px 50px white, 1360px 280px white, 1400px 180px white, 1440px 300px white,

    /* Extra faint stars for realism */
    150px 400px rgba(255,255,255,0.6), 350px 420px rgba(255,255,255,0.5),
    750px 440px rgba(255,255,255,0.6), 950px 430px rgba(255,255,255,0.4),
    1150px 460px rgba(255,255,255,0.7), 1350px 470px rgba(255,255,255,0.5);
  animation: sparkle 4s ease-in-out infinite;
}

.stars::after {
  animation-delay: 2s;
  filter: blur(1px);
  opacity: 0.8;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

    .exit-button {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slideInRight 0.5s ease-out;
    }

    .exit-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(90deg) scale(1.1);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    .exit-icon {
      font-size: 32px;
      color: white;
      font-weight: 300;
      line-height: 1;
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .envelope-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 1s ease-in;
    }

    .envelope {
      position: relative;
      width: 320px;
      height: 200px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .envelope:hover {
      transform: scale(1.05);
    }

    .envelope .body {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 160px solid transparent;
      border-right: 160px solid transparent;
      border-bottom: 120px solid #f4e4d7;
    }

    .envelope .flap {
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      border-left: 160px solid transparent;
      border-right: 160px solid transparent;
      border-top: 120px solid #e8d5c4;
      transform-origin: top;
      animation: flapWave 2s ease-in-out infinite;
    }

    @keyframes flapWave {
      0%, 100% { transform: rotateX(0deg); }
      50% { transform: rotateX(-10deg); }
    }

    .seal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #c9a788 0%, #d4b896 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      animation: pulse 2s ease-in-out infinite;
    }

    .seal span {
      color: red;
      font-weight: 600;
      font-size: 5rem;
      letter-spacing: 1px;
    }

    @keyframes pulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.1); }
    }

    .invitation-card {
      width: 100%;
      max-width: 600px;
      min-height: 700px;
      background: linear-gradient(to bottom, #ffffff 0%, #fdfbf7 100%);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      position: relative;
      padding: 50px 40px;
      opacity: 0;
      transform: scale(0.9);
      transition: all 0.6s ease;
    }

    .invitation-card.revealed {
      opacity: 1;
      transform: scale(1);
      animation: cardReveal 0.8s ease-out;
    }

    @keyframes cardReveal {
      0% {
        opacity: 0;
        transform: scale(0.5) rotateY(-180deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateY(0deg);
      }
    }

    .decorative-corner {
      position: absolute;
      width: 80px;
      height: 80px;
      border: 3px solid #c9a788;
    }

    .top-left {
      top: 20px;
      left: 20px;
      border-right: none;
      border-bottom: none;
      border-top-left-radius: 10px;
    }

    .top-right {
      top: 20px;
      right: 20px;
      border-left: none;
      border-bottom: none;
      border-top-right-radius: 10px;
    }

    .bottom-left {
      bottom: 20px;
      left: 20px;
      border-right: none;
      border-top: none;
      border-bottom-left-radius: 10px;
    }

    .bottom-right {
      bottom: 20px;
      right: 20px;
      border-left: none;
      border-top: none;
      border-bottom-right-radius: 10px;
    }

    .ornament-top,
    .ornament-bottom {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }

    .floral-divider {
      width: 150px;
      height: 2px;
      background: linear-gradient(to right, transparent, #c9a788, transparent);
      position: relative;
    }

    .floral-divider::before,
    .floral-divider::after {
      content: '❀';
      position: absolute;
      color: #c9a788;
      font-size: 16px;
      top: -8px;
    }

    .floral-divider::before {
      left: -10px;
    }

    .floral-divider::after {
      right: -10px;
    }

    .header-section {
      text-align: center;
      margin-bottom: 30px;
      animation: slideDown 0.8s ease-out 0.2s both;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .wedding-title {
      font-size: 32px;
      font-weight: 300;
      color: #5a4a42;
      margin: 0;
      letter-spacing: 3px;
      font-family: 'Georgia', serif;
    }

    .title-underline {
      width: 60px;
      height: 2px;
      background: #c9a788;
      margin: 15px auto 0;
    }

    .couple-section {
      text-align: center;
      margin: 40px 0;
      animation: fadeIn 0.8s ease-out 0.4s both;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .couple-names {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .bride-name,
    .groom-name {
      font-size: 48px;
      font-weight: 400;
      color: #df982eff;
      font-family: 'Georgia', serif;
      animation: nameFloat 3s ease-in-out infinite;
    }

    .bride-name {
      animation-delay: 0s;
    }

    .groom-name {
      animation-delay: 1.5s;
    }

    @keyframes nameFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .ampersand {
      font-size: 36px;
      color: #c9a788;
      font-family: 'Georgia', serif;
      font-style: italic;
    }

    .hearts-animation {
      position: relative;
      height: 50px;
      margin: 20px 0;
      overflow: hidden;
    }

    .heart {
      position: absolute;
      bottom: -20px;
      font-size: 20px;
      animation: floatHeart 4s ease-in infinite;
      opacity: 0;
    }

    .heart::before {
      content: '❤️';
    }

    @keyframes floatHeart {
      0% {
        bottom: -20px;
        opacity: 0;
      }
      25% {
        opacity: 1;
      }
      75% {
        opacity: 1;
      }
      100% {
        bottom: 70px;
        opacity: 0;
      }
    }

    .details-section {
      margin: 40px 0;
      animation: slideUp 0.8s ease-out 0.6s both;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 20px;
      margin: 15px 0;
      background: rgba(201, 167, 136, 0.05);
      border-radius: 15px;
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }

    .detail-item:hover {
      transform: translateX(10px);
      background: rgba(201, 167, 136, 0.1);
      border-left-color: #c9a788;
      box-shadow: 0 5px 15px rgba(201, 167, 136, 0.2);
    }

    .detail-icon {
      font-size: 32px;
      min-width: 40px;
      text-align: center;
    }

    .detail-text {
      flex: 1;
    }

    .detail-label {
      margin: 0;
      font-size: 14px;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .detail-value {
      margin: 5px 0 0;
      font-size: 20px;
      color: #5a4a42;
      font-weight: 500;
    }

    .quote-section {
      text-align: center;
      margin: 40px 0;
      padding: 30px;
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
      border-radius: 15px;
      animation: fadeIn 0.8s ease-out 0.8s both;
    }

    .quote {
      font-size: 18px;
      font-style: italic;
      color: #5a4a42;
      margin: 0 0 10px;
      line-height: 1.6;
      font-family: 'Georgia', serif;
    }

    .quote-author {
      font-size: 14px;
      color: #999;
      margin: 0;
    }

    .bottom-actions {
      text-align: center;
      margin-top: 40px;
      padding-top: 30px;
      animation: fadeIn 0.8s ease-out 1s both;
    }

    .view-card-button,
    .back-button {
      padding: 18px 40px;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
      color: white;
      background: linear-gradient(135deg, #df982eff 0%, #a2644bff 100%);
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    .view-card-button::before,
    .back-button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    .view-card-button:hover::before,
    .back-button:hover::before {
      width: 300px;
      height: 300px;
    }

    .view-card-button:hover,
    .back-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
    }

    .view-card-button:active,
    .back-button:active {
      transform: translateY(-1px);
    }

    .button-icon {
      font-size: 24px;
      position: relative;
      z-index: 1;
    }

    .view-card-button span,
    .back-button span {
      position: relative;
      z-index: 1;
    }

    .visiting-card-wrapper {
      width: 100%;
      max-width: 900px;
      animation: fadeIn 0.6s ease-out;
      padding: 20px;
    }

    .visiting-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .card-header-image {
      position: relative;
      height: 400px;
      overflow: hidden;
    }

    .card-header-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .card-header-image:hover img {
      transform: scale(1.1);
    }

    .header-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
      padding: 40px;
      display: flex;
      align-items: flex-end;
    }

    .card-couple-names {
      color: white;
      font-size: 48px;
      font-weight: 300;
      margin: 0;
      font-family: 'Georgia', serif;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .card-body {
      padding: 40px;
    }

    .photo-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-bottom: 40px;
    }

    .gallery-item {
      position: relative;
      height: 200px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.15);
    }

    .card-info-section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin: 40px 0;
    }

    .info-card {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .info-card:hover {
      border-color: #667eea;
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }

    .info-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }

    .info-card h3 {
      color: #999;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 0 10px;
    }

    .info-card .name {
      font-size: 24px;
      font-weight: 600;
      color: #df982eff;
      margin: 10px 0;
      font-family: 'Georgia', serif;
    }

    .info-card .details {
      color: #666;
      font-size: 14px;
      margin: 5px 0;
    }

    .event-timeline {
      margin: 40px 0;
      background: #fdfbf7;
      padding: 30px;
      border-radius: 15px;
    }

    .timeline-title {
      text-align: center;
      color: #5a4a42;
      font-size: 28px;
      margin: 0 0 30px;
      font-family: 'Georgia', serif;
    }

    .timeline-item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 20px;
      margin: 15px 0;
      background: white;
      border-radius: 12px;
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }

    .timeline-item:hover {
      transform: translateX(10px);
      border-left-color: #667eea;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .timeline-icon {
      font-size: 32px;
      min-width: 50px;
      text-align: center;
    }

    .timeline-content h4 {
      margin: 0 0 5px;
      color: #5a4a42;
      font-size: 18px;
    }

    .timeline-content p {
      margin: 0;
      color: #999;
      font-size: 14px;
    }

    .location-section {
      margin: 40px 0;
    }

    .location-card {
      background: linear-gradient(135deg, #df982eff 0%, #a2644bff 100%);
      padding: 40px;
      border-radius: 15px;
      color: white;
      text-align: center;
    }

    .location-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }

    .location-card h3 {
      margin: 0 0 20px;
      font-size: 28px;
      font-family: 'Georgia', serif;
    }

    .venue-name {
      font-size: 24px;
      font-weight: 600;
      margin: 10px 0;
    }

    .venue-address {
      font-size: 16px;
      opacity: 0.9;
      margin: 10px 0 20px;
    }

    .map-button {
      padding: 12px 30px;
      background: white;
      color: #df982eff;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .map-button:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(255,255,255,0.3);
    }

    .contact-section {
      margin: 40px 0;
      text-align: center;
    }

    .contact-section h3 {
      color: #5a4a42;
      font-size: 28px;
      margin: 0 0 20px;
      font-family: 'Georgia', serif;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 1.1rem;
      background: rgba(102, 126, 234, 0.05);
      border-radius: 10px;
      font-size: 1rem;
      color: #5a4a42;
    }
    .contact-item a {
      color: #5a4a42;
      text-decoration: none;
      word-break: break-word;
      font-size: 1rem;
      overflow-wrap: anywhere;
      max-width: 90vw;
      display: inline-block;
    }


    .contact-icon {
      font-size: 1.5rem;
    }

    .decorative-footer {
      position: relative;
      margin-top: 40px;
      height: 250px;
      border-radius: 15px;
      overflow: hidden;
    }

    .footer-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .footer-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-text p {
      color: white;
      font-size: 28px;
      font-weight: 300;
      text-align: center;
      margin: 0;
      font-family: 'Georgia', serif;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    @media (max-width: 768px) {
      .invitation-card {
        padding: 20px 15px;
      }

      .invitation-container {
        padding: 5px;
      }
      .visiting-card-wrapper {
        padding: 5px;
      }

      .wedding-title {
        font-size: 32px;
      }

      .bride-name,
      .groom-name {
        font-size: 36px;
      }

      .detail-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }

      .quote {
        font-size: 16px;
      }

      .view-card-button,
      .back-button {
        padding: 15px 35px;
        font-size: 16px;
      }

      .exit-button {
        top: 10px;
        right: 10px;
        width: 45px;
        height: 45px;
      }

      .exit-icon {
        font-size: 28px;
      }

      .card-header-image {
        height: 250px;
      }

      .card-couple-names {
        font-size: 32px;
      }

      .header-overlay {
        padding: 20px;
      }

      .card-body {
        padding: 20px;
      }

      .photo-gallery {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .gallery-item {
        height: 180px;
      }

      .card-info-section {
        grid-template-columns: 1fr;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .timeline-item {
        flex-direction: column;
        text-align: center;
      }

      .decorative-footer {
        height: 180px;
      }

      .footer-text p {
        font-size: 20px;
        padding: 0 20px;
      }
    }
    .landing-page {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      animation: fadeIn 0.8s ease-out;
    }

    .landing-content {
      max-width: 900px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding: 40px;
    }

    .landing-image-wrapper {
      position: relative;
      width: 100%;
      max-width: 600px;
      height: 400px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      animation: scaleIn 1s ease-out;
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .landing-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .landing-image-wrapper:hover .landing-image {
      transform: scale(1.1);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
      pointer-events: none;
    }

    .landing-text {
      text-align: center;
      animation: slideUp 1s ease-out 0.3s both;
    }

    .landing-title {
      font-size: 56px;
      font-weight: 300;
      color: white;
      margin: 0 0 20px;
      letter-spacing: 4px;
      font-family: 'Georgia', serif;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    .landing-subtitle {
      font-size: 42px;
      font-weight: 400;
      color: #ffffff;
      margin: 10px 0;
      font-family: 'Georgia', serif;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    .landing-date {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.9);
      margin: 10px 0 40px;
      letter-spacing: 2px;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }

    .open-invitation-button {
      padding: 20px 50px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #667eea;
      background: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      display: inline-flex;
      align-items: center;
      gap: 15px;
      position: relative;
      overflow: hidden;
    }

    .open-invitation-button::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: linear-gradient(135deg, #df982eff 0%, #a2644bff 100%);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
      z-index: 0;
    }

    .open-invitation-button:hover::before {
      width: 400px;
      height: 400px;
    }

    .open-invitation-button:hover {
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    }

    .open-invitation-button span {
      position: relative;
      z-index: 1;
    }

    .arrow {
      font-size: 24px;
      transition: transform 0.3s ease;
    }

    .open-invitation-button:hover .arrow {
      transform: translateX(5px);
    }

    @media (max-width: 768px) {
      .landing-content {
        padding: 20px;
        gap: 30px;
      }

      .landing-image-wrapper {
        height: 300px;
      }

      .landing-title {
        font-size: 36px;
      }

      .landing-subtitle {
        font-size: 32px;
      }

      .landing-date {
        font-size: 18px;
        margin-bottom: 30px;
      }

      .open-invitation-button {
        padding: 16px 40px;
        font-size: 18px;
      }

      .invitation-card {
        padding: 40px 25px;
      }

      .wedding-title {
        font-size: 32px;
      }

      .bride-name,
      .groom-name {
        font-size: 36px;
      }

      .detail-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }

      .quote {
        font-size: 16px;
      }

      .view-card-button,
      .back-button {
        padding: 15px 35px;
        font-size: 16px;
      }

      .exit-button {
        top: 10px;
        right: 10px;
        width: 45px;
        height: 45px;
      }

      .exit-icon {
        font-size: 28px;
      }

      .card-header-image {
        height: 250px;
      }

      .card-couple-names {
        font-size: 32px;
      }

      .header-overlay {
        padding: 20px;
      }

      .card-body {
        padding: 20px;
      }

      .photo-gallery {
        grid-template-columns: 1fr;
        gap: 10px;
      }

      .gallery-item {
        height: 180px;
      }

      .card-info-section {
        grid-template-columns: 1fr;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .timeline-item {
        flex-direction: column;
        text-align: center;
      }

      .decorative-footer {
        height: 180px;
      }

      .footer-text p {
        font-size: 20px;
        padding: 0 20px;
      }

      .contact-item {
        font-size: 0.95rem;
        padding: 0.8rem;
      }

      .contact-item a, .contact-item span:last-child {
        max-width: 70vw;
        font-size: 0.95rem;
      }

      .envelope-title, .card-content h1, .invitation-card h1 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 7vw; /* Responsive font size for mobile */
    width: 90%;
    word-break: break-word;
    hyphens: auto;
  }

  .card-content, .invitation-card, .envelope-section {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

    }
  `]
})
export class App {
  showEnvelope = false;
  isRevealed = false;
  showVisitingCard = false;
  hearts = [
    { left: '10%', delay: '0s' },
    { left: '30%', delay: '1s' },
    { left: '50%', delay: '0.5s' },
    { left: '70%', delay: '1.5s' },
    { left: '90%', delay: '0.8s' }
  ];



   showEnvelopePage() {
    this.showEnvelope = true;
    this.isRevealed = true;
    this.playMusic();
  }

  openInvitation() {
    this.isRevealed = true;
  }

  toggleView() {
    this.showVisitingCard = !this.showVisitingCard;
  }

  playMusic() {
  const audio = new Audio('music.mp3');
  audio.loop = true;
  audio.volume = 0.3;
  audio.play();
}

  exitPage() {
    const confirmed = confirm('We are waiting for you to come in this great occasion!');
    if (confirmed) {
      window.close();
      setTimeout(() => {
        window.location.href = 'about:blank';
      }, 100);
    }
  }

  openMap() {
    window.open('https://maps.app.goo.gl/9jDwUZNDkZ799Vg48', '_blank');
  }
}

// Simple HostListener decorator implementation for Angular standalone
// function HostListener(eventName: string, args: string[]) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     // Register the event listener on the document when the component is constructed
//     const originalNgOnInit = target.ngOnInit;
//     target.ngOnInit = function () {
//       document.addEventListener(eventName.split(':')[1], (event: any) => {
//         this[propertyKey](event);
//       });
//       if (originalNgOnInit) {
//         originalNgOnInit.apply(this);
//       }
//     };
//   };
// }

bootstrapApplication(App);

