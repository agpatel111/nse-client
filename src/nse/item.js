// import React, { useEffect, useState } from "react";
// // import { FormControl } from "react-bootstrap";
// // import { DataGrid } from '@mui/x-data-grid';
// import NavbarMenu from "../components/Navbar";

// import Table from "react-bootstrap/Table";

// import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

// const axios = require("axios").default;

// function Item() {
//   const [getdata, setOi] = useState([]);
//   const [expiryDate, setExpriy_date] = useState([]);
//   const [spot, setSpot] = useState([]);
//   const [live, selive] = useState([]);
//   const [datataaa, setDatat] = useState([]);
//   const [datat2, setDatat2] = useState([]);
//   const [d2, setD2] = useState([]);

//   // console.log("live",live);

//   async function fetchData() {
//     await axios
//       .get("https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY")
//       .then((json) => {
//         console.log("json", json.data);
//         // datataaa.strike
//         let q = json.data.records.index.last;
//         setD2(q);

//         let expriy_date = json.data.records.expiryDates;
//         setExpriy_date(expriy_date);

//         console.log(json.data.records.underlyingValue);
//         // console.log(json.data.records.data)
//         // (data)=>getdata.strikePrice === console.log(json.data.records.index.last)

//         // setSpot(json.records.index);
//         // let daa = arr.filter((data)=> strike)

//         setOi(json.data.records.data);

//         setSpot(json.data.records.index);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(() => {
//       console.log("This will run every second!");
//       fetchData();
//     }, 50000);
//     return () => clearInterval(interval);
//   }, []);

//   const [selectedExpiry, setValue] = useState(expiryDate[0]);

//   let keys = getdata.filter(
//     (data) =>
//       data.expiryDate === (selectedExpiry ? selectedExpiry : expiryDate[0])
//   );

//   let kam = keys.filter((data) => {
//     if (data.strikePrice >= d2) {
//       // console.log("true and flase", data);

//       return data;
//     }
//   });

//   let kam_2 = keys.filter((data) => {
//     if (data.strikePrice <= d2) {
//       console.log("true and flase", data);

//       // setlessthan(data)

//       return data;
//     }
//   });

//   //   if (console.log(arr)>=console.log(live)) {

//   //   for (let i = 0; i < console.log(live); i++) {
//   //     const element = console.log[i];

//   //   }
//   // }

//   // const finaldata = keys && keys.map((val) => {

//   //   return ({

//   //     COI: getdata[val].CE.openInterest,
//   //     CCHANGEOI: getdata[val].CE.changeinOpenInterest,
//   //     VOLUME: getdata[val].CE.totalTradedVolume,
//   //     IV: getdata[val].CE.impliedVolatility,
//   //     pePrice: getdata[val].CE.lastPrice,
//   //     CHNG: getdata[val].CE.change,
//   //     BIDQTY: getdata[val].CE.totalBuyQuantity,
//   //     BIDPRICE: getdata[val].CE.bidprice,
//   //     ASKPRICE: getdata[val].CE.askPrice,
//   //     ASKQTY: getdata[val].CE.askQty,

//   //     strike: getdata[val].CE.strikePrice,
//   //     BIDQ: getdata[val].PE.totalBuyQuantity,
//   //     BIDP: getdata[val].PE.bidprice,
//   //     ASKP: getdata[val].PE.askPrice,
//   //     ASKQ: getdata[val].PE.askQty,
//   //     CHNGPE: getdata[val].PE.change,
//   //     LTP: getdata[val].PE.lastPrice,
//   //     IVPE: getdata[val].PE.impliedVolatility,
//   //     VOLUMEPE: getdata[val].PE.totalTradedVolume,
//   //     CCHANGEOIPE: getdata[val].PE.changeinOpenInterest,
//   //     COIPE: getdata[val].CE.openInterest,
//   //     expiry: getdata[val].PE.expiryDate,

//   //   })

//   // })

//   // let daw = finaldata.map((dara)=>{
//   //   return(
//   //     dara.strike
//   //     )
//   // })
//   // console.log(daw)

//   // let dd = (console.log(daw))
//   // let cc = (console.log(live))

//   // for (let i = 0; i < cc; i++) {

//   //   console.log(finaldata)

//   // }

//   // let dar = console.log(finaldata)
//   // let dad = console.log(live)
//   // console.log(finaldata).forEach(elements => {
//   //   if (elements <= dad) {
//   //     console.log("strikePrice.. ..--------------------------------", elements)

//   //   }
//   // });

//   // let array= console.log(live)

//   // console.log(fetchData.kk)

//   // var ArrayFileName = console.log(finaldata)
//   // var ArrayFileNameWExt = console.log(live)

//   // var final = ArrayFileNameWExt.filter(function(item) {
//   //   return !ArrayFileName.includes(item.split('.')[0]);
//   // })

//   // console.log(final)

//   const handleChange = (e) => {
//     setValue(e.target.value);
//     console.log("selected" + selectedExpiry);
//     e.preventDefault();
//   };

//   return (
//     <>
//       <NavbarMenu />

//       {/* {
//         getdata.map((data) => {

//           console.log('data', data);
//         })
//       } */}

