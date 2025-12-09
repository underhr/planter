
export default function Money({ money }) {
    return(
        <div className="py-5.5 px-4 absolute h-10 bottom-4 bg-white/70 rounded-xl flex items-center justify-center font-serif text-3xl text-[#4e340c]">
            ${money}
        </div>
    );
}