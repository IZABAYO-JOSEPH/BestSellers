const Book =({img, author,title,number})=>{
    return (
    <article className='book'>
    <img src={img} alt='this is the image' />
    <h2> {title}</h2>
    <h2> {author}</h2>
    <span className="number">{`# ${number + 1}`}</span>
      </article>
      )}
    export default Book