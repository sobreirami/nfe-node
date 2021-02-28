import { container } from 'tsyringe';

import IOpenSllExtractProviderDTO from '@shared/adapters/dtos/IOpenSllExtractProviderDTO';

import ExtractCertificateService from '@services/extractCertificate/ExtractCertificateService';
import IOpenSllExtractEntity from '@shared/adapters/entitys/IOpenSllExtractEntity';

export default async function extractCertificate(
    {certificatePath, password}: IOpenSllExtractProviderDTO
  ): Promise<IOpenSllExtractEntity> {
  const extractCertificate = container.resolve(ExtractCertificateService);

  const extract = extractCertificate.execute({
    certificatePath,
    password,
  });

  return extract;
}
