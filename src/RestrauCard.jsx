import React from 'react'

const RestrauCard = ({menuData}) => {
  return (
    <>
    <section className='main-card-body'>

    {
        menuData.map((currElement) => {
            return(
                <div className="card-body" >
                    <div className="card">
                        <div className="card-info">
                        <span className="id">{currElement.id}</span>
                        <span className="category upper-case">{currElement.category}</span>
                        <h2 className="name upper-case">{currElement.name}</h2>
                        <span className="description">{currElement.description}</span>
                        </div>
                        <span className="read">read</span>
                        <img className="card-img " src={currElement.image} alt="" />
                        <span className="btn-order upper-case">Order</span>
                    </div>
                </div>
            )
        })
    }
    </section>
    
    

    </>
  )
}

export default RestrauCard;