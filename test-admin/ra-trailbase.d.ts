export interface TrailbaseDataProvider {
  getList: (resource: string, params: any) => Promise<{ data: any[]; total: number }>;
  getOne: (resource: string, params: any) => Promise<{ data: any }>;
  getMany: (resource: string, params: any) => Promise<{ data: any[] }>;
  getManyReference: (resource: string, params: any) => Promise<{ data: any[]; total: number }>;
  create: (resource: string, params: any) => Promise<{ data: any }>;
  update: (resource: string, params: any) => Promise<{ data: any }>;
  updateMany: (resource: string, params: any) => Promise<{ data: any[] }>;
  delete: (resource: string, params: any) => Promise<{ data: any }>;
  deleteMany: (resource: string, params: any) => Promise<{ data: any[] }>;
}

export interface TrailbaseAuthProvider {
  login: (params: { username: string; password: string }) => Promise<void>;
  checkError: (error: { status: number }) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  getIdentity: () => Promise<{ id: string; fullName: string; avatar?: string }>;
}

export declare function createTrailbaseProvider(
  url: string
): Promise<{
  dataProvider: TrailbaseDataProvider;
  authProvider: TrailbaseAuthProvider;
}>;
