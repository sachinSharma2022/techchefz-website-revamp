import PrivacyHeroBanner from "@/components/privacyPolicy/privacyHeroBanner";
import PrivacyPolicyData from "@/components/privacyPolicy/privacyPolicyData";
import LetsWork from "@/components/home/letsWork";
import styles from "./style.module.scss";


const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicyStyle}>
      <PrivacyHeroBanner />
      <PrivacyPolicyData />
      <LetsWork />
    </div>
  );
};

export default PrivacyPolicy;
