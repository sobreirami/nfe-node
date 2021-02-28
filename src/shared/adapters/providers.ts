import PfxToPemProvider from './implementations/openssl/PfxToPemProvider';

const providers = {
  openSsl: {
    pfxToPem: PfxToPemProvider,
  },
};

export default providers;
