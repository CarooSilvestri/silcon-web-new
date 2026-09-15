import { internalPath } from "../utils/paths";

export const SITE = {
  location: "Lomas de Zamora, Buenos Aires, Argentina",
  locationShort: "Lomas de Zamora · Buenos Aires · Argentina",
  phone: "+54 11 4245 2143",
  phoneHref: "tel:+541142452143",
  whatsapp: "+54 9 11 3653 6916",
  whatsappHref: "https://wa.me/5491136536916",
  email: "consultas@silcon.com.ar",
  emailHref: "mailto:consultas@silcon.com.ar",
  monitoringHref: "https://silcon.com.ar/monitoreo.html",
  fiscalHref: "http://qr.afip.gob.ar/?qr=e418ibHMz4zfdBL2bj8Plw,,",
  designerHref: "https://www.behance.net/caroosilvestri",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/silcon.ascensores/",
    icon: internalPath("assets/instagram.svg"),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/silconelectronica.ascensores",
    icon: internalPath("assets/facebook.svg"),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@silconelectronica5170",
    icon: internalPath("assets/youtube.svg"),
  },
] as const;
