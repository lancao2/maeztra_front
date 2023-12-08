/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
    images: {
        domains: ['ibb.co'],
      },
}

module.exports = {
  // Outras configurações...

  // Adicione a configuração de exportação estática
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Adicione outras páginas conforme necessário
    };
  },
};

module.exports = nextConfig
