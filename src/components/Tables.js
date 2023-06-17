import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Modal, Space, Table } from "antd";

function Tables(columns, data){
    return <Table columns={columns} dataSource={data} />;
}

export default Tables;