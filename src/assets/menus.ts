export const Menus = [
    {
        menuName: "Home",
        url: "/home",
        active: true,
        childMenu: []
    },
    {
        menuName: "Cars",
        url: "/carlist",
        active: true,
        childMenu: [
            { menuName: "New Arrivals", url: "/carlist" },
            { menuName: "Showrooms", url: "/showrooms" },
            { menuName: "Accessories", url: "/accessories" }
        ]
    },
    {
        menuName: "Settings",
        url: "/settings",
        active: true,
        childMenu: [
            { menuName: "Settings", url: "/carlist" },
            { menuName: "Showrooms", url: "/showrooms" },
            { menuName: "Accessories", url: "/accessories" }
        ]
    }
]