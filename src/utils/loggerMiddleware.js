// small helper you can use in an Express backend later
export const logger = (req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
