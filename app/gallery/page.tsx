import { Metadata } from 'next';
import { GalleryMasonry } from '@/components/gallery-masonry';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Galerie der Havana Lounge Bar – atmosphärische Einblicke in Cocktails, Events und das Interior. Hochwertige Fotos für Presse und Gäste.',
  alternates: {
    canonical: '/gallery'
  }
};

export default function GalleryPage() {
  return <GalleryMasonry />;
}
