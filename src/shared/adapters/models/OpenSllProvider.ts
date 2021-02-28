import IOpenSllExtractProviderDTO from "../dtos/IOpenSllExtractProviderDTO";
import IOpenSllExtractEntity from "../entitys/IOpenSllExtractEntity";

export default interface IOpenSllProvider {
  extract(openSll: IOpenSllExtractProviderDTO): Promise<IOpenSllExtractEntity>;
}
