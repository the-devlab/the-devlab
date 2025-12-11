export const mainQuery = `*[_type == "main"][0]{
  heroHeading,
  heroContext,
  "heroImage": heroImage.asset->url,
  journeyHeading,
  journeyContext,
  toolkitHeading,
  toolkitContext,
  testimonialsHeading,
  testimonials[]{
    name,
    quote,
    "avatar": avatar->image.asset->url,
  },
  contactHeading
  }`;
