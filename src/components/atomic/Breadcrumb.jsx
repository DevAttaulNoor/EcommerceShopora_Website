import Link from "next/link"

export const Breadcrumb = ({ breadcrumbData }) => {
    return (
        <nav className="flex items-center">
            {breadcrumbData.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center"
                >
                    {index !== 0 && (
                        <span className="text-lg">
                            {/* {ReactIcons.SLASH} */}
                        </span>
                    )}

                    <Link
                        end
                        href={item.path}
                        className={({ isActive }) => `relative font-medium ${isActive ? 'text-custom-green' : 'text-white'} hover:text-custom-green`}
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </nav>
    )
}