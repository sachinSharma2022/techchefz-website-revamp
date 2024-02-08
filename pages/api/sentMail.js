import { sendMail } from "@/service/mailService";
const handler = async (req, res) => {
    try {
      const { method,body } = req;
      switch (method) {
        case "POST": {
         const response= await sendMail(
            body["content"]
          );
          res.status(200).send({});
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