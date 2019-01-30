// PACKAGES //
import React, { Component } from 'react';

// COMPONENTS //
import Header from './Header';
import TradingView from '../components/TradingView';
import PositionManager from '../components/PositionManager';
import OrderBook from '../components/OrderBook';
import Info from '../components/Info';
import Balance from '../components/Balance';
import ExchangeSwitcher from '../components/ExchangeSwitcher';
import TradeBox from '../components/TradeBox';

class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid clearfix mt-4 px-0">
                    <div className="col-sm-12 col-md-9 mr-auto float-md-left">
                        <div className="vh87">
                            <TradingView />
                        </div>
                        <div className="clearfix inline mt-md-2 mx-md-auto row">
                            <div className="col-sm-12 col-md-6 float-sm-none float-md-left mt-sm-1 mt-md-0 pl-md-0">
                                <PositionManager />
                            </div>
                            <div className="col-sm-12 col-md-6 float-sm-none float-md-right mt-sm-1 mt-md-0 pr-md-0">
                                <OrderBook />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 ml-auto">
                        <Info />
                        <Balance />
                        <ExchangeSwitcher />
                        <TradeBox />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;