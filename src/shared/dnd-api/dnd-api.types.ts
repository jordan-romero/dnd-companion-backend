export interface FeatureSummary {
  index: string;
  name: string;
  url: string;
}

export interface FeaturesApiResponse {
  count: number;
  results: FeatureSummary[];
}

export interface FeatureDetails {
  index: string;
  name: string;
  level: number;
  class: string;
  prerequisites: any[];
  desc: string[];
  url: string;
}
