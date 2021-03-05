import TAmb from './TAmb';
import TDocZip from './TDocZip';

export default interface TNFEDistDFeInteresse {
  tpAmb: TAmb;
  verAplic: string;
  cStat: string;
  xMotivo: string;
  dhResp: string;
  ultNSU: string;
  maxNSU: string;
  loteDistDFeInt: {
    docZip: TDocZip[]
  }
}
