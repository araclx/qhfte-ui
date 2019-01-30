import React from 'react';

const PositionManager = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title ">Position Manager</h5>
                <div className="dropdown-divider w-100"></div>
                <table className="table table-borderless table-responsive">
                    {/* <Table borderless responsive size='xs' className="mb-2 "> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Entry Price</th>
                            <th>Actual Price</th>
                            <th>ROI</th>
                            <th>Progress</th>
                            <th>Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Bitcoin</th>
                            <td>1000.24$</td>
                            <td>000000 BTC</td>
                            <td>5.00%</td>
                            <td >
                                <div className="progress" style={{ height: "3px" }}>
                                    <div className="progress-bar" role="progressbar"
                                        style={{ width: "25%" }}
                                        aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">Bitcoin</th>
                            <td>1070.25$</td>
                            <td>1160.25$</td>
                            <td>15.30%</td>
                            <td>
                                <div className="progress" style={{ height: "3px" }}>
                                    <div className="progress-bar" role="progressbar"
                                        style={{ width: "25%" }}
                                        aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                    {/* </Table> */}
                </table>

            </div>
            <p className="ml-auto mr-2 my-1 text-primary p-0">Expand Module</p>
        </div>
    );
};

export default PositionManager;