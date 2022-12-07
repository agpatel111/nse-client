import React from "react";
import axios from "axios";
import NseService from "../services/NseService";
import { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "antd";
import Update_settingdata from "./Update_setting";
import Sidebar from "./Sidebar";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { LOCAL_BASE_URL } from "../api/LocalApi";
import { Layout, Table, Tag } from "antd";

const { Content } = Layout;

const { Header } = Layout;

const Setting_liveNse = () => {
  const updateData = (id) => {
    <Update_settingdata updateid={id} />;
    console.log(id);
  };

  const columes_setting = [
    {
      title: "Id",
      key: "index",
      render: (text, record, index) => index + 1,
    },

    {
      title: "Options",
      dataIndex: "option",
      key: "option",
    },

    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
    },

    {
      title: "Action",
      render: (_, record) =>
        setting_data.length >= 1 ? (
          <>
            <Popconfirm
              title='Sure to Update?'
              onConfirm={() =>
                navigate("/admin/Update_settingdata/" + record.id)
              }
            >
              <EditOutlined style={{ margin: 10, padding: 10 }} />
            </Popconfirm>

            <Popconfirm
              title='Sure to delete?'
              onConfirm={() => removeData(record.id)}
            >
              <DeleteOutlined />
            </Popconfirm>
          </>
        ) : null,
      //     render: () => <a>Delete</a>,
    },
  ];

  const [setting_data, setSetting_Data] = useState([]);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
  const [option, setOption] = useState([]);
  const [percentage, setPercentage] = useState([]);

  useEffect(() => {
    loadNse_setting();
    setInterval(() => {
      loadNse_setting();
    }, 10000);
  }, []);

  const loadNse_setting = () => {
    NseService.setting_get().then((response) => {
      let buyData = response.data.data.filter((item) => {
        return window.location.pathname === "/admin/settings";
      });
      setSetting_Data(buyData);
    });
  };

  const removeData = (id) => {
    let url = LOCAL_BASE_URL + `/delete_stock/${id}`;

    axios
      .delete(url, {
        headers: {
          authorization: "Token  " + authToken,
        },
      })
      .then((res) => {
        const del = setting_data.filter((employee) => id !== employee.id);
        setSetting_Data(del);
        console.log("res", res);
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
              <Button
                style={{ float: "left", marginBottom: "10px" }}
                type='primary'
                onClick={() => navigate("/Add_settingdata")}
              >
                New Add Data
              </Button>
              {/* <Table columns={columns} dataSource={data} /> */}
              <Table columns={columes_setting} dataSource={setting_data} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Setting_liveNse;
