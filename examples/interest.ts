import { InvoiceInterest } from '../dist'

async function testInterest() {

  const invoices = await InvoiceInterest({
    production: false,
    state: 'sp',
    cnpj: 'cnpj',
    certificatePath: 'certificate.pfx',
    password: 'password'
  });

  console.log(invoices);
  console.log(invoices.loteDistDFeInt.docZip);
}

testInterest();
