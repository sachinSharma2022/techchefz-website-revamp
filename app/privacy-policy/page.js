import LetsWork from "@/components/home/letsWork";
import PrivacyHeroBanner from "@/components/privacyPolicy/privacyHeroBanner";
import PrivacyPolicyData from "@/components/privacyPolicy/privacyPolicyData";
import Cookies from "@/components/ui/cookiesPopup";

import styles from "./style.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicyStyle}>
      <PrivacyHeroBanner />
      <PrivacyPolicyData />
      <LetsWork />
      <Cookies />
    </div>
  );
};

export default PrivacyPolicy;
