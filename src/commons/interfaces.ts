export interface ILogo {
  logo: string,
  alt: string,
  link?: string
}
export interface User {
  role: 'admin' | 'user';
}

export interface RouteConfig {
  path: string;
  component: React.FC;
  private?: boolean;
  roles?: Array<'admin' | 'user'>;
}
