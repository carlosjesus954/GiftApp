
export const GiftItem = ({title, url}) => {
    console.log({title, url})
  return (
    <div>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
