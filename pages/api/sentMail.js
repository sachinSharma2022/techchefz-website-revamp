import { sendMail } from "@/service/mailService";
// import { Writable } from "stream";
// import formidable from "formidable";

// const formidableConfig = {
//   keepExtensions: true,
//   maxFileSize: 10_000_000,
//   maxFieldsSize: 10_000_000,
//   maxFields: 7,
//   allowEmptyFiles: false,
//   multiples: false,
// };

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// function formidablePromise(req, opts) {
//   return new Promise((accept, reject) => {
//     const form = formidable(opts);

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         return reject(err);
//       }
//       return accept({ fields, files });
//     });
//   });
// }

// const fileConsumer = (acc) => {
//   const writable = new Writable({
//     write: (chunk, _enc, next) => {
//       acc.push(chunk);
//       next();
//     },
//   });

//   return writable;
// };

const handler = async (req, res) => {
    try {
      // const chunks = [];

      // const { fields, files } = await formidablePromise(req, {
      //   ...formidableConfig,
      //   // consume this, otherwise formidable tries to save the file to disk
      //   fileWriteStreamHandler: () => fileConsumer(chunks),
      // });
      // // or the actual field name you used in the front end
      // const { uploadCV } = files;
  
      // const fileData = Buffer.concat(chunks);
  
      // const filename = uploadCV?.originalFilename;
  
      // const attachments = [{ content: fileData, filename }];
      // console.log({
      //   attachments,
      //   fields,
      // });




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