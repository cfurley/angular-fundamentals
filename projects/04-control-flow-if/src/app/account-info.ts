export interface AccountInfo {
  name: string;
  card: string;
  exp: string;
  cvv: string;
  membership: 'silver' | 'gold' | 'platinum';
}
