import styled from 'styled-components';

const Button = styled.button`
  width: 84px;
  height: 38px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
  border-radius: 100px;
  cursor: pointer;
`;

/**
 * Header
 */

export const Header = styled.header`
  width: 100%;
  height: 56px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 98237592;
`;

export const HeaderLogo = styled.img`
  width: 26px;
  height: 30px;
  object-fit: cover;
  object-position: 0;
`;

export const HeaderButton = styled(Button)`
  border: 1px solid var(--primary);
`;

/**
 * Intro
 * */

export const Intro = styled.section`
  width: 100%;
  padding-top: 40px;
  background: var(--background-2);
`;

export const IntroContent = styled.div`
  width: 100%;
  max-width: 320px;
  margin: auto;
`;

export const IntroTitle = styled.h1`
  text-align: center;
`;

export const IntroSignUpButton = styled(Button)`
  width: 100%;
  height: 48px;
  margin-top: 40px;
  color: var(--secondary);
  font-size: 14px;
  background: var(--signup-button);
`;

export const IntroVideo = styled.video`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  display: block;
`;

/**
 * Business
 */

export const Business = styled.section`
  width: 100%;
  padding: 30px 0;
  background: var(--secondary);
`;

export const BusinessTitle = styled.h4`
  font-family: 'PayPal Sans Big';
  font-weight: 100;
  color: var(--light-text-1);
  text-align: center;
`;

export const BusinessButton = styled(Button)`
  width: 100%;
  max-width: 140px;
  height: 36px;
  margin: 0 auto;
  margin-top: 20px;
  color: var(--secondary);
  font-size: 12px;
  background: var(--business-button);
`;

/**
 * Features
 */

export const Feature = styled.section`
  width: 100%;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${({ variant }) =>
    variant === 'white-bg' ? 'var(--background-1)' : 'var(--background-2)'};
`;

export const FeatureTitle = styled.h1`
  margin-bottom: 20px;
`;

export const FeatureImage = styled.img`
  width: 100%;
  max-width: 260px;
  margin: auto;
  margin-bottom: 20px;
`;

export const FeatureText = styled.span`
  line-height: 1.5;
  font-size: 16px;
`;

export const FeatureLink = styled.a`
  margin-top: 20px;
  font-size: 16px;
  color: var(--link);

  :hover {
    text-decoration: underline;
  }
`;

export const FeatureNewBadge = styled.span`
  width: 60px;
  height: 60px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
  color: var(--light-text-1);
  background: var(--new-badge);
`;

/**
 * Helping you
 */

export const HelpingYouVideoContainer = styled.div`
  height: 0;
  margin-bottom: 30px;
  padding-top: 56.25%;
  position: relative;
`;

export const HelpingYouVideo = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

/**
 * Brands
 */

export const BrandsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BrandWrapper = styled.div`
  width: 50%;
  padding: 20px 10px;
`;

export const Brand = styled.img`
  width: 100%;
  max-width: 120px;
`;

/**
 * JoinCommunity
 */

export const JoinCommunity = styled(Feature)`
  padding: 40px 20px;
  align-items: center;
  background: var(--background-3);
`;

export const JoinCommunityTitle = styled.h1`
  margin-bottom: 26px;
  color: var(--light-text-1);
`;

export const JoinCommunitySignUpButton = styled(IntroSignUpButton)`
  width: 100%;
  max-width: 300px;
  margin: 0;
  margin-bottom: 40px;
`;

export const Counter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CounterDigitWrapper = styled.div`
  width: 40px;
  height: 60px;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--background-1);
`;

export const CounterDigit = styled.span`
  color: var(--dark-text-3);
  font-size: 26px;
  font-weight: 700;
`;

export const CounterLastDigitWrapper = styled(CounterDigitWrapper)`
  position: relative;
  display: block;
  overflow: hidden;
`;

const CounterLastDigit = styled(CounterDigit)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CounterLastDigitBefore = styled(CounterLastDigit)`
  @keyframes middleToTop {
    from {
      transform: translate(-50%, -50%);
    }

    to {
      transform: translate(-50%, -200%);
    }
  }

  animation: middleToTop 1s ease;
`;

export const CounterLastDigitAfter = styled(CounterLastDigit)`
  @keyframes bottomToMiddle {
    from {
      transform: translate(-50%, 200%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }

  animation: bottomToMiddle 1s ease;
`;
