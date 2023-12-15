import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface DataType {
  name: string;
  country: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Страна',
    dataIndex: 'country',
    key: 'country',
    render: (text) => <a >{text}</a>,
  },
  {
    title: 'Название школы',
    dataIndex: 'name',
    key: 'name',
  },
];

function TableComponent() {
  const LIMIT = 10;
  const [page, setPage] = useState<number>(1)
  const [dataSource, setDataSource] = useState<DataType[]>()
  const getUniversity = async (page: number, limit: number) => {
      const offset = page * 10
      const response = await axios.get(`http://universities.hipolabs.com/search?limit=${limit}&skip=${offset}`)
      setDataSource(response.data);    
  }
  useEffect(() => {
      getUniversity(page, LIMIT)
  }, [page])

  return (
      <>
          <Table dataSource={dataSource} columns={columns} pagination={false}/>
          <div className='table__page-buttons'>
              <Button onClick={() => setPage(page - 1)} disabled={page == 1}>Назад</Button>
              <p className='table__page-count'>{page}</p>
              <Button onClick={() => setPage(page + 1)}>Вперед</Button>
          </div>
      </>
  )
}



export default TableComponent;