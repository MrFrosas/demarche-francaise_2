export const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Démarche Française",
    "description": "Service officiel d'accompagnement pour votre naturalisation française",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Démarche Française",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": "Accompagnement Naturalisation",
    "audience": {
      "@type": "Audience",
      "audienceType": "Candidats à la naturalisation française"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};