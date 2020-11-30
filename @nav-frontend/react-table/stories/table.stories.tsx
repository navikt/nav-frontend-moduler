import React from "react";
import Table from "../src/index";

export default {
  title: "@nav-frontend/react-table",
  component: Table,
};

export const All = () => {
  const data = React.useMemo(
    () => [
      {
        id: "a",
        name: "Load Balancer 3",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
        attached_groups: "Kevin’s VM Groups",
        status: "Disabled",
      },
      {
        id: "b",
        name: "Load Balancer 1",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
        attached_groups: "Maureen’s VM Groups",
        status: "Starting",
      },
      {
        id: "c",
        name: "Load Balancer 2",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
        attached_groups: "Andrew’s VM Groups",
        status: "Active",
      },
      {
        id: "d",
        name: "Load Balancer 6",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
        attached_groups: "Marc’s VM Groups",
        status: "Disabled",
      },
      {
        id: "e",
        name: "Load Balancer 4",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
        attached_groups: "Mel’s VM Groups",
        status: "Starting",
      },
      {
        id: "f",
        name: "Load Balancer 5",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
        attached_groups: "Ronja’s VM Groups",
        status: "Active",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        accessor: "name",
        Header: "Name",
      },
      {
        accessor: "protocol",
        Header: "Protocol",
      },
      {
        accessor: "port",
        Header: "Port",
      },
      {
        accessor: "rule",
        Header: "Rule",
      },
      {
        accessor: "attached_groups",
        Header: "Attached Groups",
      },
      {
        accessor: "status",
        Header: "Status",
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};
