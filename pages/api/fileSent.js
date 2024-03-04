import formidable, { errors as formidableErrors } from "formidable";
import { sendMail } from "@/service/mailService";
import { prepEmailTemplate } from "@/lib/emailTemplate";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({});
  let fields;
  let files;
  try {
    [fields, files] = await form.parse(req);
  } catch (err) {
    res.status(500).json({ success: false });
  }
  const fileContent = fs.readFileSync(files.uploadCV[0].filepath);
  const content = prepEmailTemplate(JSON.stringify(fields), fields["formType"]);
  try {
    const response = await sendMail(content, fileContent);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).json({
      error_code: "api_two",
      message: err.message,
    });
  }
}
