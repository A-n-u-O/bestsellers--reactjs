const Book = (props) => {
    const{img, title, author, number} = props;
    return (
        <>
            <h1>Amazon Best sellers</h1>

            <article className='book'>
                <img src={img} alt={title}/>
                <h2>{title}</h2>
                <h4>{author}</h4>
                <span className="number">{`# ${number + 1}`}</span>
                {/* <p>{let x = 6}</p> */}
                {/* {children} */}
            </article>
        </>
    );
};

export default Book;