// import React, { useEffect, useState } from "react";
// // import { FormControl } from "react-bootstrap";


// import Table from 'react-bootstrap/Table';

// const axios = require('axios').default;


// function Nse() {


//     const [getdata, setGetdata] = useState([]);
//     const [livegreterthan, setLivegreterthan] = useState([]);
//     const [livelessthan, setLiveLessthan] = useState([]);
//     const [pemax, setPemax] = useState([]);
//     const [cemax, setCemax] = useState([]);
//     const [liveprices, setLiveprice] = useState([]);
//     const [pcr, setPcr] = useState([]);
//     const [diffrent, setDiffrent] = useState([]);
//     const [buyyyyyyy, setBuy_price] = useState([])
//     const [bid_price, setBid_price] = useState([]);
//     const [strike_price, setStrike_price] = useState([]);
//     const [livebridprice, setLivebdp] = useState([]);
//     const [p_data, setP_data] = useState([]);
//     const [s_data, setS_data] = useState([]);
//     const [buy_stutas, setBuy_stutas] = useState([]);
//     const [tablebridprice, setTablebridprice] = useState([]);
//     const [percentagesofbaseprice, setPercentagesofbaseprice] = useState([]);
//     const [stoplose, setStoplose] = useState([]);
//     const [abdata, setAbdata] = useState([])
//     const [id, setid] = useState([]);
//     const [percentage, setPercentage] = useState([]);
//     const [setting_id, setSetting_id] = useState([]);

//     useEffect(() => {
//         gettabledata();
//         fetchData();
//         toplossgetdata();
//         const interval = setInterval(() => {
//             console.log('This will run every second!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
//             fetchData();
//             toplossgetdata();
//         }, 10000);
//         return () => clearInterval(interval);

//     }, []);

//     // console.log('buy_stutas', buy_stutas);
//     useEffect(() => {
//         nsedata();

//     }, [bid_price]);

//     useEffect(() => {

//         shelldata();

//     }, [p_data]);

//     useEffect(() => {

//         shelldata();

//     }, [s_data]);



//     async function fetchData() {

//         await axios.get("https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY")

//             .then((json) => {

//                 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All DATA SAVE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                 let raa = json.data.records.timestamp

//                 setGetdata(raa)

//                 // <<<<<<<<<<<<<<<<<< liveprice >>>>>>>>>>>>>>>>>>

//                 let liveprice = json.data.records.index.last
//                 setLiveprice(liveprice)


//                 // / <<<<<<<<<< data of live price greterthan >>>>>>>>>>>>>

//                 let up_price = json.data.filtered.data.filter((ab) => {

//                     let r = ab.strikePrice
//                     return r >= liveprice;
//                 })
//                 setLivegreterthan(up_price)
//                 // console.log("up_price>>>>>>", up_price);


//                 // <<<<<<<<<< data of live price lessthan >>>>>>>>>>>>>

//                 let down_price = json.data.filtered.data.filter((ab) => {

//                     let r = ab.strikePrice
//                     return r <= liveprice;
//                 })
//                 setLiveLessthan(down_price)
//                 // console.log("down_price>>>>>>", down_price);


//                 // <<<<<<<<<< DOWN PRICE (BASE PRICE) PE and CE op and change Op sum and find big value >>>>>>>>>>>>>

//                 let PE_CE_SUM = down_price.slice(-5).map((val) => {
//                     var ss = (val.PE.openInterest + val.PE.changeinOpenInterest)

//                     return ss;
//                 })
//                 let compare = (a, b) => {
//                     return b - a
//                 }
//                 const numAscending = PE_CE_SUM.sort(compare);
//                 const num = numAscending.slice(0, 1);
//                 // console.log("PE_CE_SUM>>>>>>>>>>>>>>>",numAscending);

//                 // console.log('liveprices',liveprices);

//                 // <<<<<<<<<< UP PRICE (SARATE PRICE) PE and CE op and change Op sum and find big value >>>>>>>>>>>>>

//                 let CE_PE_SUM = up_price.slice(0, 5).map((val) => {
//                     var ss = (val.CE.openInterest + val.CE.changeinOpenInterest)
//                     // console.log("Num>>>>>>>>>>>>>>>", ss);

//                     return ss;
//                 })
//                 let compare1 = (a, b) => {
//                     return b - a
//                 }
//                 const numAscending1 = CE_PE_SUM.sort(compare1);
//                 const num1 = numAscending1.slice(0, 1);
//                 // console.log("Num>>>>>>>>>>>>>>>",numAscending1);


//                 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PE IN MAXIMUM OI OF NSE DATA >>>>>>>>>>>>>>>>>
//                 const PE_present_price = []
//                 const PE_present_price2 = []

//                 // setPE(PE_present_price2)
//                 // console.log(PE_present_price2) 
//                 down_price.filter((ab) => {
//                     let r = ab.PE.changeinOpenInterest + ab.PE.openInterest

//                     if (r === num[0]) {
//                         PE_present_price.push(ab)
//                         PE_present_price2.push(ab.strikePrice)

