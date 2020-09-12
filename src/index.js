import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaBars } from 'react-icons/fa';

import Logo from '~/assets/logo.svg';
import PhoneVideo1 from '~/assets/phone_video_1.mp4';
import PurpleYoga from '~/assets/purple_yoga.png';
import Notifications from '~/assets/notifications.gif';
import PayTouchFree from '~/assets/pay_touch_free.gif';
import CoinyHill from '~/assets/coiny_hill.png';
import HuluLogo from '~/assets/hulu_logo.png';
import GrubhubLogo from '~/assets/grubhub_logo.png';
import PotteryBarnLogo from '~/assets/potterybarn_logo.png';
import SpotifyLogo from '~/assets/spotify_logo.png';
import UltaLogo from '~/assets/ulta_logo.png';
import GrouponLogo from '~/assets/groupon_logo.png';

import BaseStyles from './BaseStyles';
import * as s from './styles';

const App = () => {
  const [counterFirstDigits, setCounterFirstDigits] = useState('34600000');
  const [counterLastDigit, setCounterLastDigit] = useState(1);
  const [showCounterLastDigit, setShowCounterLastDigit] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterLastDigit(lastDigit => {
        let nextLastDigit;

        if (lastDigit < 9) {
          nextLastDigit = lastDigit + 1;
        } else {
          nextLastDigit = 0;

          setTimeout(() => setCounterFirstDigits(digits => (parseInt(digits) + 1).toString()), 500);
        }

        return nextLastDigit;
      });

      setShowCounterLastDigit(false);
      setShowCounterLastDigit(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <BaseStyles />
      <s.Header>
        <s.HeaderButton>
          <FaBars style={{ marginRight: 8 }} color="var(--primary)" />
          Menu
        </s.HeaderButton>
        <s.HeaderLogo src={Logo} />
        <s.HeaderButton>Log In</s.HeaderButton>
      </s.Header>
      <main>
        <s.Intro>
          <s.IntroContent>
            <s.IntroTitle>With ways to pay, shop and chip in, we're here for you</s.IntroTitle>
            <s.IntroSignUpButton>Sign Up for Free</s.IntroSignUpButton>
          </s.IntroContent>
          <s.IntroVideo muted autoPlay loop>
            <source type="video/mp4" src={PhoneVideo1} />
          </s.IntroVideo>
        </s.Intro>
        <s.Business>
          <s.BusinessTitle>Looking for PayPal for Business?</s.BusinessTitle>
          <s.BusinessButton>PayPal for Business</s.BusinessButton>
        </s.Business>
        <s.Feature>
          <s.HelpingYouVideoContainer>
            <s.HelpingYouVideo src="https://www.youtube-nocookie.com/embed/Rr_sRAOn45Y?autoplay=0&amp;rel=0&amp;autohide=2&amp;border=0&amp;wmode=opaque&amp;showinfo=0&amp;hd=1&amp;playsinline=1&amp;enablejsapi=1&amp;modestbranding=1&amp;mute=1"></s.HelpingYouVideo>
          </s.HelpingYouVideoContainer>
          <s.FeatureTitle>Helping you come together</s.FeatureTitle>
          <s.FeatureText>
            We’re all finding ways to come together. Now watch how we’ve been there to help, from
            securely paying your online Pilates instructor, to getting take out touch free.
          </s.FeatureText>
        </s.Feature>
        <s.Feature variant="white-bg">
          <s.FeatureImage src={PurpleYoga} />
          <s.FeatureTitle>Send money in seconds</s.FeatureTitle>
          <s.FeatureText>
            Do more with friends – send money, split bills and pool funds from friends quickly and
            easily, with just a mobile number or email address.
          </s.FeatureText>
          <s.FeatureLink>Download the App</s.FeatureLink>
        </s.Feature>
        <s.Feature>
          <s.FeatureImage src={Notifications} />
          <s.FeatureTitle>Get instant spend notifications</s.FeatureTitle>
          <s.FeatureText>
            Whether shopping at your usual store or somewhere new, we help keep checkout fast and
            your eligible purchase protected. You also get instant spend notifications, so you can
            easily keep track of all your online hauls.
          </s.FeatureText>
          <s.FeatureLink>Download the App</s.FeatureLink>
        </s.Feature>
        <s.Feature variant="white-bg">
          <s.FeatureImage src={PayTouchFree} />
          <s.FeatureNewBadge>New</s.FeatureNewBadge>
          <s.FeatureTitle>Pay touch-free</s.FeatureTitle>
          <s.FeatureText>
            With the PayPal app, the only thing you need to touch when you pay in-person, is your
            own phone.
          </s.FeatureText>
          <s.FeatureLink>Learn More</s.FeatureLink>
        </s.Feature>
        <s.Feature>
          <s.FeatureImage src={CoinyHill} />
          <s.FeatureNewBadge>New</s.FeatureNewBadge>
          <s.FeatureTitle>Save more when you shop online with Honey</s.FeatureTitle>
          <s.FeatureText>
            Honey has joined the PayPal family. Use it to help find discounts at over 30,000
            retailers online. Plus, Honey is 100% free.
          </s.FeatureText>
          <s.FeatureLink>Join Honey</s.FeatureLink>
        </s.Feature>
        <s.Feature variant="white-bg">
          <s.FeatureTitle>Checkout with millions of brands you love</s.FeatureTitle>
          <s.BrandsContainer>
            <s.BrandWrapper>
              <s.Brand src={HuluLogo} />
            </s.BrandWrapper>
            <s.BrandWrapper>
              <s.Brand src={GrubhubLogo} />
            </s.BrandWrapper>
            <s.BrandWrapper>
              <s.Brand src={PotteryBarnLogo} />
            </s.BrandWrapper>
            <s.BrandWrapper>
              <s.Brand src={SpotifyLogo} />
            </s.BrandWrapper>
            <s.BrandWrapper>
              <s.Brand src={UltaLogo} />
            </s.BrandWrapper>
            <s.BrandWrapper>
              <s.Brand src={GrouponLogo} />
            </s.BrandWrapper>
          </s.BrandsContainer>
        </s.Feature>
        <s.JoinCommunity>
          <s.JoinCommunityTitle>
            Join the global community of 325 million PayPal users
          </s.JoinCommunityTitle>
          <s.JoinCommunitySignUpButton>Sign Up Now</s.JoinCommunitySignUpButton>
          <s.Counter>
            {counterFirstDigits.split('').map(number => (
              <s.CounterDigitWrapper key={Math.random().toString()}>
                <s.CounterDigit>{number}</s.CounterDigit>
              </s.CounterDigitWrapper>
            ))}
            <s.CounterLastDigitWrapper>
              {showCounterLastDigit && (
                <>
                  <s.CounterLastDigitBefore>
                    {counterLastDigit - 1 > -1 ? counterLastDigit - 1 : 9}
                  </s.CounterLastDigitBefore>
                  <s.CounterLastDigitAfter>{counterLastDigit}</s.CounterLastDigitAfter>
                </>
              )}
            </s.CounterLastDigitWrapper>
          </s.Counter>
        </s.JoinCommunity>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
