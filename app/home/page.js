import { useAmp } from 'next/amp';
import NotFound from "../not-found";
export const config = { amp: 'hybrid' };

const HomePage = async () => {
  const isAmp = useAmp();
  return <>{isAmp ? <h1>AMP VIEW</h1> : <NotFound />}</>;
};

export default HomePage;