//                         // console.log("d>>>>>>>>>>>>",ab);
//                     }

//                     return ab;
//                 })
//                 // console.log("PE_pregent_price",PE_present_price);
//                 setPemax(PE_present_price)


//                 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CE IN MAXIMUM OI OF NSE DATA >>>>>>>>>>>>>>>>>
//                 const CE_present_price = []
//                 const CE_present_price2 = []

//                 // setCe(CE_present_price2)

//                 up_price.map((ab) => {
//                     let r = ab.CE.changeinOpenInterest + ab.CE.openInterest
//                     if (r === num1[0]) {
//                         // console.log(ab.strikePrice);
//                         CE_present_price.push(ab)
//                         CE_present_price2.push(ab.strikePrice)



//                     }
//                     return ab;
//                 })
//                 // console.log("CE_pregent_price", CE_present_price);
//                 setCemax(CE_present_price)

//                 // <.............................. LIVE BRIDPRICE .............>


//                 PE_present_price.map(ab => {

//                     let r = ab.CE.bidprice

//                     setLivebdp(r)

//                     // console.log(a);
//                     return ab;
//                 })



//                 // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PCR VALUE FIND >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//                 const sum = json.data.filtered.CE.totOI
//                 const sum2 = json.data.filtered.PE.totOI

//                 const PCR = sum2 / sum

//                 setPcr(PCR)
//                 // <<<<<<<<<<<<<<<<<<<<<<< PE CE DIFFRINET >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                 const CE_PE_Diffrent = []
//                 PE_present_price.map((ab) => {
//                     let a = (ab.PE.openInterest + ab.PE.changeinOpenInterest) - (ab.CE.openInterest + ab.CE.changeinOpenInterest)
//                     CE_PE_Diffrent.push(a)
//                     return ab;
//                 })
//                 setDiffrent(CE_PE_Diffrent)

//             })

//             .catch(err => {
//                 console.log(err)
//             })

//     }

//     // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< post >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>........
//     const nsedata = async () => {
//         try {

//             console.log("bid_price", bid_price);
//             console.log("strike_price", strike_price);

//             const article = {
//                 'buy_price': bid_price, 'base_strike_price': strike_price, 'live_Strike_price': liveprices, 'live_brid_price': livebridprice, 'sell_price': percentagesofbaseprice, 'stop_loseprice': stoplose, percentage: 1
//             };

//             await axios({
//                 method: 'post',
//                 url: 'http://192.168.1.192:8000/nse/',
//                 mode: 'cors',
//                 data: article,
//                 // header :""


//             }).then(response => {
//                 console.log(response.data);

//             })
//         } catch (err) {
//             // here we are receiving validation errors
//             console.log("Err == ", err.response);
//             // console.log(err.response.data.errors);
//         }
//     }



//     const shelldata = async () => {
//         try {


//             const article = {
//                 'id': id, 'exit_price': livebridprice, 'shell_strike_price': liveprices, 'sell_buy_time': getdata
//             };

//             // console.log("patch_data----------------", article);
//             await axios({
//                 method: 'put',
//                 url: 'http://192.168.1.192:8000/nse/',
//                 data: article
//             }).then(response => {
//                 console.log(response.data);

//             })

//         } catch (err) {

//             console.log("Err == ", err.response);
//             // console.log(err.response.data.errors);
//         }
//     }

//     const toplossgetdata = async () => {
//         axios.get(' http://192.168.1.192:8000/nse/')
//             .then(response => {
//                 let r = response.data.data
                
//                 r.map((ab) => {
//                     let d = ab.percentage.option
//                     setSetting_id(d)
//                     let n = (ab.live_brid_price * ab.percentage.percentage / 100) + ab.live_brid_price

//                     let s = (ab.live_brid_price) - (ab.live_brid_price * ab.percentage.percentage / 100)
//                     console.log(n, s);
//                     // console.log("TRUE AND FALSE",r);
//                     if (buy_stutas === "BUY" && ab.percentage.option === "banknifty") {


//                         if (n <= livebridprice) {
//                             let c = "ab"

//                             setP_data(c)
//                         }
//                         if (s >= livebridprice) {
//                             let s = "ab"

//                             setS_data(s)
//                         }
//                     }
//                 })

//             })
//     }


//     const gettabledata = async () => {
//         axios.get('http://192.168.1.192:8000/nse/')
//             .then(response => {
//                 let r = response.data.data
//                 setAbdata(r)
//                 console.log("R++++++++++++++++++", r);
//                 r.map((ab, i) => {
//                     let p = ab
//                     let f = ab.percentage
//                     let a = ab.id
//                     let c = ab.status
//                     let g = ab.live_brid_price
//                     // console.log("id>>>>>>>>>>>>>>>>>", ab);
//                     setPercentage(f)
//                     setTablebridprice(g)
//                     setBuy_stutas(c)
//                     setid(a)


//                 })
//             });
//     }




//     const buys = []

//     pemax.map((ab) => {
//         if (pemax !== cemax && diffrent >= 50000 && pcr >= 0.9) {
//             let r = ab.strikePrice + 90
//             // console.log(r);
//             if (50000 >= liveprices) {
//                 let a = 0;

