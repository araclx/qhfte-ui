import React from 'react';

const Info = () => {
    return (
            <div className="card mt-sm-1" >
                <div className="card-body">
                <h5 className="card-title">Information</h5>
                    <div className="dropdown-divider w-100"></div>
                    <div className="row  clearfix p-1">
                        <div className="col-8 ">            
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       specimen book.is simply dummy text of the printing and typesetting industry.
                                       specimen book. </span>
                        </div>
                        <div className="col-4 mt-auto float-right ">
                        <button type="button" className="btn btn-outline-primary btn-sm float-right">Expand</button>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Info;