
export const GiftItem = ({title, url}) => {

  return (
    <div className="main__cards">
        <img src={url} alt={title} className="main__img" />
    </div>
  )
}
