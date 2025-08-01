import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
    open: boolean;
    onClick: (suggestion: string) => void;
    suggestions: string[];
}

export const SearchSuggestions: FC<Props> = ({ suggestions, onClick, open }) => {
    return (
        <div className={cn("group absolute text-gray-100 bg-gray-500 px-6 py-2 w-full rounded-lg -bottom-2 transition-all duration-200", open ? 'pointer-events-auto opacity-100 translate-y-full' : 'pointer-events-none opacity-0 translate-y-[105%]')} >
            {suggestions.map((suggestion, index) => (
                <SuggestionItem key={index} suggestion={suggestion} onClick={() => onClick(suggestion)} />
            ))}
        </div>
    )
}

type SuggestionItemProps = {
    onClick: () => void;
    suggestion: string;
}

export const SuggestionItem: FC<SuggestionItemProps> = ({ suggestion, onClick }) => {
    return (
        <div className="py-2 border-b-1 cursor-pointer group-hover:opacity-40 last:border-0 hover:opacity-100 transition-opacity duration-200" tabIndex={0} onClick={onClick} >
            <span className="capitalize" >{suggestion}</span>
        </div>
    )
}

