const Box = ({ value, onClick }) => {
    const style = value === 'X' ? 'box-x' : 'box-o';
    return (
        <div className="w-full ">
            <button className={`w-20 h-20 font-bold  text-7xl items-center bg-white rounded-md shadow-lg m-2 duration-300 hover:scale-105 ${style}`}
                onClick={onClick}
            >
                {value}
            </button>
        </div>
    );
};

export default Box;
