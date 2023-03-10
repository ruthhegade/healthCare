import { Button,TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./PtnServicesContextApi";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

export default function Search() {
  const { Data } = useContext(GlobalContext);
  const { setData } = useContext(GlobalContext);
  const [selectedVal, setSelectedVal] = React.useState("");

  useEffect(() => {
    setData(Data);
  }, []);


// input serch bar 

  const HandleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setData(Data);
    }
    setSelectedVal(e.target.value);
  };


  // Search Option

  const handleSearch = () => {
    if (selectedVal === "") {
      setData(Data);
    } else {
      const sData = Data.filter(
        (item) =>
          item.PatientName.toLowerCase().includes(selectedVal.toLowerCase()) ||
          item.Doctor.toLowerCase().includes(
            selectedVal.toLowerCase()
          ) ||
          item.DoctServices.toLowerCase().includes(selectedVal.toLowerCase()) ||
          item.EntryDate.toLowerCase().includes(selectedVal.toLowerCase())
      );

      setData(sData);
    }
  };

  return (
    <div className=" lg:ml-20 flex justify-center lg:justify-start overflow-hidden pb-4">
<TextField id="outlined-basic" label="Patient Name" variant="outlined" placeholder="Patient Name" size="small"
          onChange={HandleChange}
        className=" text-lg  border-2 from-black h-7 lg:w-96" />
      {/* <input list="brow"  
       /> */}
<datalist id="brow">
  <option value="Pathalogy"/>
  <option value="OPD Charges"/>
  <option value="Mammography"/>
  <option value="X-Ray"/>
  <option value="MRI"/>
  <option value="CT-Scan"/>
  <option value="Doppler"/>
  <option value="Ultrasonography"/>
  <option value="Radiology"/>
</datalist>  




      <Button onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
}
