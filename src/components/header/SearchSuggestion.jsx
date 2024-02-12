const SearchSuggestion = () => {
    return (
        <div className="w-full max-w-xs space-x-2 ml-0 bg-black/30 rounded-md border-gray-500 absolute top-10 text-white shadow-lg ">
            <ul className="space-y-2 *:py-1 *:px-4 *:cursor-pointer">
                <li className="hover:bg-black/60 border-b border-white/50 last:border-b-0">
                    Dhaka
                </li>
                <li className="hover:bg-black/60 border-b border-white/50 last:border-b-0">
                    Rangpur
                </li>
                <li className="hover:bg-black/60 border-b border-white/50 last:border-b-0">
                    Europe
                </li>
            </ul>
        </div>
    );
};

export default SearchSuggestion;
