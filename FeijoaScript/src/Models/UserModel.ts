

interface AuthState {
    isAuthenticated: boolean;
    token: string | null | undefined;
}

interface SettingConfig {
    theme: string,
    uiSize: string,
}

export interface User {
    authed: AuthState,
    id: string | null,
    name: string | null,
    profile: string | null,
    isFollowing: string[] | undefined,
    bookmarksId: string[],
    LibraryId: string[],
    settings: SettingConfig | null,
    collectionList: string[];
}