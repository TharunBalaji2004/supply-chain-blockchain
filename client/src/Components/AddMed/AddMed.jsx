import "./AddMed.css"
import { useState, useEffect } from "react";
import Web3 from "web3";
import SupplyChainABI from "../../artifacts/SupplyChain.json";
import { preLoader } from "../../Assets/Img";
import styled from 'styled-components';

const Input = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  <th scope="col"></th>
  <th scope="col"></th>
`;

import { Table } from 'antd';
const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },
  {
    title: 'Current Stage',
    dataIndex: 'CurrentStage',
    key: 'CurrentStage',
  },
];
const data = [
  {
    key: 1,
    ID: 'John Brown',
    Name: 32,
    Description: 'New York No. 1 Lake Park',
    CurrentStage: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    ID: 'John Brown',
    Name: 32,
    Description: 'New York No. 1 Lake Park',
    CurrentStage: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 3,
    ID: 'John Brown',
    Name: 32,
    Description: 'New York No. 1 Lake Park',
    CurrentStage: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 4,
    ID: 'John Brown',
    Name: 32,
    Description: 'New York No. 1 Lake Park',
    CurrentStage: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
];

function AddMed() {

  useEffect(() => {
    loadWeb3();
    loadBlockchaindata();
  }, []);

  const [currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [SupplyChain, setSupplyChain] = useState();
  const [MED, setMED] = useState();
  const [MedName, setMedName] = useState();
  const [MedDes, setMedDes] = useState();
  const [MedStage, setMedStage] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchaindata = async () => {
    setloader(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = SupplyChainABI.networks[networkId];
    if (networkData) {
      const supplychain = new web3.eth.Contract(
        SupplyChainABI.abi,
        networkData.address
      );
      setSupplyChain(supplychain);
      var i;
      const medCtr = await supplychain.methods.medicineCtr().call();
      const med = {};
      const medStage = [];
      for (i = 0; i < medCtr; i++) {
        med[i] = await supplychain.methods.MedicineStock(i + 1).call();
        medStage[i] = await supplychain.methods.showStage(i + 1).call();
      }
      setMED(med);
      setMedStage(medStage);
      setloader(false);
    } else {
      window.alert("The smart contract is not deployed to current network");
    }
  };
  if (loader) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <img src={preLoader} />
      </div>
    );
  }
  const handlerChangeNameMED = (event) => {
    setMedName(event.target.value);
  };
  const handlerChangeDesMED = (event) => {
    setMedDes(event.target.value);
  };
  const handlerSubmitMED = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .addMedicine(MedName, MedDes)
        .send({ from: currentaccount });
      if (reciept) {
        loadBlockchaindata();
      }
    } catch (err) {
      alert("An error occured!!!");
    }
  };
  return (
    <>
      {/* <div>
        <span>
          <b>Current Account Address :</b> {currentaccount}
        </span>
        <br />
        <h1>Medicine Order Page</h1>
        <h5>Add Medicine Order:</h5>

        <br />
        <h5>Ordered Medicines:</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Current Stage</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(MED).map(function (key) {
              return (
                <tr key={key}>
                  <td>{MED[key].id}</td>
                  <td>{MED[key].name}</td>
                  <td>{MED[key].description}</td>
                  <td>{MedStage[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      <section className="py-10">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="flex justify-center items-center py-5">
              <h1>Medicine Order Page</h1>
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="flex justify-start py-2 gap-2">
              <b>Current Account Address :</b> {currentaccount}
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="py-5">
              <h5>Add Medicine Order</h5>
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <form onSubmit={handlerSubmitMED} className="flex flex-col justify-center">
                <div className="group py-3">
                  <input
                    className="input p-2"
                    type="text"
                    onChange={handlerChangeNameMED}
                    placeholder="Medicine Name"
                    required
                  />
                </div>
                <div className="group py-3">
                  <input
                    className="input p-2"
                    type="text"
                    onChange={handlerChangeDesMED}
                    placeholder="Medicine Description"
                    required
                  />
                </div>
                <button className="cssbuttons-io-button w-[30%]" onSubmit={handlerSubmitMED} > Order
                  <div className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                  </div>
                </button>


              </form>
            </div>
            <div className="">
              <Table
                columns={columns}

                dataSource={data}
              />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default AddMed;
