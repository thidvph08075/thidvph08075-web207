import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchProduct = props => {
    const {onSubmit} = props;
    const [search, setSearch] = useState();
    const handSearch = (e) => {
        setSearch(e.target.value);
        if(!onSubmit) return;
        const formValue ={
            search:e.target.value,
        }
        onSubmit(formValue)
    }
    return (
        <div>
            <form>
                <input type="text" value={search} onChange={handSearch}></input>
            </form>
        </div>
    )
}

SearchProduct.propTypes = {
    onSubmit:PropTypes.func
}
SearchProduct.defaultProps ={
    onSubmit:null,
}

export default SearchProduct
