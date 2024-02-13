import LetsWork from "@/components/home/letsWork";
import PrivacyHeroBanner from "@/components/privacyPolicy/privacyHeroBanner";
import PrivacyPolicyData from "@/components/privacyPolicy/privacyPolicyData";
import Cookies from "@/components/ui/cookiesPopup";
import { api_privacy_policies_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import styles from "./style.module.scss";

const PrivacyPolicy = async() => {
  const data = await getData(api_privacy_policies_Page)

  return (
    <div className={styles.privacyPolicyStyle}>
      <PrivacyHeroBanner props={data.PrivacyHeroBanner}/>
      <PrivacyPolicyData props={data.PrivacyPolicyData}/>
      <LetsWork  contact={data.LetsWork}/>
      <Cookies props={data.cookie}/>
    </div>
  );
};

export default PrivacyPolicy;
