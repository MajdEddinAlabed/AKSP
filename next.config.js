/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint: {
        ignoreDuringBuilds: true,
      },
};

module.exports = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
};

// async redirects() {
//     const commList = (process.env.COMM_LIST || "").split(",");
//     console.log("commList:", commList);
//     console.log("APP_BASEURL:", process.env.APP_BASEURL);

//     return [
//       // Rule 1: If the user tries the APP_BASEURL (localhost:3000), do not redirect
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "header",
//             key: "host",
//             value: `^${process.env.APP_BASEURL}\\.(com|net)$`,
//           },
//         ],
//         destination: "/:path*",
//         permanent: false,
//       },
//       // Rule 2: If the user tries COMM_LIST + APP_BASEURL, redirect to that URL
//       ...commList.map((subdomain) => ({
//         source: "/:path*",
//         has: [
//           {
//             type: "header",
//             key: "host",
//             value: `^${subdomain}\\.${process.env.APP_BASEURL}\\.(com|net)$`,
//           },
//         ],
//         destination: "/:path*",
//         permanent: false,
//       })),
//       // Rule 3: If the user tries Anything + APP_BASEURL, redirect to APP_BASEURL
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "header",
//             key: "host",
//             value: `^(.+)\\.${process.env.APP_BASEURL}\\.(com|net)$`,
//           },
//         ],
//         destination: "/:path*",
//         permanent: false,
//       },
//     ];
//   },
