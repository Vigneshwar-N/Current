import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {data} from '../constants/data';
import axios from 'axios';
import {data2} from '../constants/data2';

export default function UseEffect() {
  const [Storage, setStorage] = useState([]);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => setStorage(res.data.products))
      .catch(error => console.error('Error fetching data:', error));
    // setStorage(data2[0].products);
  }, []);
  return Storage;
}
