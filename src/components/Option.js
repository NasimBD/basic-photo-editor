const Option = ({name,active, onClickHandler}) => {
    return ( 
        <>
            <button type="button" className={active ? 'active' : ''} onClick={onClickHandler} name={name}>{name}</button>
        </>
     );
}
 
export default Option;