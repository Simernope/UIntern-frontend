import {FC, ReactNode} from "react";

type PageWrapperProps = {
    children: ReactNode
}
const PageWrapper: FC<PageWrapperProps> = ({children}) => {
    return (
        <main className='max-w-[1200px] mx-auto'>
            {children}
        </main>
    )
}

export {PageWrapper}
