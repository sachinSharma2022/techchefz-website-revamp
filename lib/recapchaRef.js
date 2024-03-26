import ReCAPTCHA from "react-google-recaptcha";

const RecapchaRef = ({ forwardedRef, sitekey, onChange, theme }) => {
  return (
    <div>
      <ReCAPTCHA
        sitekey={sitekey}
        onChange={onChange}
        theme={theme}
        ref={forwardedRef}
      />
    </div>
  );
};
export default RecapchaRef;
