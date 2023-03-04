import React, { Component } from 'react'

export default class Grid8 extends Component {
  render() {
    const {title, img } = this.props;
    return (
      <div className="w-full overflow-x-hidden">
      <h3 className='p-10 font-[600] text-[30px]'>{title}</h3>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {img.map((img) => {
          return (
            <div>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
    )
  }
}
