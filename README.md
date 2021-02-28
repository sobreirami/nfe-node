<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Nfe Node</h1>

<p align="center">

[![Build Status](https://travis-ci.org/sobreirami/nfe-node.svg?branch=main)](https://travis-ci.org/sobreirami/nfe-node)

</p>

<p align="center">
  Extrair chave publica e privada digital A1, pesquisar e reconhecer notas fiscais diretamente dos serviço da Receita Federal
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#como-utilizar)

## ➤ Como utilizar

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
