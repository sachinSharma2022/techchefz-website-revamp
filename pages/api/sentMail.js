import { sendMail } from "@/service/mailService";
import { prepEmailTemplate } from "@/lib/emailTemplate";

const handler = async (req, res) => {
    try {
      const { method,body } = req;
      switch (method) {
        case "POST": {
          const content=prepEmailTemplate(body["content"],body["formType"])
         const response= await sendMail(
          content
          );
         res.status(200).send({success: true})
          break;
        }
        default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }}catch (err) {
        res.status(400).json({
          error_code: "api_one",
          message: err.message,
        });
      }
    }
    export default handler;