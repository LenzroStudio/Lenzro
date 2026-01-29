/** @type {import('next').NextConfig} */

import mdx from "@next/mdx";


const withMDX = mdx({
  extension: /\.mdx?$/,
});

const nextConfig = {
  async headers() {
    return [
      {
        source:
          "/:all*(svg|jpg|jpeg|png|webp|gif|ico|woff2|woff|ttf|eot|js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
