export const mainQuery = (
    lang: string = "en"
) => `*[_type == "main" && language == "${lang}"][0] {
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
