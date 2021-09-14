import { fetchEndpoints } from "../models/models.api";

const getEndpoints = (req: object, res: any, next: any) => {
  fetchEndpoints()
    .then((endpoints: string) => {
      res.status(200).send(JSON.parse(endpoints));
    })
    .catch((err: any) => {
      next(err);
    });
};

export { getEndpoints };
