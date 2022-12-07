import React from "react";
import { Layout, Table, Tag } from "antd";
import NseService from "../services/NseService";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Sidebar from "./Sidebar";

const { Header } = Layout;
const { Content } = Layout;

const History_data = () => {
  const columns = [
    {
      title: "Id",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Base Strike Price",
      dataIndex: "base_strike_price",
      key: "base_strike_price",
    },
    {
      title: "Live Strike Price",
      dataIndex: "live_Strike_price",
      key: "live_Strike_price",
    },
    {
      title: "Buy Price",
      dataIndex: "buy_price",
      key: "buy_price",
    },
    {
      title: "Sell Price",
      dataIndex: "sell_price",
      key: "sell_price",
    },
    {
      title: "Stop Loseprice",
      dataIndex: "stop_loseprice",
      key: "stop_loseprice",
    },
    {
      title: "Live Brid Price",
      dataIndex: "live_brid_price",
      key: "live_brid_price",
    },
    {
      title: "Exit Price",
      dataIndex: "exit_price",
      key: "exit_price",
    },
    {
      title: "Buy Time",
      dataIndex: "buy_time",
      key: "buy_time",
      render: (text, record) => {
        return moment(text).format("DD/MM/YYYY HH:mm:ss");
      },
    },
    {
      title: "Sell Buy Time",
      dataIndex: "sell_buy_time",
      key: "sell_buy_time",
      render: (text, record) => {
        return moment(text).format("DD/MM/YYYY HH:mm:ss");
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => {
        return <Tag color={text === "BUY" ? "success" : "warning"}>{text}</Tag>;
      },
    },
    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
      render: (text, record) => {
        return text.percentage;
      },
    },
  ];

  const [data, setData] = useState([]);
  // const [setting_data, setSetting_Data] = useState([])

  useEffect(() => {
    loadNse();

    setInterval(() => {
      loadNse();
    }, 10000);
  }, []);

  const loadNse = () => {
    NseService.getNse().then((response) => {
      // console.log("sss",response.data);
      let buyData = response.data.data.filter((item) => {
        return window.location.pathname === "admin/history"
          ? item.status === "SELL"
          : item.status === "SELL";
      });
      setData(buyData);
    });
  };
  return (
    <>
      <Layout>
        <Header className='header'>
          <div className='logo' />
        </Header>

        <Layout>
          <Sidebar />

          <Layout
            style={{
              padding: "0 0 24px",
            }}
          >
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Table columns={columns} dataSource={data} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default History_data;
