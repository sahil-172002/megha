import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
}

const DOMAIN = 'https://meghaelectronics.vercel.app';

export function SEO({
    title,
    description,
    canonical,
    image = '/meghalogo.png',
    type = 'website'
}: SEOProps) {
    const siteName = 'Megha Electronics';
    const fullTitle = `${title} | ${siteName}`;
    const absoluteImage = image.startsWith('http') ? image : `${DOMAIN}${image}`;
    const absoluteCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${DOMAIN}${canonical}`) : undefined;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {absoluteCanonical && <link rel="canonical" href={absoluteCanonical} />}
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:url" content={absoluteCanonical || DOMAIN} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
        </Helmet>
    );
}
