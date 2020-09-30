import React from 'react';
import ReactDom from 'react-dom';
import './common/style/style.css';
import img from './common/img/jokerZhang.jpg';
import zhang from './common/img/zhang.png';
const timg = require('./common/img/timg.gif');

ReactDom.render(<div><img src={img} alt=""></img><img src={timg} alt="timg"></img><img src={zhang} alt="zhang"></img>react</div>,
    document.getElementById('myApp')
)