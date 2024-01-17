import { Button } from "@/components/ui/button";
import SearchInput from "@/components/ui/searchInput";

import PostCard from "@/components/ui/postCard";
import styles from "./style.module.scss";

const InsightFeatures = () => {
  const buttonVariants = [
    {
      buttonTitle: "All",
      id: "all",
    },
    {
      buttonTitle: "Cloud Computing",
      id: "business",
    },
    {
      buttonTitle: "Cyber Security",
      id: "devOps",
    },
    {
      buttonTitle: "More",
      id: "backEnd",
    },
  ];
  const featureInsight = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJ0aWZpY2lhbHxlbnwwfHwwfHx8MA%3D%3D",
      title:
        "The Rise of Remote Work: Tools and Strategies for Effective Collaboration...",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1681488391803-571953cda235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
      title:
        "Cloud Computing: Strategies for Seamless Migration and Optimization",
      date: "Dec 29, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1683134027352-56d41226194e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJpZyUyMGRhdGF8ZW58MHx8MHx8fDA%3D",
      title: "Big Data Insights: Harnessing the Power of Analytics in Business",
      date: "Dec 28, 2023 - 8 Min read",
    },
  ];

  const allInsightData = [
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Artificial Intelligence Meets Blockchain: Say Hello to xAI",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1644316902396-9bd0558cd771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
      title:
        "Cloud Computing: Strategies for Seamless Migration and Optimization",
      date: "Dec 29, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1682124857779-5c3a97dd3967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpZyUyMGRhdGF8ZW58MHx8MHx8fDA%3D",
      title: "Big Data Insights: Harnessing the Power of Analytics in Business",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1531752148124-118ba196fc7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJldm9sdXRpb258ZW58MHx8MHx8fDA%3D",
      title:
        "The Revolution of IoT: Enhancing Everyday Life with Smart Technology",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFRoZSUyMFJpc2UlMjBvZiUyMFJlbW90ZSUyMFdvcmt8ZW58MHx8MHx8fDA%3D",
      title:
        "The Rise of Remote Work: Tools and Strategies for Effective Collaboration....",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFRoZSUyMEZ1dHVyZSUyMG9mJTIwVmlydHVhbCUyMFJlYWxpdHklM0F8ZW58MHx8MHx8fDA%3D",
      title:
        "The Future of Virtual Reality: Trends and Potential in Various Sectors",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661721076300-d825ca64cf9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fFRoZSUyMFJldm9sdXRpb258ZW58MHx8MHx8fDA%3D",
      title:
        "The Revolution of IoT: Enhancing Everyday Life with Smart Technology",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fFRoZSUyMFJpc2UlMjBvZiUyMFJlbW90ZSUyMFdvcmt8ZW58MHx8MHx8fDA%3D",
      title:
        "The Rise of Remote Work: Tools and Strategies for Effective Collaboration....",
      date: "Dec 28, 2023 - 8 Min read",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRoZSUyMEZ1dHVyZSUyMG9mJTIwVmlydHVhbCUyMFJlYWxpdHl8ZW58MHx8MHx8fDA%3D",
      title:
        "The Future of Virtual Reality: Trends and Potential in Various Sectors",
      date: "Dec 28, 2023 - 8 Min read",
    },
  ];
  return (
    <section className={styles.insightFeatures}>
      <div className={styles.insightHeader}>
        <SearchInput />
        <div className={styles.serviceBtn}>
          {buttonVariants.map((buttonItem) => (
            <Button
              variant="outline"
              size="sm"
              // onClick={() => filterItem(buttonItem.id)}
              key={buttonItem}
            >
              {buttonItem.buttonTitle}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.featureInsight}>
        <h6 className={styles.insightSubHeading}>Our Featured Insights </h6>
        <div className={styles.featureInsightCards}>
          {featureInsight.map((data, index) => (
            <PostCard
              className={styles.featureInsightCard}
              key={index}
              imgSrc={data.imgSrc}
              title={data.title}
              date={data.date}
              cardStyle={styles.featureImgBox}
            />
          ))}
        </div>
      </div>
      <div className={styles.allInsight}>
        <h6 className={styles.insightSubHeading}>All Insights </h6>
        <div className={styles.allInsightCards}>
          {allInsightData.map((data, index) => (
            <PostCard
              key={index}
              imgSrc={data.imgSrc}
              title={data.title}
              date={data.date}
            />
          ))}
        </div>

        <div className={styles.insightButton}>
          <Button variant="outline" size="sm">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightFeatures;
