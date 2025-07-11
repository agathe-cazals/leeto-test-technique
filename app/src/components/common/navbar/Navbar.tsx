import { Link } from 'react-router-dom';
import ArrowBack from '../../../images/icons/arrow_back.svg'
import ArrowBackIndigo from '../../../images/icons/arrow_back_indigo.svg';
import { Text } from '../text/Text';


type NavbarProps = {
    redirectionTo: string;
    redirectionText?: string;
    className?: string;
};

export const Navbar = ({
    redirectionTo,
    redirectionText,
    className,
}: NavbarProps
) => {
    return (
        <nav className="flex flex-row items-center justify-between">
            <Link to={redirectionTo} className={`w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center block sm:hidden ${className}`}>
                <img
                    src={ArrowBack}
                    alt="Retour"
                    className="w-4 h-4"
                />
            </Link>
            <Link to={redirectionTo} className={`hidden sm:inline-flex items-center gap-1 ${className}`}>
                <img
                    src={ArrowBackIndigo}
                    alt="Retour"
                    className="w-4 h-4"
                />
                <Text color="purple" size="sm" as="span">{redirectionText ?? "Retour"}</Text>
            </Link>
        </nav>

    );
};
