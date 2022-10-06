module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/productos/hpetter",
        permanent: true,
      },
    ];
  },
};
