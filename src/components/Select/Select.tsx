import React, { FC } from 'react';
import { Select } from 'antd';

const { Option } = Select;

type SelectProps = {
  onChange: any,
  data: Array<any>,
  placeholder: string,
};

const SelectComponent: FC<SelectProps> = ({ onChange, data, placeholder }) => (
  <Select
    showSearch
    style={{ width: 300 }}
    placeholder={placeholder}
    onChange={onChange}
    filterOption={(input: string, option: any) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {
      data.map((type: { url: string, name: string }) => (
        <Option value={type.url} key={type.url}>{type.name}</Option>
      ))
    }
  </Select>
);

export default SelectComponent;
