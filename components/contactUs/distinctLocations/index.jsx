import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const DistinctLocations = () => {
  const differenceCard = [
    {
      brandImg:
        "https://images.unsplash.com/photo-1644777824525-9ac417a0674e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sbTitle: "India",
      countryFlagImg: "/images/country-contact-flag.png",
      sbText: "New Delhi",
      address:
        "FIEE Complex, A - 53 First Floor, Phase 2, Okhla Industrial Estate, New Delhi, Delhi 110020",
      phoneNumber: "+91 9824349812",
    },
    {
      brandImg:
        "https://images.unsplash.com/photo-1515112102038-7899a6b9db83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sbTitle: "United States",
      countryFlagImg: "/images/united-state-flag.png",
      sbText: "San Francisco",
      address:
        "FIEE Complex, A - 53 First Floor, Phase 2, Okhla Industrial Estate, New Delhi, Delhi 110020",
      phoneNumber: "+91 9824349812",
    },
    {
      brandImg:
        "https://plus.unsplash.com/premium_photo-1680836316227-ef17dbbcfb27?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sbTitle: "United States",
      countryFlagImg: "/images/united-state-flag.png",
      sbText: "New York",
      address:
        "FIEE Complex, A - 53 First Floor, Phase 2, Okhla Industrial Estate, New Delhi, Delhi 110020",
      phoneNumber: "+91 9824349812",
    },
  ];

  return (
    <section className={`${styles.distinctLocationsStyle}`}>
      <div className={styles.careerRow}>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className={styles.ProjectHighlight}>Presence</p>
          </div>

          <div className="col-md-12 col-12">
            <h2 className={styles.datingText}>Our Distinct Locations</h2>
          </div>

          <div className="col-md-12 col-12">
            <p className={styles.descriptionText}>
              Our 50+ team members, from account executives, strategists,
              project managers/delivery leads, product designers, and
              developers, are ready to find the best solution to any challenges
              you face. Let's start collaborating!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.gridNumberMain}>
        <div className={`${styles.locationGridCards} `}>
          {differenceCard.map((data, index) => (
            <div key={index} className={styles.cardStyle}>
              <div className={styles.locationBox}>
                <div className={styles.backgroundImg}>
                  <ImageCustom
                    src={data.brandImg}
                    width={330}
                    height={162}
                    alt="image"
                  />
                </div>
                <div className={styles.countryFlag}>
                  <h2 className={styles.sbTitle}>{data.sbTitle}</h2>
                  <div className={styles.flag}>
                    <ImageCustom
                      src={data.countryFlagImg}
                      width={100}
                      height={24}
                      alt="flag"
                    />
                  </div>
                </div>

                <p className={styles.sbText}>{data.sbText}</p>

                <div className={styles.addressArea}>
                  <Icons.ContactLocation width={25} height={25} />
                  <p className={styles.addressText}>{data.address}</p>
                </div>

                <div className={styles.addressArea}>
                  <Icons.ContactPhone width={20} height={20} />
                  <p className={styles.addressText}>{data.phoneNumber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistinctLocations;
