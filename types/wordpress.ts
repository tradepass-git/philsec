export interface WPRendered {
  rendered: string;
  protected?: boolean;
}

export interface WPImage {
  ID?: number;
  id?: number;
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: Record<string, string>;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SpeakerACF {
  designation?: string;
  company?: string;
  bio?: string;
  twitter_url?: string;
  linkedin_url?: string;
  exclude_speaker_list?: string;
  name?: string;
  bg_color?: string;
  speaker_image?: WPImage | number | string | null;
  social_links?: SocialLink[];
}



export interface WPSpeaker {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: SpeakerACF;
}

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: Record<string, unknown>;
}

{
  /*  For News */
}
export interface NewsACF {
  link?: string;
  news_image?: WPImage | number | string | null;
  description?: string;
  source?: string;
}

export interface WPNews {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: NewsACF;
}

/* For Sponsors */

export interface SponsorLogo {
  loop_column_class?: string;
  hubspot_id?: string;
  website_link?: string;
  logo_image?: WPImage | number | string | null;
}

export interface SponsorACF {
  layout_column?: string;
  "modal-title"?: string;
  logos?: SponsorLogo[];
}

export interface WPSponsor {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: SponsorACF;
}

/* For Jury */

export interface JuryACF {
  company?: string;
  designation?: string;
  bio?: string;
  speaker_image?: WPImage | number | string | null;
  linkedin_url?: string;
  twitter_url?: string;
  exclude_speaker_list?: string[] | boolean;
  name?: string;
  bg_color?: string;
}

export interface WPJury {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: JuryACF;
}
/******************
 *  Testimonials
 * 
 *****************/

export interface TestimonialACF {
  company?: string;
  designation?: string;
  bio?: string;
  speaker_image?: WPImage | number | string | null;
  video_url?: string;
  name?: string;
}

export interface WPTestimonials {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: TestimonialACF;
}


export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;

  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;

  featured_media: number;

  parent: number;
  menu_order: number;
  template: string;

  acf?: Record<string, unknown>;
}


export interface WPInterviewACF {
  designation?: string;
  company?: string;
  question?: string;
  answer?: string;
  logo?: {
    ID: number;
    url?: string;
    alt?: string;
  };
}


export interface WPInterviewCategory {
  id?: number;
  name?: string;
  slug?: string;

}

export interface WPInterviews {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  acf?: WPInterviewACF;
  interview_category?: WPInterviewCategory[];
}

export interface WPInterviewCategoryDetails {
    id: number;
    name: string;
    description: string;
    slug: string;

    logo?: {
        id: number;
        url?: string;
        alt?: string;
    } | null;

    speaker?: {
        id: number;
        title?: string;
        slug?: string;
        company?: string;
        designation?: string;
        speaker_image?: number | null;
    }[] | null;
}