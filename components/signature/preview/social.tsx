import React from "react";
import SOCIAL, { SocialType } from "../../../data/social";
import Link from "../../elements/link";
import socialStyle from "./social.module.css";

const Bullet = () => (
  <span aria-hidden className={socialStyle.bullet}>
    {"   "}&#8226;{"   "}
  </span>
);

interface SocialProps {
  region: string;
}

const Social = ({ region }: SocialProps) => {
  const { links } = SOCIAL[region?.toLowerCase()];

  if (links) {
    return (
      <div className={socialStyle.inline} data-testid="socialLinks">
        {links.map(
          (social: { name: string; url: string }, index: number, links: []) => {
            return (
              <span key={index}>
                <Link href={social.url}>{social.name}</Link>
                {links.length - 1 !== index && <Bullet />}
              </span>
            );
          }
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Social;
