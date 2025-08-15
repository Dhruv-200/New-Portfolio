import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
    const baseClasses = "max-w-7xl mx-auto w-full px-5 sm:px-10";
    const mergedClasses = className ? `${baseClasses} ${className}` : baseClasses;
    return <div className={mergedClasses}>{children}</div>;
};

export default Container;


