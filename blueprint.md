<h1 align="center">Nfe Node</h1>

<p align="center">

[![Build Status](https://travis-ci.org/sobreirami/nfe-node.svg?branch=main)](https://travis-ci.org/sobreirami/nfe-node)

</p>

<p align="center">
  Extrair chave publica e privada digital A1, pesquisar e reconhecer notas fiscais diretamente dos serviço da Receita Federal
</p>

## Como utilizar

Teste e aprenda <a href="https://npm.runkit.com/nfe-node" target="_blank">aqui</a>.

### Extraindo certificado digital A1

``` js
import { extractCertificate } from 'nfe-node'

await extractCertificate({
  certificatePath,
  password,
});

  // {
  //   "certificate":  "certificate",
  //   "keygen":  "private_key"
  // }
```

## Como instalar

```
yarn add nfe-node
```

## Como contribuir

Leia nosso guia de contribuição [aqui](CONTRIBUTING.md)

## Contribuidores

## Autor

| [<img src="https://avatars0.githubusercontent.com/u/986026?v=3&s=115"><br><sub>@sobreirami</sub>](https://github.com/sobreirami) |
| :---: |
