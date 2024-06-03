import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/actions';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const totalPages = useSelector(state => state.totalPages);

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    };

    return (
        <div>
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previo
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => handleClick(page)}
                    disabled={page === currentPage}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;