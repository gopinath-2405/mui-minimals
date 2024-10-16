import React from 'react';
import * as XLSX from 'xlsx';

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

const ExportToExcel: React.FC = () => {
  const data: Person[] = [
    {
      name: 'John Doe',
      age: 30,
      address: { city: 'New York', zip: '10001' },
      hobbies: ['Reading', 'Traveling'],
    },
    {
      name: 'Jane Smith',
      age: 25,
      address: { city: 'Los Angeles', zip: '90001' },
      hobbies: ['Cooking'],
    },
    {
      name: 'Alice Johnson',
      age: 35,
      address: { city: 'Chicago', zip: '60601' },
      hobbies: ['Running', 'Photography'],
    },
  ];

  let rdf;

  const flattenData = (data: Person[]) => {
    return data.map(item => ({
      name: item.name,
      age: item.age,
      city: item.address.city,
      zip: item.address.zip,
      hobbies: item.hobbies.join(', '),
    }));
  };

  const handleExport = () => {
    const flattenedData = flattenData(data);
    
    const ws = XLSX.utils.json_to_sheet(flattenedData);
    
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }, 
      { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } }, 
      { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, 
      { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    const fileName = 'data_with_merges.xlsx';
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

export default ExportToExcel;
