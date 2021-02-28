import { injectable, inject } from 'tsyringe';

import OpenSllProvider from '@shared/adapters/models/OpenSllProvider';
import Service from '@shared/core/Service';
import IOpenSllProviderDTO from '@shared/adapters/dtos/IOpenSllExtractProviderDTO';
import IOpenSllExtractEntity from '@shared/adapters/entitys/IOpenSllExtractEntity';

@injectable()
class ExtractCertificateService implements Service<IOpenSllProviderDTO, IOpenSllExtractEntity> {
  constructor(
    @inject('OpenSllProvider') private openSllProvider: OpenSllProvider,
  ) {}

  async execute({ certificatePath, password }: IOpenSllProviderDTO): Promise<IOpenSllExtractEntity> {

    const certificate = await this.openSllProvider.extract({
      certificatePath, password
    });

    return certificate;
  }

}

export default ExtractCertificateService;