//       <div>
//         <FormControl>
//           <InputLabel>SELECT EXPRIY</InputLabel>
//           <Select onChange={handleChange} id={expiryDate[0]} value=''>
//             <MenuItem value={expiryDate[0]}>
//               <em>Select Expriy</em>
//             </MenuItem>
//             <MenuItem key={expiryDate[0]} value={expiryDate[0]}>
//               {expiryDate[0]}
//             </MenuItem>
//             <MenuItem key={expiryDate[1]} value={expiryDate[1]}>
//               {expiryDate[1]}
//             </MenuItem>
//             <MenuItem key={expiryDate[2]} value={expiryDate[2]}>
//               {expiryDate[2]}
//             </MenuItem>
//             <MenuItem key={expiryDate[3]} value={expiryDate[3]}>
//               {expiryDate[3]}
//             </MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//       <div>
//         <Table size='sm'>
//           <thead>
//             <tr>
//               <th className='text-center' colSpan='11'>
//                 CALLS
//               </th>
//               <th></th>
//               <th className='text-center' colSpan='11'>
//                 PUTS
//               </th>
//             </tr>
//             <tr>
//               <th width='5.14%' title='Open Interest in contracts'>
//                 OI
//               </th>
//               <th width='4.34%' title='Change in Open Interest (Contracts)'>
//                 Chng in OI
//               </th>
//               <th width='5.54%' title='Volume in Contracts'>
//                 Volume
//               </th>
//               <th width='3.34%' title='Implied Volatility'>
//                 IV
//               </th>
//               <th width='4.34%' title='Last Traded Price'>
//                 LTP
//               </th>
//               <th width='4.34%' title='Change w.r.t to Previous Close'>
//                 Chng
//               </th>
//               <th width='4.34%' title='Best Bid/Buy Qty'>
//                 Bid Qty
//               </th>
//               <th width='4.34%' title='Best Bid/Buy Price'>
//                 Bid Price
//               </th>
//               <th width='4.34%' title='Best Ask/Sell Price'>
//                 Ask Price
//               </th>
//               <th width='4.34%' title='Best Ask/Sell Qty'>
//                 Ask Qty
//               </th>
//               <th width='6.34%' title='Strike Price'>
//                 Strike Price
//               </th>
//               <th width='4.34%' title='Best Bid/Buy Qty'>
//                 Bid Qty
//               </th>
//               <th width='4.34%' title='Best Bid/Buy Price'>
//                 Bid Price
//               </th>
//               <th width='4.34%' title='Best Ask/Sell Price'>
//                 Ask Price
//               </th>
//               <th width='4.34%' title='Best Ask/Sell Qty'>
//                 Ask Qty
//               </th>
//               <th width='4.34%' title='Change w.r.t to Previous Close'>
//                 Chng
//               </th>
//               <th width='4.34%' title='Last Traded Price'>
//                 LTP
//               </th>
//               <th width='3.34%' title='Implied Volatility'>
//                 IV
//               </th>
//               <th width='5.54%' title='Volume in Contracts'>
//                 Volume
//               </th>
//               <th width='4.34%' title='Change in Open Interest (Contracts)'>
//                 Chng in OI
//               </th>
//               <th width='5.14%' title='Open Interest in contracts'>
//                 OI
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {kam_2 &&
//               kam_2.slice(-10).map((val, i) => {
//                 if ({ live })
//                   return (
//                     <tr>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.openInterest}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.changeinOpenInterest}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.totalTradedVolume}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.impliedVolatility}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.lastPrice}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.change.toFixed(2)}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.totalBuyQuantity}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#ffbf00",
//                         }}
//                       >
//                         {val.CE.bidprice}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.askPrice}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.CE.askQty}
//                       </td>

//                       <td
//                         style={{
//                           backgroundColor: "	#CCEEFF",
//                         }}
//                       >
//                         <b>{val.CE.strikePrice}</b>
//                       </td>

//                       <td>{val.PE.totalBuyQuantity}</td>
//                       <td>{val.PE.bidprice}</td>
//                       <td>{val.PE.askPrice}</td>
//                       <td>{val.PE.askQty}</td>
//                       <td>{val.PE.change.toFixed(2)}</td>
//                       <td>{val.PE.lastPrice}</td>
//                       <td>{val.PE.impliedVolatility}</td>
//                       <td>{val.PE.totalTradedVolume}</td>
//                       <td>{val.PE.changeinOpenInterest}</td>
//                       <td>{val.PE.openInterest}</td>
//                     </tr>
//                   );
//               })}
//             {kam &&
//               kam.slice(0, 10).map((val, i) => {
//                 if ({ live })
//                   return (
//                     <tr>
//                       <td>{val.CE.openInterest}</td>
//                       <td>{val.CE.changeinOpenInterest}</td>
//                       <td>{val.CE.totalTradedVolume}</td>
//                       <td>{val.CE.impliedVolatility}</td>
//                       <td>{val.CE.lastPrice}</td>
//                       <td>{val.CE.change.toFixed(2)}</td>
//                       <td>{val.CE.totalBuyQuantity}</td>
//                       <td>{val.CE.bidprice}</td>
//                       <td>{val.CE.askPrice}</td>
//                       <td>{val.CE.askQty}</td>

//                       <td
//                         style={{
//                           backgroundColor: "	#CCEEFF",
//                         }}
//                       >
//                         <b>{val.CE.strikePrice}</b>
//                       </td>

//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.totalBuyQuantity}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.bidprice}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.askPrice}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.askQty}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.change.toFixed(2)}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.lastPrice}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.impliedVolatility}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.totalTradedVolume}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.changeinOpenInterest}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "	#ffbf00",
//                         }}
//                       >
//                         {val.PE.openInterest}
//                       </td>
//                     </tr>
//                   );
//               })}
//           </tbody>
//         </Table>
//       </div>
//     </>
//   );
// }

// export default Item;
