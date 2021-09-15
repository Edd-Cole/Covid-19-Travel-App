export const customErrors = (err: any, req: any, res: any, next: any) => {
  console.log(err);
  res.status(err.code).send(err);
  next(err);
};
