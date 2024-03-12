

import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Connect with me on social media.
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="CV En"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/YOUNESS MASROUR NEW CV Eng.pdf"
        ></Button>
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="CV Fr"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/MON_CV.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Email"
          href=""
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          onClick={handleEmailClick}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        Designed and Developed with ❤️ by Youness<br></br>younes.masroure@gmail.com
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];
//Email
const handleEmailClick = () => {
  // Replace 'your-email@example.com' with your actual email address
  const email = 'younes.masroure@gmail.com';
  const subject = 'Anything';
  const body = "Hi there!\n\nI'm interested in discussing potential opportunities.\n\nCheers,  YounessWeb";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client when the button is clicked
 // window.location.href = mailtoLink;
  // Open the email link in a new tab or window
  window.open(mailtoLink, '_blank');
};
  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <img
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
