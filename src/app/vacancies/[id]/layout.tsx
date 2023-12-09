import {PageWrapper} from "@/shared/ui";

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    )
}
