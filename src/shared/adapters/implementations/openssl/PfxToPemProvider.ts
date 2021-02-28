import IOpenSllExtractProviderDTO from "@shared/adapters/dtos/IOpenSllExtractProviderDTO";
import IOpenSllExtractEntity from "@shared/adapters/entitys/IOpenSllExtractEntity";
import OpenSllProvider from "@shared/adapters/models/OpenSllProvider";

import PfxToPem from 'pfx-to-pem';

class PfxToPemProvider implements OpenSllProvider {

  async extract(openSsl: IOpenSllExtractProviderDTO): Promise<IOpenSllExtractEntity> {

    const cert = await PfxToPem.toPem({
      path: openSsl.certificatePath,
      password: openSsl.password
    });

    return {
      certificate: cert.certificate,
      keygen: cert.key
    }
  }

}

export default PfxToPemProvider;
