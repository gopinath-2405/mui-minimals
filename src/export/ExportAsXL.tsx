import React from 'react';
import * as XLSX from 'xlsx';
import { mockdata } from './data';
import { MockDataItem } from './type';

interface Address {
  city: string;
  zip: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
}

const ExportAsXL = () => {
  const data = mockdata;
  const flattenData = (data: MockDataItem[]) => {
    if(data.length === 0){
      return "The file is empty" 
    }
    return data.map(item => ({
       id: item.id,
       account_id: item.account_id,
       board_id: item.board_id,
       contract_id: item.contract_id,
       state: item.state,
    }))
  };

  const handleExport = () => {
    const flattenedData: any = flattenData(data);
    
    // Create a new workbook and a worksheet
    const ws = XLSX.utils.json_to_sheet(flattenedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    // Generate buffer and save file
    const fileName = 'data.xlsx';
    XLSX.writeFile(wb, fileName);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button onClick={handleExport}>Export to Excel</button>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};


export default ExportAsXL
