import { string } from "prop-types";
import social from "../../../data/social";
import Link from "../../elements/link";
import socialStyle from "./social.module.css";

const Bullet = () => (
  <span aria-hidden className={socialStyle.bullet}>
    {"   "}&#8226;{"   "}
  </span>
);

const Social = ({ region }) => {
  const { links: socials } = social[region?.toLowerCase()];
  return social ? (
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

Social.propTypes = {
  region: string.isRequired,
};

export default Social;
