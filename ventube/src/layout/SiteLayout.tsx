import { PrimarySearch } from "@/components/common/PrimarySearch/PrimarySearch"
import { AppSidebar } from "@/components/layout/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { FC } from "react"

type Props = {
    children?: React.ReactNode
}

export const SiteLayout: FC<Props> = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 w-full">
                    <div className="flex items-center gap-2 px-4 flex-1">
                        <SidebarTrigger className="-ml-1" />
                        <PrimarySearch />
                    </div>
                </header>
                <main className="p-4" >
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
