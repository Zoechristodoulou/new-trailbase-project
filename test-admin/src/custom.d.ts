declare module "../ra-trailbase" {
  export function createTrailbaseProvider(
    url: string
  ): Promise<{ dataProvider: any }>;
}