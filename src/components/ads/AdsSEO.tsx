import { useEffect } from 'react';

type Props = {
  title: string;
  description: string;
  canonical: string;
};

function setMeta(name: string, content: string, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function AdsSEO({ title, description, canonical }: Props) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    setMeta('description', description);
    setMeta('og:title', description, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setLink('canonical', canonical);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, canonical]);

  return null;
}
