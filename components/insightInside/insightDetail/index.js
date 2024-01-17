"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const InsightDetail = () => {
  const { theme, setTheme } = useContext(MyContext);

  const iconMediaData = [
    { iconPath: <Icons.Linkedin size={25} /> },
    { iconPath: <Icons.facebookInsight /> },
    { iconPath: <Icons.twitter color="#000000" size={25} /> },
    { iconPath: <Icons.MailIcon size={25} /> },
    { iconPath: <Icons.chat /> },
  ];
  const insightDetailData = [
    {
      title: "Defining Inspiration",
      para: "The root of inspire can be traced to the Latin word “inspirare,” which literally translates to “to breathe into,” and in early usage, the term’s meaning evolved into “to draw air into the lungs.” Metaphorically, this mirrors the inspiration process: We take inspiration from the world around us — “breathing it in” — and then “breathe it back out” through how we apply it to our lives.",
      bullet: [
        "Researcher Daron Sharps, Ph.D., breaks inspiration down into a helpful framework with two phases. 1) Insight which refers to what we absorb or take in, and 2) Movement which is how we act on it in the world. Just like breathing, input and output are connected; without movement, insight is simply knowledge, and conversely, taking action without insight is simply… doing",
        "A good place to start when thinking about how inspiration shows up in your life is to ask: Where do I spend my time? For instance, do you spend most of your time taking fodder in (shows, books, experiences, etc.) but find yourself stunted or overwhelmed when trying to translate it into a creative pursuit? Or do you focus more on tasks, but maybe less time to pause, reflect, or experience something new? Getting your inspiration groove back starts with asking, “Where in the inspiration process am I feeling the most stuck?”Wherever you find yourself struggling, here are some simple practices that can help you reignite this process and build confidence as you go.",
      ],
    },
    {
      title: "Practice structured observation",
      para: "Part of the “insight” phase is allowing yourself to take in new experiences, without judgment or criticism. Buddhist practice calls this a beginner’s mind. Life often requires us to process information and immediately react — driving, working, caring for a family member, for example. However, the inspiration process flourishes with being open to the unknown. Getting into this headspace might mean slowing down, looking out, and resisting the natural inclination to transform experience to judgment.",
      bullet: [
        "Shifting into this headspace takes practice, so a little structure helps me. I recently invited my coworkers to go on an “inspiration walkabout.” I asked each person to focus on just ONE element on their walk — one person observing color, another light, and someone else on repeating patterns.",
        "This practice helped people narrow their aperture of observation to see new details they hadn’t noticed before. This can be done with any sense — sound, smell, touch, taste: What are all the sounds you hear on your walk? What sensations do you feel? You can change the prompt each time you do this and the world will always look just a little different.",
      ],
    },
    {
      title: "Parting Thoughts",
      para: "Just like breathing, each of us has the capacity to let inspiration move through us every day if we give it a little air. With a bit of awareness, intention and ongoing practice, the muse can feel less like a flash that appears from time to time if you’re able to capture her, and more like an ongoing, steady glow that lives within each of us.",
      img: "/images/insightimg2.png",
      bullet: [
        "Shifting into this headspace takes practice, so a little structure helps me. I recently invited my coworkers to go on an “inspiration walkabout.” I asked each person to focus on just ONE element on their walk — one person observing color, another light, and someone else on repeating patterns.",
        "This practice helped people narrow their aperture of observation to see new details they hadn’t noticed before. This can be done with any sense — sound, smell, touch, taste: What are all the sounds you hear on your walk? What sensations do you feel? You can change the prompt each time you do this and the world will always look just a little different.",
      ],
    },
  ];
  return (
    <div className={theme ? styles.insightDetailContainer : styles.lightMode}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.insightDetailFlex}>
          <div className={styles.socialMediaFlex}>
            {iconMediaData.map((key) => (
              <div key={key} className={styles.iconDiv}>
                <div>{key.iconPath}</div>
              </div>
            ))}
          </div>

          <div className={styles.insightDetailPara}>
            <h2>
              All of this can leave you wondering — when did being inspired feel
              like so much work?
            </h2>
            <p>
              Curiosity and wonder are innate to all humans, and particularly
              prevalent in children, but over time, as questions turn to
              knowledge and we use judgment to navigate the world, we are in
              this mindset less. And similar to muscles that atrophy, our
              natural ability to feel inspired can be harder to tap into the
              less often we use it. When I joined Pinterest in Spring of 2020, I
              was keen to unpack the nebulous concept of inspiration (Pinterest
              is colloquially known as the “home of inspiration”) in a time that
              felt anything but. Three and half years in, here’s what I’ve
              learned.
            </p>

            <div className={styles.insightImageDiv}>
              <ImageCustom
                src="/images/insightimg1.png"
                width={850}
                height={445}
              />
            </div>

            {insightDetailData.map((value, index) => (
              <div className={styles.insightSection} key={index}>
                <h2>{value.title}</h2>
                <p>{value.para}</p>
                {value.img && (
                  <div className={styles.insightImageDiv}>
                    <ImageCustom src={value.img} width={690} height={480} />
                  </div>
                )}

                <ul>
                  {value.bullet.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetail;
