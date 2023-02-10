
export const ShowControl = ({ setShowcompleted, clearTasks, isChecked }) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete all?`)) {
            clearTasks();
        }
    }
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" checked={isChecked} onChange={e => setShowcompleted(e.target.checked)} />
                <label htmlFor="">Show Task done</label>      
            </div>
            <button className="btn btn-danger btn-sm" onClick={handleDelete} >Clear</button>
        </div>
    );
}