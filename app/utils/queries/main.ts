export const mainQuery = `*[_type == "main"][0] {
    seoTitle,
    seoDescription,
    heroHeading,
    heroContext,
    "heroImage": heroImage.asset->url,
    heroButton{
      label,
      link,
      icon
    },
    aboutHeading,
    aboutContext,
    aboutHighlights[]{
      title,
      body,
      icon
    },
    toolkitHeading,
    toolkitContext,
    stack[]{
      title,
      tags,
      icon,
    },
    testimonialsHeading,
    testimonials[]{
      name,
      quote,
      "avatar": avatar->image.asset->url,
    },
    contactHeading,
    contactContext,
    contactEmail,
    contactLocation
  }`;
