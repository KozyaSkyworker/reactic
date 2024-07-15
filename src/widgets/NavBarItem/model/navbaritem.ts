import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface NavBarItemType {
    to: string,
    text: string,
}

export const NavBarItems: NavBarItemType[] = [
    {
        to: RoutePath.home,
        text: 'Home'
    },
    {
        to: RoutePath.about,
        text: 'About'
    },
    {
        to: RoutePath.profile,
        text: 'Profile'
    }
]