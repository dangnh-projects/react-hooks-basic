import React, { useRef, useState } from 'react';



const PostFilterForm = (props) => {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const valueInput = e.target.value;
        setSearchTerm(valueInput);

        if(!onSubmit) return;
        // clear typing timeout
        if(typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: valueInput,
            };
            onSubmit(formValue);
        }, 1000);
    }
    return (
        <form>
            <input 
                type="text" 
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    )
}


export default PostFilterForm;