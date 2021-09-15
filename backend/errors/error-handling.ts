export const customErrors = (err: any, req: any, res: any, next: any) => {
  if (err.code && err.msg) {
    res.status(err.code).send(err);
  }
  next(err);
};
