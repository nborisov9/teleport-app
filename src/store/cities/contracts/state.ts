export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  NEVER = 'NEVER',
  ERROR = 'ERROR',
}

export interface CitiesState {
  items: Array<{ matching_full_name: string }>;
  loadingState: LoadingState;
}
