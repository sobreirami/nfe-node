import { container } from 'tsyringe';

import providers from './providers';

import OpenSllProvider from './models/OpenSllProvider';

const OpenSsl = providers.openSsl.pfxToPem;

container.registerInstance<OpenSllProvider>(
  'OpenSllProvider',
  new OpenSsl(),
);
