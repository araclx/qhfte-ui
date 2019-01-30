import React from 'react';

const TradeBox = () => {
    return (
        <div className="card mt-1" >
            <div className="card-body">
                <div className="card-title row">
                    <h5 className="col-3 ">Market</h5>
                    <h5 className="col-3 ">Limit</h5>
                    <h5 className="col-3 px-0">Stop-Limit</h5>
                    <h5 className="col-3 pr-0">SMART</h5>
                </div>
                <form>
                    <div className="form-group ">
                        <label className=" col-3 mt-2" htmlFor="inputPrice">Price</label>
                        <div className="input-group mb-3  col-9 float-right">
                            <input type="text" className="form-control "
                                id="inputPrice"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">/USDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group ">
                        <label className=" col-3 mt-2" htmlFor="inputSize">Size</label>
                        <div className="input-group mb-3  col-9 float-right">
                            <input type="text" className="form-control "
                                id="inputSize"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">/USDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mr-3 mb-1">
                        <span className="badge badge-secondary px-2 ml-2">New</span>
                        <span className="badge badge-secondary px-2 ml-2">New</span>
                        <span className="badge badge-secondary px-2 ml-2">New</span>
                    </div>
                    <div className="form-group ">
                        <label className=" col-3 mt-2" htmlFor="inputTotal">Total</label>
                        <div className="input-group mb-3  col-9 float-right">
                            <input type="text" className="form-control "
                            id="inputTotal"
                             placeholder="Recipient's username" 
                             aria-label="Recipient's username"
                              aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">/USDT</span>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <p className="d-inline col-9 pl-4">Estimated Value</p>
                        <p className="d-inline text-right col-3 pr-4"><strong>0.00$</strong></p>
                    </div>
                    <div className="row">

                        <div className="d-inline col-6 text-center pl-5">
                            <button type="button" className="btn btn-danger btn-block">Sell</button>
                        </div>
                        <div className="d-inline col-6 text-center pr-5">
                            <button type="button" className="btn btn-success btn-block">Buy</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default TradeBox;