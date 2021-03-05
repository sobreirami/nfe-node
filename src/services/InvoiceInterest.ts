import * as fs from "fs";

import { createClientAsync, ClientSSLSecurityPFX } from 'soap';

import IInvoiceInterestStateDTO from '../dtos/IInvoiceInterestDTO';

import { ungzip } from 'node-gzip';

import { XmlAdapter } from 'adapters/XmlAdapter';
import TNFEDistDFeInteresse from 'schemas/TNFEDistDFeInteresse';

export default async function InvoiceInterest(
    { production, cnpj, certificatePath, password }: IInvoiceInterestStateDTO
  ): Promise<TNFEDistDFeInteresse> {

  const pfxFile = fs.readFileSync(certificatePath)

  const options = {
    wsdl_options: {
      forever: true,
      rejectUnauthorized: false,
      strictSSL: false,
      pfx: pfxFile,
      passphrase: password
    }
  };

  let interest: TNFEDistDFeInteresse;

  let client = await createClientAsync('https://hom.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx?wsdl', options);
  client.setSecurity(new ClientSSLSecurityPFX(pfxFile, {
    forever: true,
    rejectUnauthorized: false,
    strictSSL: false,
    passphrase: password
  }))

  const result = await client.nfeDistDFeInteresseAsync({
    nfeDadosMsg: {
      distDFeInt: {
        attributes: {
          xmlns: 'http://www.portalfiscal.inf.br/nfe',
          versao: '1.01'
        },
        tpAmb: {
          $value: production ? 1 : 2
        },
        cUFAutor: {
          $value: '35'
        },
        CNPJ: {
          $value: cnpj
        },
        distNSU: {
          ultNSU: {
            $value: '000000000000000'
          }
        },
      }
    }
  });

  interest = result[0].nfeDistDFeInteresseResult.retDistDFeInt;

  const loteDistDFeInt = interest.loteDistDFeInt;

  if(loteDistDFeInt) {
    const docZipRes = loteDistDFeInt.docZip;

    const docZipResPromise = docZipRes.map(async (doc) => {

      let docZip = doc;

      var bufferZip = Buffer.from(docZip.$value, 'base64');
      const zip = await ungzip(bufferZip);
      const parseXml: any = XmlAdapter.deserializeXml(zip.toString());

      if(parseXml) {
        docZip.resNFe = parseXml.resNFe;
      }

      return docZip;
    });

    interest.loteDistDFeInt.docZip = await Promise.all(docZipResPromise);
  }

  return interest;
}
