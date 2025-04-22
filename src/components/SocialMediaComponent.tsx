"use client";

import Link from 'next/link'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "@/styles/components/SocialMedia.module.scss";

function SocialMedia() {
  return (
    <div className={styles.contact}>
      <Link href="https://github.com/isinsuatay" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>

      <Link href="https://www.linkedin.com/in/%C4%B1%C5%9F%C4%B1nsu-atay-948496299/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>

      <Link href="https://medium.com/@isinsu-atay" target="_blank">
        <FontAwesomeIcon icon={faMedium} />
      </Link>

      <Link href="https://www.instagram.com/isinsuatay?igsh=b3dtZGg2NWRha2Nn&utm_source=qr" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </div>
  );
}

export default SocialMedia;