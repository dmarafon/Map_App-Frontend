import { useCallback, useEffect, useState } from "react";
import AboutStyled from "./AboutStyled";

const About = (): JSX.Element => {
  const [elementVisible, setElementVisible] = useState(true);

  const listenToScroll = useCallback(() => {
    let heightToHideFrom = 100;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHideFrom) {
      elementVisible && setElementVisible(false);
    } else {
      setElementVisible(true);
    }
  }, [elementVisible]);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  return (
    <>
      <AboutStyled>
        <div className="about__container">
          {!elementVisible && (
            <div className="about__info--container">
              <div className="about__info--text">
                <p className="about__paragraph--text">
                  {" "}
                  &gt; Save Your favorite Places in the Globe
                </p>
                <p className="about__paragraph--text">
                  {" "}
                  &gt; Filter by your own created Categories
                </p>
                <p className="about__paragraph--text">
                  {" "}
                  &gt; Create Routes and add your own Notes and Photos
                </p>
              </div>
              <div>
                <img
                  className="about__image--globe"
                  src="https://firebasestorage.googleapis.com/v0/b/trippy-dc13b.appspot.com/o/ezgif.com-gif-maker%20(1).webp?alt=media&token=b91245b1-1e8a-4f37-9ad9-43c3428566d4"
                  alt="illustration of a world spinning with markers"
                />
              </div>
            </div>
          )}
        </div>
      </AboutStyled>
    </>
  );
};

export default About;
