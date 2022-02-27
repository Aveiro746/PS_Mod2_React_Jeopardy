const Category = (props) => {
    
    console.log(props.jeopardy)
    return (
        
        <div>
            <p>{props.jeopardy.category.title}</p>
        </div>
    )
}

export default Category;