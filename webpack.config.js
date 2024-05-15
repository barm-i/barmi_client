import path from "path";

export default {
  entry: "./src/main.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(process.cwd(), "public/"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
