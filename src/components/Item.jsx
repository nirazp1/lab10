import React from 'react'

export const Item = ({ item }) => {
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.author}</h5>
                <p className="card-text">{item.description}</p>
                <div class="card-footer">
                    <small class="text-muted">{item.source}</small>
                </div>
                <a href={item.url} className="btn btn-primary">See More</a>
            </div>
        </div>
    )
}
{/* <div class="card-group">
<div class="card">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>

</div>
</div> */}