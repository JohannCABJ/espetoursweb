import { getPermalink } from './utils/permalinks';

export const headerData = {
  actions: [
    {
      text: 'Contactenos',
      href: '/contact',
      target: '_blank',
    },
    {
      text: 'WhatsApp Operativo',
      href: 'https://wa.me/+573168251873',
      target: '_blank',
    },
    {
      text: 'WhatsApp Cotizaciones',
      href: 'https://wa.me/+573168251873',
      target: '_blank',
    },
    {
      text: 'WhatsApp Administrativo',
      href: 'https://wa.me/+573173452650',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Grupo Especifico Usuarios', href: '#' },
        { text: 'Empresarial', href: '#' },
        { text: 'Turismo', href: '#' },
        { text: 'Usuarios Servicio de la Salud', href: '#' },
        { text: 'Escolar', href: '#' },
        //{ text: 'Pricing', href: '#' },
        //{ text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Preoperacional', href: 'https://espetours.com/Alistamiento_p.php' },
        { text: 'Acceso APP', href: '#' },
        { text: 'Soporte', href: '#' },
        //{ text: 'Electron', href: '#' },
        //{ text: 'AstroWind Desktop', href: '#' },
      ],
    },
     {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    }, 
    {
      title: 'La Empresa',
      links: [
        { text: 'Contacto', href: '/contact' },
        { text: 'Blog', href: '/blog' },
        { text: 'Protección de datos', href: '/data' },
        { text: 'Politica de transporte', href: '/transport' },
        { text: 'Manual de Funciones', href: '/manual' },
       
        //{ text: 'Social Impact', href: '#' },
        //{ text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terminos') },
    { text: 'Privacy Policy', href: getPermalink('/data') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/espetours.turismo/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/espetours_sas/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@operacionesespetours6303' },
     //{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg"></span>
    Hecho con ❤️ by <a class="text-black-600 dark:text-gray-200" > Espetours · All rights reserved.
  `,
};
