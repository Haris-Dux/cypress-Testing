import Link from "next/link"

export default function NavItem({label,path,dataTest}){
    return (
        <Link data-Test={dataTest} href={path}>
            {label}
        </Link>
    )
}