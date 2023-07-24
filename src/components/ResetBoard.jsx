const ResetBoard = ({ resetBoard }) => {
    return (
        <div>
            <button onClick={() => resetBoard()} className="outline-none bg-[rgb(0,110,255)] text-white p-2 mt-5 text-2xl rounded-md shadow-md">
                Reset
            </button>
        </div>
    );
};

export default ResetBoard;
