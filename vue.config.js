module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cbdocs/" : "/",
  transpileDependencies: ["vuetify"],
};
