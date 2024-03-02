import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    },
    {
    label: 'Overview',
    path: '/overview',
    dataTest:'overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    dataTest:'fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms'
    },
    {
        label: 'Examples',
        path: '/examples' ,
        dataTest:'examples'
    },
    {
        label: 'Component',
        path: '/component' ,
        dataTest:'component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem dataTest={item.dataTest} key={item.label} label={item.label} path={item.path} />
                ))
            }
        </ul>
    )
}