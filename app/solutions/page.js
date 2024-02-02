import Faq from "@/components/common/faq";
import RelatedCase from "@/components/relatedCase";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import SolutionOurValues from "@/components/solutions/solutionOurValues";
import SolutionTechnologies from "@/components/solutions/solutionTechnologies";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import { api_Solutions_Page } from "@/lib/constants";
import axios, { Axios } from "axios";

import styles from "./style.module.scss";
import SolutionCaseStudy from "@/components/solutions/solutionCaseStudy";

const Solutions = async() => {
  const data = await getData()
  // console.log("data",data);
return (
    <div className={styles.solutionsPageStyle}>
      <SolutionHeroBanner props={data.Banner} />
      <SolutionOurValues />
      <SolutionTheProcess props={data.OurProcess} />
      <SolutionTechnologies props={data.Technology} />
      <SolutionCaseStudy />
      <Faq props ={data.Faq} />
    </div>
  );
};

export default Solutions;

async function getData() {
  try{
    const response = await axios.get(api_Solutions_Page);
    console.log("zzzzz",response);
    return response.data?.data[0]?.attributes
  }catch(error){
    console.log("cccc",error)
    return null
  }
  
}