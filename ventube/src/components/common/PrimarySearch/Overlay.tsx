import { cn } from "@/lib/utils"
import { FC } from "react"

type Props = { open: boolean, onClose: () => void }

export const Overlay: FC<Props> = ({ open, onClose }) =>
    <div
        className={cn('z-20 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-200',
            open ? 'opacity-45 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        onClick={onClose}
    />