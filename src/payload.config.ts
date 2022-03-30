import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Pages from './collections/Pages';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Pages,
  ],
  localization: {
    locales: ["en", "cs"],
    defaultLocale: "en",
    fallback: false,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
