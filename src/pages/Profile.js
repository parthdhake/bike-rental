import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TimelineLite, TweenMax, Power3, Quad } from "gsap";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../features/userSlice";

const AppWrap = styled.div`
  grid-column-start: 2;
`;

const AppContainer = styled.div`
  background: conic-gradient(from -90deg at 50% 105%, white, orchid);
  border-radius: 10px;
  margin: 250px auto;
  max-width: 350px;
  padding: 95px 15px 55px 15px;
  box-shadow: 0 19px 38px rgba(126, 55, 158, 0.017),
    0 15px 12px rgba(43, 17, 46, 0.19);
  position: relative;
  overflow: hidden;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 175px;
  position: absolute;
  top: 0;
  left: -10%;
  right: -10%;
  margin: 0 auto;
  z-index: 1;
  overflow: hidden;

  img {
    height: 140%;
    position: absolute;
    bottom: 0;
    margin: auto;
    object-fit: contain;
  }
`;

const OverlayElm = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(45deg, #e359a7, #643d80);
  background-size: cover;
  opacity: 0.65;
  z-index: 2;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 22px 0px rgba(45, 41, 54, 0.55),
    0px 0px 0px 4px rgba(45, 41, 54, 0.19);
  z-index: 3;

  img {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  color: rgb(85 65 93);

  h2 {
    margin: 35px 0 12px;
    font-size: 1.7rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 25px;
    text-transform: lowercase;

    &:after {
      content: "";
      display: block;
      width: 40px;
      height: 3px;
      background-color: #cc88cc;
      margin: 0 auto;
      position: relative;
      top: 12px;
    }
  }

  p {
    font-size: 1rem;
  }
`;

const Image = () => (
  <>
    <HeaderImage>
      <OverlayElm />
      <img
        src="https://images.unsplash.com/photo-1615818499660-30bb5816e1c7"
        alt="header image"
      />
    </HeaderImage>
  </>
);

const Profile = () => {
  let app = useRef(null);
  let card = useRef(null);
  let img = useRef(null);
  let content = useRef(null);
  const user = useSelector((state) => state.user);

  let tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    tl.from(
      card,
      1.4,
      { y: 1280, ease: Power3.easeOut, scale: 0, ease: Power3.easeOut },
      0.2
    )
      .from(
        card.firstElementChild,
        1.4,
        { scale: 5.5, ease: Power3.easeOut },
        0.4
      )
      .from(
        img.firstElementChild,
        1.7,
        { y: -30, ease: Power3.easeOut, scale: 1.7, ease: Power3.easeOut },
        0.7
      )
      .from(content, 2, { css: { opacity: 0 }, ease: Quad.easeInOut }, 0.7);
  }, []);

  return (
    <>
      <AppWrap ref={(el) => (app = el)}>
        <AppContainer ref={(el) => (card = el)}>
          <Image />
          <HeaderContainer>
            <ProfileImage ref={(el) => (img = el)}>
              <img src={user.userDetails.svgAvatar} alt="profile image" />
            </ProfileImage>
          </HeaderContainer>
          <ContentContainer ref={(el) => (content = el)}>
            <h2>{user.userDetails.name}</h2>
            <h3>{user.userDetails.username}</h3>
            <h3>{user.userDetails.email}</h3>
            <p>The cake is a lie.</p>
          </ContentContainer>
        </AppContainer>
      </AppWrap>
    </>
  );
};

export default Profile;
