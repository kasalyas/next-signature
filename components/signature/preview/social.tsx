import React from "react";
import SOCIAL from "../../../data/social";
import Link from "../../elements/link";
import socialStyle from "./social.module.css";

const Bullet: React.FC = () => (
  <span aria-hidden className={socialStyle.bullet}>
    {"   "}&#8226;{"   "}
  </span>
);

interface SocialProps {
  region: string;
}

const Social: React.FC<SocialProps> = ({ region }) => {
  const { links: socials } = SOCIAL[region?.toLowerCase()];
  return SOCIAL ? (
    <div className={socialStyle.inline} data-testid="socialLinks">
      {socials.map((social, index, socials) => (
        <span key={index}>
          <Link href={social.url}>{social.name}</Link>
          {socials.length - 1 !== index && <Bullet />}
        </span>
      ))}
    </div>
  ) : null;
};

export default Social;
