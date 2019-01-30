import React from 'react';

const Balance = () => {
    return (
       
            <div className="card mt-1">
            <div className="card-body">
            <h5 className="card-title row">
                        <div className="col-9">
                            Balance
                    </div>
                        <div className="col-3 float-right">
                        <button className="btn btn-primary btn-sm float-right" type="submit">Open</button>
                            </div>
                    </h5>
                    <div className="dropdown-divider w-100"></div>
                    <div className="row">
                        <div className="col-6 pr-1 mycontent-left">
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       specimen book. </span>
                        </div>
                        <div className="col-6 pl-2 ml-0 mycontent-right ">
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       specimen book. </span>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Balance;