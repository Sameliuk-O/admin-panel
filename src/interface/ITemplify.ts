export interface ITemplify {
  categories: Category[];
  onboardingPreviewIDs: number[];
  pages: Page[];
  previews: { [key: string]: Preview };
}

export interface Category {
  categoryID: number;
  name: string;
  previewIDs: number[];
}

export interface Page {
  id: number;
  name: string;
  sections: Section[];
}

export interface Section {
  content: SectionContent;
  id: number;
}

export interface SectionContent {
  banner?: Banner;
  horizontal_category?: HorizontalCategory;
  vertical_category?: VerticalCategory;
}

export interface Banner {
  content: BannerContent;
  id: number;
}

export interface BannerContent {
  feature?: Feature;
  paywall?: boolean;
  paywallWithOffer?: PaywallWithOffer;
  upgrade?: Upgrade;
}

export interface Feature {
  requiredAppVersion: string;
}

export interface PaywallWithOffer {
  isStandardBannerEnabled: boolean;
  specialOfferBanner: Upgrade;
}

export interface Upgrade {
  backgroundVideo: string;
}

export interface HorizontalCategory {
  aspectRatio: number;
  category: Category;
  detailsPageHeaderBanner?: DetailsPageHeaderBanner;
  visibleItemsCount: number;
}

export interface DetailsPageHeaderBanner {
  content: DetailsPageHeaderBannerContent;
  id: number;
}

export interface DetailsPageHeaderBannerContent {
  upgrade: Upgrade;
}

export interface VerticalCategory {
  aspectRatio: number;
  category: Category;
  columnsCount: number;
}

export interface Preview {
  blurHash: string;
  familyID: number;
  feed: Feed;
  firstFrameURL: string;
  id: number;
  isNew: boolean;
  isShownIfNotSupported: boolean;
  requiredAppVersion: RequiredAppVersion;
  story: Feed;
  thumbnailURL: string;
  title: string;
  videoURL: string;
}

export interface Feed {
  blurHash: string;
  imageURL: string;
  sourcesCount: number;
  templateID: number;
  trendingMusic?: TrendingMusic;
  videoURL: string;
}

export interface TrendingMusic {
  audioURL: string;
  instagramURL?: string;
  tiktokURL?: string;
  title: string;
}

export enum RequiredAppVersion {
  The1015 = '1.0.15',
  The110 = '1.1.0',
  The113 = '1.1.3',
  The114 = '1.1.4',
  The116 = '1.1.6',
  The118 = '1.1.8',
  The121 = '1.2.1',
  The1214 = '1.2.14',
  The1218 = '1.2.18',
  The122 = '1.2.2',
  The1229 = '1.2.29',
  The1231 = '1.2.31',
  The1235 = '1.2.35',
  The128 = '1.2.8',
}
