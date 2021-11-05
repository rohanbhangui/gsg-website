import { eRouter } from "./src/App";
import Generator from 'react-router-sitemap-generator';

const generator = new Generator(
  'https://greyspacegroup.com',
  eRouter(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);

generator.save('public/sitemap.xml');