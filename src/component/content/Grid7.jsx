import React, { Component } from 'react'

export default class Grid7 extends Component {
  render() {
    const {title, img } = this.props;
    return (
      <div className="w-full overflow-x-hidden">
      <h3 className='p-10 font-[600] text-[30px]'>{title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
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
