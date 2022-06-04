import Cors from "cors";

export default function runMiddleware(req, res, methods) {
  const cors = Cors({
    methods: methods,
  });

  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
