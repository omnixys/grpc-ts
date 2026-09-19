export interface UserProjection {
  id: string;
  username: string;
  displayName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  primaryPhone?: string | null;
  avatarUrl?: string | null;
  locale?: string | null;
}

export interface GetUsersByIdsRequest {
  ids: string[];
}

export interface GetUsersByIdsResponse {
  users: UserProjection[];
}

export interface UserSearchResult {
  id: string;
  username: string;
  displayName?: string | null;
  email?: string | null;
}

export interface SearchUsersRequest {
  query: string;
  limit: number;
}

export interface SearchUsersResponse {
  users: UserSearchResult[];
}

export interface UserServiceClient {
  getUsersByIds(request: GetUsersByIdsRequest): Promise<GetUsersByIdsResponse>;
  searchUsers(request: SearchUsersRequest): Promise<SearchUsersResponse>;
}
