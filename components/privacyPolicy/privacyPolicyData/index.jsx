import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const PrivacyPolicyData = () => {
  return (
    <section className={`${styles.PrivacyPolicyData}`}>
      <div className={cn("primary-container")}>
        <div className={styles.policyDivide}>
          <span className={styles.title}>Personal Information</span>
          <p className={styles.leadText}>
            When registering an enquiry or communicating with us on our site, as
            appropriate, you may be asked to enter your name, email address,
            phone number or other details to identify you and help you with your
            experience.
          </p>
        </div>
        <div className={styles.policyDivide}>
          <span className={styles.title}>Data Collection</span>
          <p className={styles.leadText}>
            We collect information from you when you fill out a form or enter
            information on the Techchefz website.
          </p>
        </div>
        <div className={styles.policyDivide}>
          <span className={styles.title}>Information usage</span>

          <ul className={styles.customerList}>
            <p className={styles.leadText}>
              We may use the data which we collect from you when you register,
              sign up for our newsletter, respond to a survey or marketing
              communication, browse the Techchefz website, or use certain other
              site features in the following ways:
            </p>
            <li className={styles.list}>
              To follow up with them after correspondence (live chat, email or
              phone inquiries)
            </li>
          </ul>
        </div>

        <div className={styles.policyDivide}>
          <span className={styles.title}>Information protection</span>

          <ul className={styles.customerList}>
            <p className={`${styles.leadText} ${styles.textSpace}`}>
              Our website is scanned on a regular basis for security loopholes
              and known vulnerabilities in order to make your visit to our site
              as safe as possible.
            </p>
            <p className={styles.leadText}>We use regular Malware Scanning.</p>
            <li className={styles.list}>
              Your personal information is contained behind secured networks and
              is only accessible by a limited number of persons who have special
              access rights to such systems, and are required to keep the
              information confidential. In addition, all sensitive/credit
              information you supply is encrypted via Secure Socket Layer (SSL)
              technology.
            </li>
            <li className={styles.list}>
              We implement a variety of security measures when a user enters,
              submits, or accesses their information to maintain the safety of
              your personal information. All transactions are processed through
              a gateway provider and are not stored or processed on our servers.
            </li>
          </ul>
        </div>
        <div className={styles.policyDivide}>
          <span className={styles.title}>Cookies usage</span>

          <ul className={styles.customerList}>
            <p className={`${styles.leadText} ${styles.textSpace}`}>
              Yes. Cookies are small files that a site or its service provider
              transfers to your computer’s hard drive through your Web browser
              (if you allow) that enables the site’s or service provider’s
              systems to recognize your browser and capture and remember certain
              information. Cookies are used to help us understand your
              preferences based on previous or current site activity, which
              enables us to provide you with improved services. We also use
              cookies to help us compile aggregate data about site traffic and
              interactions so that we can offer better Techchefz site
              experiences and tools in the future.
            </p>
            <p className={styles.leadText}>We use cookies to : </p>
            <li className={styles.list}>Keep track of advertisements.</li>
            <li className={styles.list}>
              You can choose to have your computer warn you each time a cookie
              is being sent, or you can choose to turn off all cookies.
            </li>
            <li className={styles.list}>
              You do this through your browser (e.g. Chrome or Internet
              Explorer) settings. Each browser is a little different, so refer
              to your browser&apos;s Help menu to learn the correct way to
              modify your cookies.
            </li>
            <li className={styles.list}>
              If you turn cookies off, some features will be that make the site
              experience more efficient and some of our services will not
              function properly.
            </li>
          </ul>
        </div>

        <div className={styles.policyDivide}>
          <span className={styles.title}>Third-party disclosure</span>
          <p className={styles.leadText}>
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information (PII).
          </p>
        </div>

        <div className={styles.policyDivide}>
          <span className={styles.title}>Third-party links</span>
          <p className={styles.leadText}>
            We do not include or offer third-party products or services on the
            Techchefz website.
          </p>
        </div>

        <div className={styles.policyDivide}>
          <span className={styles.title}>Can-spam act</span>

          <ul className={styles.customerList}>
            <p className={`${styles.leadText} ${styles.textSpace}`}>
              The CAN-SPAM Act is a law that sets the rules for commercial
              email, establishes requirements for commercial messages, gives
              recipients the right to have emails stopped from being sent to
              them, and spells out tough penalties for violations.
            </p>
            <p className={styles.leadText}>
              We collect your email address in order to:
            </p>
            <li className={`${styles.list} ${styles.textSpace}`}>
              Send information, respond to inquiries, and/or other requests or
              questions.
            </li>

            <p className={styles.leadText}>
              To be in accordance with CANSPAM we agree to the following:
            </p>
            <li className={styles.list}>
              No false or misleading subjects or email addresses
            </li>
            <li className={styles.list}>
              Identify the message as an advertisement in some reasonable way.
            </li>
            <li className={styles.list}>
              Include the physical address of our business or site headquarters.
            </li>
            <li className={styles.list}>
              Monitor third-party email marketing services for compliance, if
              one is used.
            </li>
            <li className={styles.list}>
              Honor opt-out/unsubscribe requests quickly.
            </li>
            <li className={styles.list}>
              Allow users to unsubscribe by using the link at the bottom of each
              email.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyData;