//                 // console.log('buy.length', buy.length);
//                 while (buyyyyyyy.length === 0 && a === 0) {

//                     // console.log(ab);
//                     buys.push(ab)
//                     setBuy_price([...buyyyyyyy, ab])


//                     a = 1;
//                 }


//             }
//         }
//         return ab;
//     })


//     const Brid_price = []
//     // console.log(buys);
//     buys.map((ab) => {
//         let r = ab.CE.bidprice
//         let a = ab.strikePrice
//         console.log("buy_datasss",buy_stutas === "BUY" && setting_id === "banknifty");

//         if (buy_stutas === "BUY" && setting_id === "banknifty" ) {
//             console.log("can not buy");
//         } else {
//            if (setting_id != "banknifty" && buy_stutas !== "BUY"  ) {
            
//             setBid_price(r)
//            }
                
            
//         }

//         console.log("HEloo>>>>>>>", tablebridprice);


//         setStrike_price(a)
//         Brid_price.push(ab.CE.bidprice)


//     })
//     // <---------------------------------Base price -------------------------------------->



//     // const Brid_price2 = []
//     // // console.log(buys);
//     // buys.map((ab) => {
//     //     let r = ab.CE.bidprice
//     //     let a = ab.strikePrice
//     //     console.log("buy_datasss", buy_stutas === "BUY");

//     //     if (buy_stutas === "BUY" && percentage === 1) {
//     //         console.log("can not buy");
//     //     } else {
//     //         setBid_price(r)
//     //     }

//     //     console.log("HEloo>>>>>>>", tablebridprice);


//     //     setStrike_price(a)
//     //     Brid_price.push(ab.CE.bidprice)


//     // })

//     // <-------------------------------- sell and percentages -------------------------->



//     const Brid_price_profit = []
//     Brid_price.map((ab, i) => {
//         let q = ab * 10 / 100 + ab

//         let d = ab - ab * 10 / 100
//         let r = q.toFixed(1)
//         let f = d.toFixed(1)
//         console.log(r);
//         setPercentagesofbaseprice(r)
//         setStoplose(f)

//         // console.log("Brid_price",r);
//         Brid_price_profit.push(r)

//     })



//     return (
//         <>


//             <div className="container">

//                 <div className="container">
//                     <div className="col-md-7 mb-1 d-inline p-2 bg-success text-white float-left  ">
//                         Underlying Index: <span id="equity_underlyingVal" className="bold "><b>BANKNIFTY {liveprices} </b></span>
//                         <span id="equity_timeStamp" className="asondate"> As on {getdata}  IST </span>

//                     </div>
//                 </div>
//                 <div>
//                     {/* toFixed(2) */}
//                     <div className="d-inline p-2 bg-success text-white float-right">PCR = {Number(pcr).toFixed(2)}</div>

//                 </div>


//             </div>
//             <div id="chartContainer">
//                 <Table className="mt-3" id="chartContainer">
//                     <thead>
//                         <tr style={{
//                             backgroundColor: '	#ffbf00'
//                         }}>
//                             <th width="30%" title="Open Interest in contracts">PE</th>

//                             <th width="40%" title="Strike Price">Strike Price</th>

//                             <th width="40%" title="Open Interest in contracts">CE</th>
//                         </tr>
//                     </thead>

//                     <tbody>



//                         {/* <<<<<<<<<<<<<<<<<<< down price  >>>>>>>>>>>>>>>>>>>> */}
//                         {

//                             livelessthan.slice(-10).map((data, i) => {
//                                 return (
//                                     <tr >

//                                         <td style={{
//                                             backgroundColor: pemax[0] === data ? '#ff1000' : null

//                                         }}>{data.PE.openInterest + data.PE.changeinOpenInterest}</td>
//                                         <td style={{
//                                             backgroundColor: '#66CDAA'

//                                         }}  ><b>{data.strikePrice}</b></td>

//                                         <td style={{
//                                             backgroundColor: '#33F9FF'

//                                         }}>{data.CE.openInterest + data.CE.changeinOpenInterest}</td>
//                                     </tr>
//                                 )

//                             })
//                         }
//                         {/* <<<<<<<<<<<<<<<<<<< up price  >>>>>>>>>>>>>>>>>>>> */}
//                         {

//                             livegreterthan.slice(0, 10).map((data, i) => {
//                                 return (

//                                     <tr >
//                                         <td style={{
//                                             backgroundColor: '#33F9FF'

//                                         }}>{data.PE.changeinOpenInterest + data.PE.openInterest}</td>

//                                         <td style={{
//                                             backgroundColor: '#66CDAA'

//                                         }}  ><b>{data.strikePrice}</b></td>


//                                         <td style={{
//                                             backgroundColor: cemax[0] === data ? '#ff1000' : null

//                                         }}>{data.CE.openInterest + data.CE.changeinOpenInterest}</td>

//                                     </tr>

//                                 );

//                             })
//                         }
//                     </tbody>
//                 </Table>
//             </div>


//         </>

//     )

// }
// export default Nse;

