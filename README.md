<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Nfe Node</h1>

<p align="center">

[![Build Status](https://travis-ci.org/sobreirami/nfe-node.svg?branch=main)](https://travis-ci.org/sobreirami/nfe-node)

</p>

<p align="center">
  Pesquisar e reconhecer notas fiscais diretamente dos serviço da Receita Federal
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#como-utilizar)

## ➤ Como utilizar

Teste e aprenda <a href="https://npm.runkit.com/nfe-node" target="_blank">aqui</a>.

### Pesquisando notas não manifestadas

``` js
import { InvoiceInterest } from 'nfe-node'

await InvoiceInterest({
  production: false,
  state: 'sp',
  cnpj: 'cnpj',
  certificatePath: 'certificate.pfx',
  password: 'password'
});

// {
//   attributes: { versao: '1.01' },
//   tpAmb: '2',
//   verAplic: '1.2.0',
//   cStat: '138',
//   xMotivo: 'Documento(s) localizado(s)',
//   dhResp: '2021-03-05T17:18:33-03:00',
//   ultNSU: '000000000000030',
//   maxNSU: '000000000000030',
//   loteDistDFeInt: {
//     docZip: [
//       {
//         attributes: { NSU: '000000000000024', schema: 'resNFe_v1.01.xsd' },
//         '$value': 'Valor criptografado',
//         resNFe: {
//           chNFe: 'nfe',
//           CNPJ: 'cnpj',
//           xNome: 'nome',
//           IE: 'ie',
//           dhEmi: '2021-03-03T11:52:00-03:00',
//           tpNF: '1',
//           vNF: '1.99',
//           digVal: 'dig',
//           dhRecbto: '2021-03-03T12:15:40-03:00',
//           nProt: 'protocolo',
//           cSitNFe: '1'
//         }
//       },
//     ]
//   }
// }
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#como-instalar)

## ➤ Como instalar

```
yarn add nfe-node
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#como-contribuir)

## ➤ Como contribuir

Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contribuidores)

## ➤ Contribuidores


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#autor)

## ➤ Autor

| [<img src="https://avatars0.githubusercontent.com/u/986026?v=3&s=115"><br><sub>@sobreirami</sub>](https://github.com/sobreirami) |
| :---: |
