import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiBarChart,  } from 'react-icons/fi';
import { BsKanban, BsBoxSeam, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount, MdProductionQuantityLimits } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
    Teszt szöveg
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];



export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'products',
        icon: <MdProductionQuantityLimits />,
      },
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
 
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const productsGrid = [
  {
    field: "action",
    headerText: 'Action',
    textAlign: 'Center',
    width: '120',
  }, 
  {
    field: "image",
    headerText: 'Image',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'id',
    headerText: 'ID',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'name',
    headerText: 'Product Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'price',
    headerText: 'Price',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    field: 'countInstock',
    headerText: 'Count In Stock',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'rating',
    headerText: 'Rating',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'numReviews',
    headerText: 'Number of Reviews',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'description',
    headerText: 'Description',
    width: '150',
    textAlign: 'Center',
  },
];

export const customersData = [
  {
    CustomerID: 1,
    CustomerName: 'Flora V',
    CustomerEmail: 'vflora@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Peter Peko',
    Title: 'Admin',
    HireDate: '14/06/2022',
    Country: 'HUN',
    EmployeeImage:
    avatar3,
  },
];



export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
    product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2022-06-16T05:30:00.000Z',
    EndTime: '2022-06-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];


export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];


export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];

