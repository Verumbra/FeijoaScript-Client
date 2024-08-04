import {User} from "../../slices/UserSlice.ts";


const UserTestData: User = {
    authed: {isAuthenticated:true, token:"1243532456asdfg"},
    id: "10001",
    name: "John Doe",
    profile: "Test profile please ignore. Likes walks, food dogos and other stuff.",
    isFollowing: ["asedlkgjs8dkjge12fl7okmgbve3nbv"],
    bookmarksId: ["1111"],
    LibraryId: ["asdftglkhi234542klkkjlpikkolmk"],
    settings: {theme: "none", uiSize: "med"},
    collectionList: ["asdftglkhi234542klkkjlpikkolmk"]
}

export default UserTestData;